import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    // Sample resources
    const resources = [
      {
        title: 'Happy Vibes Playlist',
        description: 'Upbeat songs to boost your mood and energy levels',
        type: 'music',
        emotion: 'happy',
        url: 'https://example.com/happy-playlist'
      },
      {
        title: '5-Minute Breathing Exercise',
        description: 'Quick relaxation technique for anxiety and stress relief',
        type: 'meditation',
        emotion: 'anxious',
        content: 'Sit comfortably and focus on your breath. Inhale for 4 counts, hold for 4, exhale for 4. Repeat.'
      },
      {
        title: 'The Science of Happiness',
        description: 'Understanding positive psychology and wellbeing',
        type: 'book',
        emotion: 'neutral',
        url: 'https://example.com/happiness-book'
      },
      {
        title: 'Calm Morning Meditation',
        description: 'Start your day with peace and mental clarity',
        type: 'meditation',
        emotion: 'calm',
        content: 'Find a quiet space, close your eyes, and focus on the present moment.'
      },
      {
        title: 'Overcoming Anxiety Podcast',
        description: 'Expert discussions on managing anxiety and stress',
        type: 'podcast',
        emotion: 'anxious',
        url: 'https://example.com/anxiety-podcast'
      },
      {
        title: 'Gentle Yoga for Stress Relief',
        description: 'Beginner-friendly yoga poses for relaxation',
        type: 'exercise',
        emotion: 'stressed',
        content: 'Simple stretches and poses to release tension in the body.'
      },
      {
        title: 'Sad Songs for Healing',
        description: 'Music that helps process and release difficult emotions',
        type: 'music',
        emotion: 'sad',
        url: 'https://example.com/healing-playlist'
      },
      {
        title: 'Mindfulness for Beginners',
        description: 'Learn the basics of mindfulness practice',
        type: 'book',
        emotion: 'neutral',
        url: 'https://example.com/mindfulness-book'
      },
      {
        title: 'Energy Boost Workout',
        description: 'Quick exercises to increase energy and alertness',
        type: 'exercise',
        emotion: 'tired',
        content: '10-minute routine with jumping jacks, push-ups, and stretches.'
      },
      {
        title: 'Relaxing Nature Sounds',
        description: 'Natural soundscapes for deep relaxation and sleep',
        type: 'music',
        emotion: 'calm',
        url: 'https://example.com/nature-sounds'
      },
      {
        title: 'Gratitude Journal Prompts',
        description: 'Daily prompts to practice gratitude and positive thinking',
        type: 'book',
        emotion: 'happy',
        content: 'Write down three things you are grateful for today and why.'
      },
      {
        title: 'Progressive Muscle Relaxation',
        description: 'Technique to release physical tension and anxiety',
        type: 'meditation',
        emotion: 'anxious',
        content: 'Systematically tense and relax different muscle groups in your body.'
      }
    ]

    // Insert resources into database
    for (const resource of resources) {
      await db.resource.create({
        data: resource
      })
    }

    return NextResponse.json({
      message: 'Database seeded successfully',
      resourcesCount: resources.length
    })

  } catch (error) {
    console.error('Seeding error:', error)
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    )
  }
}