'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Brain, 
  MessageCircle, 
  BarChart3, 
  BookOpen, 
  Heart,
  Settings,
  LogOut,
  User,
  Calendar,
  TrendingUp,
  Award,
  Target
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const [userStats] = useState({
    totalSessions: 47,
    currentStreak: 5,
    dominantEmotion: 'Happy',
    lastCheckIn: 'Today at 9:30 AM'
  })

  const [recentActivities] = useState([
    { type: 'Emotion Detection', time: '2 hours ago', result: 'Happy' },
    { type: 'AI Chat', time: 'Yesterday', duration: '15 min' },
    { type: 'Resource View', time: '2 days ago', topic: 'Meditation' },
    { type: 'Dashboard Check', time: '3 days ago', insights: '8 new' }
  ])

  const features = [
    {
      title: 'Emotion Detection',
      description: 'Analyze your current emotional state with AI',
      icon: Brain,
      href: '/emotion-detection',
      color: 'bg-blue-500 hover:bg-blue-600',
      stats: 'Used 12 times'
    },
    {
      title: 'AI Chat',
      description: 'Talk with your AI companion for support',
      icon: MessageCircle,
      href: '/ai-chat',
      color: 'bg-purple-500 hover:bg-purple-600',
      stats: '8 conversations'
    },
    {
      title: 'Resources',
      description: 'Access curated wellness resources',
      icon: BookOpen,
      href: '/resources',
      color: 'bg-green-500 hover:bg-green-600',
      stats: '15 viewed'
    },
    {
      title: 'Dashboard',
      description: 'View your emotional insights and patterns',
      icon: BarChart3,
      href: '/dashboard',
      color: 'bg-orange-500 hover:bg-orange-600',
      stats: 'Updated daily'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={user?.avatar || "/placeholder-avatar.jpg"} />
                  <AvatarFallback className="text-2xl">
                    {user?.name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{user?.name || 'John Doe'}</h1>
                  <p className="text-gray-600 mb-1">{user?.email || 'john.doe@example.com'}</p>
                  {user?.profession && (
                    <p className="text-gray-500 mb-4">{user.profession}</p>
                  )}
                  
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Joined Jan 2024
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {userStats.currentStreak} day streak
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {userStats.dominantEmotion}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    Last check-in: {userStats.lastCheckIn}
                  </p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                    <Link href="/settings">
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 text-red-600 hover:text-red-700" onClick={logout}>
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{userStats.totalSessions}</div>
              <div className="text-sm text-gray-600">Total Sessions</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{userStats.currentStreak}</div>
              <div className="text-sm text-gray-600">Day Streak</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{userStats.dominantEmotion}</div>
              <div className="text-sm text-gray-600">Dominant Emotion</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">Level 3</div>
              <div className="text-sm text-gray-600">Wellness Level</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Wellness Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-gray-500 mb-4">{feature.stats}</p>
                    <Button asChild className="w-full">
                      <Link href={feature.href}>
                        Open {feature.title}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-500" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Your latest interactions with MoodMate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{activity.type}</h4>
                      <p className="text-sm text-gray-600">{activity.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">
                      {activity.result || activity.duration || activity.topic || activity.insights}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}