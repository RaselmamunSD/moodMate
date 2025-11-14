import { NextRequest, NextResponse } from 'next/server'
import { createUser, createUserSession } from '@/lib/auth'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { email, password, name, profession, avatar } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      )
    }

    const user = await createUser({ email, password, name, profession, avatar })
    const token = await createUserSession(user.id)

    // Create initial mood goal
    await db.moodGoal.create({
      data: {
        userId: user.id,
        title: 'Daily Wellness Check',
        description: 'Check in with my emotions every day',
        targetEmotion: 'balanced'
      }
    })

    return NextResponse.json({
      message: 'Registration successful',
      user,
      token
    })
  } catch (error) {
    console.error('Registration error:', error)
    if (error instanceof Error && error.message === 'User already exists') {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      )
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}