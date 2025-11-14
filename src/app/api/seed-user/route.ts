import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST() {
  try {
    // Create a test user if it doesn't exist
    const existingUser = await db.user.findUnique({
      where: { email: 'test@moodmate.com' }
    })

    if (!existingUser) {
      const user = await db.user.create({
        data: {
          name: 'Test User',
          email: 'test@moodmate.com',
        }
      })

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
        message: 'Test user created successfully',
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      })
    }

    return NextResponse.json({
      message: 'Test user already exists',
      user: {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email
      }
    })

  } catch (error) {
    console.error('Test user creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create test user' },
      { status: 500 }
    )
  }
}