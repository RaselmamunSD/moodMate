import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { userId, emotion, intensity, source, notes } = await request.json()

    if (!userId || !emotion || !intensity || !source) {
      return NextResponse.json(
        { error: 'Missing required fields: userId, emotion, intensity, source' },
        { status: 400 }
      )
    }

    // Create mood entry
    const moodEntry = await db.emotionEntry.create({
      data: {
        userId,
        emotion,
        intensity: parseInt(intensity),
        source,
        notes: notes || null
      }
    })

    return NextResponse.json({
      message: 'Mood entry created successfully',
      moodEntry
    })

  } catch (error) {
    console.error('Mood entry error:', error)
    return NextResponse.json(
      { error: 'Failed to create mood entry' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const limit = parseInt(searchParams.get('limit') || '10')

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    const moodEntries = await db.emotionEntry.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit
    })

    // Calculate mood statistics
    const moodCounts = moodEntries.reduce((acc, entry) => {
      acc[entry.emotion] = (acc[entry.emotion] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const averageIntensity = moodEntries.length > 0 
      ? moodEntries.reduce((sum, entry) => sum + entry.intensity, 0) / moodEntries.length
      : 0

    return NextResponse.json({
      moodEntries,
      statistics: {
        totalEntries: moodEntries.length,
        moodCounts,
        averageIntensity: Math.round(averageIntensity * 10) / 10
      }
    })

  } catch (error) {
    console.error('Error fetching mood entries:', error)
    return NextResponse.json(
      { error: 'Failed to fetch mood entries' },
      { status: 500 }
    )
  }
}