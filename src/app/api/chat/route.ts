import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { message, userId } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const zai = await ZAI.create()
    
    // Get user's emotion history for context (if userId provided)
    let emotionContext = ''
    if (userId) {
      try {
        const recentEmotions = await db.emotionEntry.findMany({
          where: { userId },
          orderBy: { createdAt: 'desc' },
          take: 5
        })
        
        if (recentEmotions.length > 0) {
          emotionContext = `Recent emotions: ${recentEmotions.map(e => e.emotion).join(', ')}. `
        }
      } catch (error) {
        console.error('Error fetching user emotions:', error)
      }
    }

    // Create empathetic AI response
    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are MoodMate, an empathetic AI companion focused on emotional wellness and mental health support. ${emotionContext}
          
          Guidelines:
          - Be warm, caring, and supportive
          - Validate the user's feelings
          - Offer practical, gentle suggestions
          - Avoid giving medical advice
          - Encourage self-care and healthy coping mechanisms
          - Be conversational and natural
          - Keep responses concise but meaningful (2-4 sentences)
          - If user seems in crisis, suggest professional help`
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.8,
      max_tokens: 150
    })

    const aiResponse = completion.choices[0]?.message?.content || 
      "I'm here to support you. Could you tell me more about how you're feeling?"

    // Save chat messages to database if userId provided
    if (userId) {
      try {
        // Save user message
        await db.chatMessage.create({
          data: {
            userId,
            content: message,
            role: 'user',
            emotion: detectEmotion(message)
          }
        })

        // Save AI response
        await db.chatMessage.create({
          data: {
            userId,
            content: aiResponse,
            role: 'assistant',
            emotion: 'empathetic'
          }
        })
      } catch (error) {
        console.error('Error saving chat messages:', error)
      }
    }

    return NextResponse.json({
      message: aiResponse,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}

function detectEmotion(text: string): string {
  const lowerText = text.toLowerCase()
  
  if (lowerText.includes('happy') || lowerText.includes('good') || lowerText.includes('great')) {
    return 'happy'
  }
  if (lowerText.includes('sad') || lowerText.includes('down') || lowerText.includes('blue')) {
    return 'sad'
  }
  if (lowerText.includes('angry') || lowerText.includes('mad') || lowerText.includes('frustrated')) {
    return 'angry'
  }
  if (lowerText.includes('anxious') || lowerText.includes('worried') || lowerText.includes('nervous')) {
    return 'anxious'
  }
  if (lowerText.includes('tired') || lowerText.includes('exhausted')) {
    return 'tired'
  }
  if (lowerText.includes('excited') || lowerText.includes('thrilled')) {
    return 'excited'
  }
  
  return 'neutral'
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    const messages = await db.chatMessage.findMany({
      where: { userId },
      orderBy: { createdAt: 'asc' },
      take: 50
    })

    return NextResponse.json({ messages })

  } catch (error) {
    console.error('Error fetching chat history:', error)
    return NextResponse.json(
      { error: 'Failed to fetch chat history' },
      { status: 500 }
    )
  }
}