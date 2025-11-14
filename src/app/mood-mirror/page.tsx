'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  UserCircle, 
  Heart, 
  Brain, 
  Smile, 
  Frown, 
  Meh, 
  Angry, 
  Zap,
  Sparkles,
  TrendingUp,
  Calendar,
  Activity,
  Eye,
  Lightbulb
} from 'lucide-react'

export default function MoodMirrorPage() {
  const [currentEmotion, setCurrentEmotion] = useState({
    primary: 'Happy',
    secondary: 'Excited',
    intensity: 8,
    confidence: 92
  })

  const [emotionHistory] = useState([
    { date: '2024-01-15', emotion: 'Happy', intensity: 8, factors: ['Good sleep', 'Exercise'] },
    { date: '2024-01-14', emotion: 'Calm', intensity: 6, factors: ['Meditation', 'Tea time'] },
    { date: '2024-01-13', emotion: 'Anxious', intensity: 7, factors: ['Work stress', 'Deadline'] },
    { date: '2024-01-12', emotion: 'Happy', intensity: 9, factors: ['Friends', 'Weekend'] },
    { date: '2024-01-11', emotion: 'Neutral', intensity: 5, factors: ['Routine day'] }
  ])

  const [emotionInsights] = useState([
    {
      title: 'Morning Person',
      description: 'Your mood is typically 30% better in the morning hours',
      icon: '🌅',
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      title: 'Social Butterfly',
      description: 'Interactions with friends boost your happiness by 45%',
      icon: '👥',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Nature Lover',
      description: 'Outdoor activities improve your mood significantly',
      icon: '🌳',
      color: 'bg-green-100 text-green-700'
    }
  ])

  const [recommendations] = useState([
    {
      type: 'Activity',
      title: 'Morning Walk',
      description: 'Start your day with a 15-minute walk in nature',
      impact: 'High',
      time: '15 min'
    },
    {
      type: 'Social',
      title: 'Call a Friend',
      description: 'Connect with someone who makes you happy',
      impact: 'Medium',
      time: '20 min'
    },
    {
      type: 'Wellness',
      title: 'Gratitude Journal',
      description: 'Write down 3 things you are grateful for',
      impact: 'High',
      time: '10 min'
    }
  ])

  const emotions = [
    { name: 'Happy', icon: Smile, color: 'bg-yellow-100 text-yellow-700', percentage: 35 },
    { name: 'Calm', icon: Heart, color: 'bg-blue-100 text-blue-700', percentage: 25 },
    { name: 'Excited', icon: Zap, color: 'bg-pink-100 text-pink-700', percentage: 20 },
    { name: 'Neutral', icon: Meh, color: 'bg-gray-100 text-gray-700', percentage: 10 },
    { name: 'Anxious', icon: Brain, color: 'bg-orange-100 text-orange-700', percentage: 7 },
    { name: 'Sad', icon: Frown, color: 'bg-indigo-100 text-indigo-700', percentage: 3 }
  ]

  const getEmotionColor = (emotion: string) => {
    const colors: { [key: string]: string } = {
      'Happy': 'bg-yellow-100 text-yellow-700',
      'Calm': 'bg-blue-100 text-blue-700',
      'Excited': 'bg-pink-100 text-pink-700',
      'Neutral': 'bg-gray-100 text-gray-700',
      'Anxious': 'bg-orange-100 text-orange-700',
      'Sad': 'bg-indigo-100 text-indigo-700',
      'Angry': 'bg-red-100 text-red-700'
    }
    return colors[emotion] || 'bg-gray-100 text-gray-700'
  }

  const getImpactColor = (impact: string) => {
    const colors: { [key: string]: string } = {
      'High': 'bg-green-100 text-green-700',
      'Medium': 'bg-yellow-100 text-yellow-700',
      'Low': 'bg-gray-100 text-gray-700'
    }
    return colors[impact] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <UserCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Mood Mirror</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reflect on your emotional patterns and discover deeper insights about your wellbeing
          </p>
        </div>

        {/* Current Emotion Display */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Eye className="w-5 h-5 text-purple-500" />
              Your Current Emotional State
            </CardTitle>
            <CardDescription>
              Real-time analysis of your emotional wellbeing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${getEmotionColor(currentEmotion.primary)}`}>
                  <Smile className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{currentEmotion.primary}</h3>
                <p className="text-gray-600 mb-2">Primary Emotion</p>
                <Badge variant="secondary" className="mb-4">
                  {currentEmotion.confidence}% Confidence
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Intensity</span>
                    <span className="font-medium">{currentEmotion.intensity}/10</span>
                  </div>
                  <Progress value={currentEmotion.intensity * 10} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Secondary Emotion</span>
                    <span className="font-medium">{currentEmotion.secondary}</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>Analysis:</strong> You're feeling positive and energetic today. 
                    Your emotional state suggests this is a great time for creative activities and social interactions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Emotion Distribution */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-500" />
                Emotion Distribution
              </CardTitle>
              <CardDescription>
                Your emotional patterns over the past month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {emotions.map((emotion) => {
                  const Icon = emotion.icon
                  return (
                    <div key={emotion.name} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${emotion.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">{emotion.name}</span>
                          <span className="text-gray-600">{emotion.percentage}%</span>
                        </div>
                        <Progress value={emotion.percentage} className="h-1" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Personalized Insights */}
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Personalized Insights
              </CardTitle>
              <CardDescription>
                AI-powered discoveries about your emotional patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {emotionInsights.map((insight, index) => (
                  <div key={index} className={`p-4 rounded-lg ${insight.color}`}>
                    <div className="text-2xl mb-2">{insight.icon}</div>
                    <h4 className="font-medium text-gray-800 mb-1">{insight.title}</h4>
                    <p className="text-sm text-gray-700">{insight.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="history">Emotion History</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-4">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  Recent Emotional Journey
                </CardTitle>
                <CardDescription>
                  Track your emotional patterns and identify triggers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {emotionHistory.map((entry, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getEmotionColor(entry.emotion)}`}>
                          <Smile className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">{entry.emotion}</h4>
                          <p className="text-sm text-gray-600">{entry.date}</p>
                          <div className="flex gap-2 mt-1">
                            {entry.factors.map((factor, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {factor}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Intensity</div>
                        <div className="text-lg font-bold">{entry.intensity}/10</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-green-500" />
                  Personalized Recommendations
                </CardTitle>
                <CardDescription>
                  Activities and suggestions based on your emotional patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">{rec.type}</Badge>
                        <Badge className={getImpactColor(rec.impact)}>
                          {rec.impact} Impact
                        </Badge>
                      </div>
                      <h4 className="font-medium text-gray-800 mb-2">{rec.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{rec.time}</span>
                        <Button size="sm" variant="outline" className="rounded-full">
                          Try Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}