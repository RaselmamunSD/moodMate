import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { db } from '@/lib/db'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export interface AuthUser {
  id: string
  email: string
  name?: string
  avatar?: string
  profession?: string
  emailVerified?: Date
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  name?: string
  profession?: string
  avatar?: string
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string): { userId: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string }
  } catch {
    return null
  }
}

export async function createUser(data: RegisterData): Promise<AuthUser> {
  const existingUser = await db.user.findUnique({
    where: { email: data.email }
  })

  if (existingUser) {
    throw new Error('User already exists')
  }

  const passwordHash = await hashPassword(data.password)

  const user = await db.user.create({
    data: {
      email: data.email,
      name: data.name,
      profession: data.profession,
      avatar: data.avatar,
      passwordHash,
      emailVerified: new Date() // Auto-verify for demo
    },
    select: {
      id: true,
      email: true,
      name: true,
      avatar: true,
      profession: true,
      emailVerified: true
    }
  })

  return user
}

export async function authenticateUser(credentials: LoginCredentials): Promise<AuthUser | null> {
  const user = await db.user.findUnique({
    where: { email: credentials.email },
    select: {
      id: true,
      email: true,
      name: true,
      avatar: true,
      profession: true,
      emailVerified: true,
      passwordHash: true
    }
  })

  if (!user || !user.passwordHash) {
    return null
  }

  const isValid = await verifyPassword(credentials.password, user.passwordHash)
  if (!isValid) {
    return null
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash, ...authUser } = user
  return authUser
}

export async function createUserSession(userId: string): Promise<string> {
  const token = generateToken(userId)
  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 7) // 7 days

  await db.userSession.create({
    data: {
      userId,
      token,
      expiresAt
    }
  })

  return token
}

export async function validateSession(token: string): Promise<AuthUser | null> {
  const payload = verifyToken(token)
  if (!payload) {
    return null
  }

  const session = await db.userSession.findUnique({
    where: { token },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          name: true,
          avatar: true,
          profession: true,
          emailVerified: true
        }
      }
    }
  })

  if (!session || session.expiresAt < new Date()) {
    // Clean up expired session
    if (session) {
      await db.userSession.delete({ where: { token } })
    }
    return null
  }

  return session.user
}

export async function deleteSession(token: string): Promise<void> {
  await db.userSession.delete({ where: { token } })
}

export async function getUserById(id: string): Promise<AuthUser | null> {
  const user = await db.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      avatar: true,
      profession: true,
      emailVerified: true
    }
  })

  return user
}