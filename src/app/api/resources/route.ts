import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const emotion = searchParams.get('emotion')
    const type = searchParams.get('type')

    // Build filter conditions
    const whereCondition: any = { isActive: true }
    
    if (emotion && emotion !== 'all') {
      whereCondition.emotion = emotion
    }
    
    if (type && type !== 'all') {
      whereCondition.type = type
    }

    const resources = await db.resource.findMany({
      where: whereCondition,
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ resources })

  } catch (error) {
    console.error('Error fetching resources:', error)
    return NextResponse.json(
      { error: 'Failed to fetch resources' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description, type, emotion, url, content } = await request.json()

    if (!title || !type || !emotion) {
      return NextResponse.json(
        { error: 'Missing required fields: title, type, emotion' },
        { status: 400 }
      )
    }

    const resource = await db.resource.create({
      data: {
        title,
        description,
        type,
        emotion,
        url: url || null,
        content: content || null
      }
    })

    return NextResponse.json({
      message: 'Resource created successfully',
      resource
    })

  } catch (error) {
    console.error('Error creating resource:', error)
    return NextResponse.json(
      { error: 'Failed to create resource' },
      { status: 500 }
    )
  }
}