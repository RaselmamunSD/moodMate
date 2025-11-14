import { NextRequest, NextResponse } from 'next/server'
import { validateSession, deleteSession } from '@/lib/auth'
import { db } from '@/lib/db'

export async function DELETE(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!token) {
      return NextResponse.json(
        { error: 'Authorization token required' },
        { status: 401 }
      )
    }

    const user = await validateSession(token)
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      )
    }

    // Delete user and all related data (due to cascade delete)
    await db.user.delete({
      where: { id: user.id }
    })

    // Delete the session
    await deleteSession(token)

    return NextResponse.json({
      message: 'Account deleted successfully'
    })
  } catch (error) {
    console.error('Account deletion error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}