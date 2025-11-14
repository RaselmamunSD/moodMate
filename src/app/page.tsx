'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Brain, MessageCircle, Sparkles, BarChart3, Users } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <div className="w-8 h-8 bg-white rounded-full animate-ping"></div>
          </div>
          <p className="text-gray-600">Thinking...</p>
        </div>
      </div>
    )
  }

  // If user is logged in, redirect to profile
  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome back, {user.name || user.email}!</h1>
            <p className="text-gray-600 mb-6">Continue your wellness journey from your profile.</p>
            <Button asChild>
              <Link href="/profile">Go to Profile</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mb-4 sm:mb-6">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
                MoodMate
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mt-1 sm:mt-2">
                  Your Intelligent AI Friend
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                Experience emotional wellness through AI-powered mood detection, 
                personalized recommendations, and compassionate companionship.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
              <Button 
                size="lg" 
                className="bg-blue-400 hover:bg-blue-500 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                asChild
              >
                <Link href="/signup">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Start Your Journey
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-300 text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-full transition-all duration-300 w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16 px-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 text-xs sm:text-sm">
                🎭 Facial Recognition
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 text-xs sm:text-sm">
                🎙️ Voice Analysis
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 text-xs sm:text-sm">
                💬 AI Chat Companion
              </Badge>
              <Badge variant="secondary" className="bg-pink-100 text-pink-700 px-2 sm:px-3 py-1 text-xs sm:text-sm">
                📊 Mood Tracking
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              How MoodMate Helps You
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Discover intelligent features designed to understand and support your emotional wellbeing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:border-gray-300 min-h-[180px] sm:min-h-[200px]">
              <CardHeader className="text-center pb-3 sm:pb-4 px-3 sm:px-4 flex flex-col justify-center h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-gray-800">Emotion Detection</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-gray-600">
                  Advanced AI analyzes your facial expressions, voice tone, and text to understand your emotions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:border-gray-300 min-h-[180px] sm:min-h-[200px]">
              <CardHeader className="text-center pb-3 sm:pb-4 px-3 sm:px-4 flex flex-col justify-center h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-gray-800">AI Companion</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-gray-600">
                  Chat with an empathetic AI friend that provides emotional support and personalized advice
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:border-gray-300 min-h-[180px] sm:min-h-[200px]">
              <CardHeader className="text-center pb-3 sm:pb-4 px-3 sm:px-4 flex flex-col justify-center h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-gray-800">Personalized Care</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-gray-600">
                  Get customized recommendations for music, meditation, and activities based on your mood
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:border-gray-300 min-h-[180px] sm:min-h-[200px]">
              <CardHeader className="text-center pb-3 sm:pb-4 px-3 sm:px-4 flex flex-col justify-center h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-gray-800">Mood Tracking</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-gray-600">
                  Visualize your emotional patterns and progress with beautiful charts and insights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:border-gray-300 min-h-[180px] sm:min-h-[200px]">
              <CardHeader className="text-center pb-3 sm:pb-4 px-3 sm:px-4 flex flex-col justify-center h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-gray-800">Wellness Resources</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-gray-600">
                  Access curated content including meditations, music, books, and therapeutic exercises
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:border-gray-300 min-h-[180px] sm:min-h-[200px]">
              <CardHeader className="text-center pb-3 sm:pb-4 px-3 sm:px-4 flex flex-col justify-center h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-gray-800">Community Support</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-gray-600">
                  Connect with others and share experiences in a safe, supportive environment
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-400 to-purple-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join thousands of users who have transformed their emotional wellbeing with MoodMate
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto max-w-xs sm:max-w-none"
            asChild
          >
            <Link href="/signup">
              Get Started Free
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}