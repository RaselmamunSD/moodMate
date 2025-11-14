'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Brain, 
  MessageCircle, 
  BarChart3, 
  BookOpen, 
  Heart,
  TrendingUp,
  Calendar,
  Clock,
  Target,
  Award,
  Zap,
  Smile,
  Frown,
  Meh,
  AlertCircle,
  Eye,
  Download,
  RefreshCw,
  Star,
  Users,
  Music,
  Moon,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

export default function DashboardPage() {
  const { user } = useAuth()
  const [selectedPeriod, setSelectedPeriod] = useState('week')

  // Check if user is in demo mode
  const isDemoMode = !user

  // Mock data for dashboard
  const stats = {
    totalSessions: 47,
    currentStreak: 5,
    averageMood: 7.8,
    improvementRate: 23,
    totalChatTime: 320,
    resourcesViewed: 28,
    goalsCompleted: 12,
    mindfulnessMinutes: 145
  }

  const emotionBreakdown = [
    { emotion: 'Happy', percentage: 68, color: 'bg-green-500', icon: Smile, count: 32 },
    { emotion: 'Neutral', percentage: 15, color: 'bg-gray-500', icon: Meh, count: 7 },
    { emotion: 'Anxious', percentage: 12, color: 'bg-yellow-500', icon: AlertCircle, count: 6 },
    { emotion: 'Sad', percentage: 5, color: 'bg-blue-500', icon: Frown, count: 2 }
  ]

  const recentInsights = [
    {
      title: 'Mood Improvement Detected',
      description: 'Your happiness levels have increased by 15% this week',
      type: 'positive',
      time: '2 hours ago',
      icon: TrendingUp
    },
    {
      title: 'Anxiety Pattern Identified',
      description: 'Higher anxiety levels detected in the evening hours',
      type: 'warning',
      time: '1 day ago',
      icon: AlertCircle
    },
    {
      title: 'Consistency Achievement',
      description: 'You\'ve maintained a 5-day check-in streak!',
      type: 'achievement',
      time: '2 days ago',
      icon: Award
    },
    {
      title: 'Resource Engagement',
      description: 'Meditation resources showing positive impact on your mood',
      type: 'insight',
      time: '3 days ago',
      icon: BookOpen
    }
  ]

  const recommendations = [
    {
      title: 'Evening Meditation',
      description: 'Try our 10-minute evening meditation to reduce anxiety',
      type: 'meditation',
      priority: 'high',
      icon: Moon
    },
    {
      title: 'Gratitude Journal',
      description: 'Start a daily gratitude practice to boost happiness',
      type: 'activity',
      priority: 'medium',
      icon: BookOpen
    },
    {
      title: 'Social Connection',
      description: 'Reach out to friends or family for emotional support',
      type: 'social',
      priority: 'medium',
      icon: Users
    }
  ]

  const goals = [
    {
      title: 'Daily Mood Tracking',
      progress: 85,
      target: 30,
      current: 25,
      unit: 'days',
      icon: Target,
      color: 'bg-blue-500'
    },
    {
      title: 'Mindfulness Minutes',
      progress: 60,
      target: 240,
      current: 145,
      unit: 'minutes',
      icon: Clock,
      color: 'bg-purple-500'
    },
    {
      title: 'AI Chat Sessions',
      progress: 70,
      target: 20,
      current: 14,
      unit: 'sessions',
      icon: MessageCircle,
      color: 'bg-green-500'
    },
    {
      title: 'Resource Exploration',
      progress: 45,
      target: 60,
      current: 27,
      unit: 'resources',
      icon: BookOpen,
      color: 'bg-orange-500'
    }
  ]

  const getTrendIcon = (trend: number) => {
    if (trend > 0) return <ArrowUp className="w-4 h-4 text-green-500" />
    if (trend < 0) return <ArrowDown className="w-4 h-4 text-red-500" />
    return <Minus className="w-4 h-4 text-gray-500" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Demo Banner */}
        {isDemoMode && (
          <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600">👁️</span>
              </div>
              <div>
                <h3 className="font-medium text-yellow-800">Demo Mode</h3>
                <p className="text-sm text-yellow-600">You're viewing a demo dashboard. Please log in to see your actual data.</p>
              </div>
              <Button asChild className="ml-auto">
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        )}

        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Wellness Dashboard</h1>
              <p className="text-gray-600">Track your emotional journey and discover insights</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex gap-1 p-1 bg-gray-100 rounded-lg">
                {['day', 'week', 'month'].map((period) => (
                  <Button
                    key={period}
                    variant={selectedPeriod === period ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setSelectedPeriod(period)}
                    className="capitalize"
                  >
                    {period}
                  </Button>
                ))}
              </div>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex items-center gap-1">
                  {getTrendIcon(15)}
                  <span className="text-sm text-green-600">+15%</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-800">{stats.totalSessions}</div>
              <div className="text-sm text-gray-600">Total Sessions</div>
              <div className="mt-2 text-xs text-gray-500">Last 30 days</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex items-center gap-1">
                  {getTrendIcon(0)}
                  <span className="text-sm text-gray-600">Same</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-800">{stats.currentStreak}</div>
              <div className="text-sm text-gray-600">Day Streak</div>
              <div className="mt-2 text-xs text-gray-500">Keep it going!</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex items-center gap-1">
                  {getTrendIcon(23)}
                  <span className="text-sm text-green-600">+23%</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-800">{stats.averageMood}/10</div>
              <div className="text-sm text-gray-600">Average Mood</div>
              <div className="mt-2 text-xs text-gray-500">Great progress!</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex items-center gap-1">
                  {getTrendIcon(8)}
                  <span className="text-sm text-green-600">+8%</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-800">{stats.totalChatTime}</div>
              <div className="text-sm text-gray-600">Chat Minutes</div>
              <div className="mt-2 text-xs text-gray-500">This month</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Emotion Breakdown */}
          <Card className="border-0 shadow-lg lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-500" />
                Emotion Analysis
              </CardTitle>
              <CardDescription>
                Your emotional patterns over the selected period
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {emotionBreakdown.map((emotion) => {
                  const Icon = emotion.icon
                  return (
                    <div key={emotion.emotion} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 ${emotion.color} rounded-full flex items-center justify-center`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium text-gray-700">{emotion.emotion}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{emotion.count} times</span>
                          <span className="font-bold text-gray-800">{emotion.percentage}%</span>
                        </div>
                      </div>
                      <Progress value={emotion.percentage} className="h-2" />
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Access your most used features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full justify-start">
                <Link href="/emotion-detection">
                  <Brain className="w-4 h-4 mr-2" />
                  Check Emotion
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/ai-chat">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  AI Companion
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/resources">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Resources
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/meditation">
                  <Music className="w-4 h-4 mr-2" />
                  Meditation
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Goals Progress */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-500" />
                Goals Progress
              </CardTitle>
              <CardDescription>
                Track your wellness goals and achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {goals.map((goal) => {
                  const Icon = goal.icon
                  return (
                    <div key={goal.title} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 ${goal.color} rounded-full flex items-center justify-center`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium text-gray-700">{goal.title}</span>
                        </div>
                        <span className="text-sm text-gray-600">
                          {goal.current}/{goal.target} {goal.unit}
                        </span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{goal.progress}% complete</span>
                        <span>{goal.target - goal.current} {goal.unit} to go</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Recent Insights */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-green-500" />
                Recent Insights
              </CardTitle>
              <CardDescription>
                AI-powered discoveries about your emotional patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInsights.map((insight, index) => {
                  const Icon = insight.icon
                  return (
                    <div key={index} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        insight.type === 'positive' ? 'bg-green-100' :
                        insight.type === 'warning' ? 'bg-yellow-100' :
                        insight.type === 'achievement' ? 'bg-purple-100' : 'bg-blue-100'
                      }`}>
                        <Icon className={`w-4 h-4 ${
                          insight.type === 'positive' ? 'text-green-600' :
                          insight.type === 'warning' ? 'text-yellow-600' :
                          insight.type === 'achievement' ? 'text-purple-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm">{insight.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{insight.description}</p>
                        <p className="text-xs text-gray-500 mt-2">{insight.time}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Personalized Recommendations
            </CardTitle>
            <CardDescription>
              AI-suggested activities based on your emotional patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recommendations.map((rec, index) => {
                const Icon = rec.icon
                return (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        rec.priority === 'high' ? 'bg-red-100' : 'bg-blue-100'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          rec.priority === 'high' ? 'text-red-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm">{rec.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{rec.description}</p>
                        <div className="flex items-center justify-between mt-3">
                          <Badge variant={rec.priority === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                            {rec.priority} priority
                          </Badge>
                          <Button size="sm" variant="outline" className="text-xs">
                            Try Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}