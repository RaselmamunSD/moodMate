import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const { type, data } = await request.json()

    if (!type || !data) {
      return NextResponse.json(
        { error: 'Missing required fields: type and data' },
        { status: 400 }
      )
    }

    const zai = await ZAI.create()
    
    let emotion = 'neutral'
    let confidence = 75
    let intensity = 5

    if (type === 'text') {
      // Use AI to analyze text emotion
      const completion = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are an emotion detection expert. Analyze the given text and respond with only the emotion (happy, sad, angry, anxious, calm, excited, neutral) and a confidence score from 0-100. Format: "emotion|confidence"'
          },
          {
            role: 'user',
            content: data.text
          }
        ],
        temperature: 0.3,
        max_tokens: 50
      })

      const response = completion.choices[0]?.message?.content || 'neutral|75'
      const [detectedEmotion, confidenceScore] = response.split('|')
      emotion = detectedEmotion.trim().toLowerCase()
      confidence = parseInt(confidenceScore) || 75
      intensity = Math.ceil(confidence / 10)

    } else if (type === 'facial') {
      // Simulate facial emotion detection
      // In a real implementation, you would use a computer vision API
      const emotions = ['happy', 'sad', 'neutral', 'angry', 'anxious', 'excited', 'calm']
      emotion = emotions[Math.floor(Math.random() * emotions.length)]
      confidence = Math.floor(Math.random() * 30) + 70
      intensity = Math.floor(Math.random() * 5) + 5

    } else if (type === 'voice') {
      // Simulate voice emotion detection
      // In a real implementation, you would use a voice analysis API
      const emotions = ['happy', 'sad', 'neutral', 'anxious', 'calm']
      emotion = emotions[Math.floor(Math.random() * emotions.length)]
      confidence = Math.floor(Math.random() * 25) + 70
      intensity = Math.floor(Math.random() * 5) + 4
    }

    // Generate personalized recommendations based on emotion
    const recommendations = await generateRecommendations(zai, emotion)

    return NextResponse.json({
      emotion,
      confidence,
      intensity,
      recommendations,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Emotion detection error:', error)
    return NextResponse.json(
      { error: 'Failed to detect emotion' },
      { status: 500 }
    )
  }
}

async function generateRecommendations(zai: any, emotion: string) {
  try {
    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'Generate 3 personalized wellness recommendations for someone feeling {emotion}. Return as a JSON array of objects with title, description, and type (music, meditation, exercise, book).'
        },
        {
          role: 'user',
          content: `Generate recommendations for emotion: ${emotion}`
        }
      ],
      temperature: 0.7,
      max_tokens: 200
    })

    const response = completion.choices[0]?.message?.content
    
    // Default recommendations if AI fails
    const defaultRecommendations = [
      { title: 'Deep Breathing Exercise', description: 'Take 5 minutes to focus on your breath', type: 'meditation' },
      { title: 'Calming Music Playlist', description: 'Listen to soothing melodies', type: 'music' },
      { title: 'Short Walk', description: 'Get some fresh air and gentle movement', type: 'exercise' }
    ]

    try {
      return JSON.parse(response || '[]')
    } catch {
      return defaultRecommendations
    }

  } catch (error) {
    console.error('Recommendation generation error:', error)
    return [
      { title: 'Deep Breathing Exercise', description: 'Take 5 minutes to focus on your breath', type: 'meditation' },
      { title: 'Calming Music Playlist', description: 'Listen to soothing melodies', type: 'music' },
      { title: 'Short Walk', description: 'Get some fresh air and gentle movement', type: 'exercise' }
    ]
  }
}