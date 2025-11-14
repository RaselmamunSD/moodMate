'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { 
  Music, 
  Book, 
  Headphones, 
  Sparkles, 
  Play, 
  Clock,
  Star,
  Heart,
  Search,
  Filter
} from 'lucide-react'

interface Resource {
  id: string
  title: string
  description: string
  type: 'music' | 'meditation' | 'book' | 'podcast' | 'exercise'
  emotion: string
  duration?: string
  rating: number
  link?: string
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEmotion, setSelectedEmotion] = useState('all')

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Happy Vibes Playlist',
      description: 'Upbeat songs to boost your mood and energy',
      type: 'music',
      emotion: 'happy',
      duration: '45 min',
      rating: 4.8,
      link: '#'
    },
    {
      id: '2',
      title: '5-Minute Breathing Exercise',
      description: 'Quick relaxation technique for anxiety relief',
      type: 'meditation',
      emotion: 'anxious',
      duration: '5 min',
      rating: 4.9,
      link: '#'
    },
    {
      id: '3',
      title: 'The Science of Happiness',
      description: 'Understanding positive psychology',
      type: 'book',
      emotion: 'neutral',
      rating: 4.7,
      link: '#'
    },
    {
      id: '4',
      title: 'Calm Morning Meditation',
      description: 'Start your day with peace and clarity',
      type: 'meditation',
      emotion: 'calm',
      duration: '15 min',
      rating: 4.6,
      link: '#'
    },
    {
      id: '5',
      title: 'Overcoming Anxiety Podcast',
      description: 'Expert discussions on managing anxiety',
      type: 'podcast',
      emotion: 'anxious',
      duration: '30 min',
      rating: 4.5,
      link: '#'
    },
    {
      id: '6',
      title: 'Gentle Yoga for Stress Relief',
      description: 'Beginner-friendly yoga poses for relaxation',
      type: 'exercise',
      emotion: 'stressed',
      duration: '20 min',
      rating: 4.8,
      link: '#'
    },
    {
      id: '7',
      title: 'Sad Songs for Healing',
      description: 'Music that helps process difficult emotions',
      type: 'music',
      emotion: 'sad',
      duration: '60 min',
      rating: 4.4,
      link: '#'
    },
    {
      id: '8',
      title: 'Mindfulness for Beginners',
      description: 'Learn the basics of mindfulness practice',
      type: 'book',
      emotion: 'neutral',
      rating: 4.9,
      link: '#'
    },
    {
      id: '9',
      title: 'Energy Boost Workout',
      description: 'Quick exercises to increase energy levels',
      type: 'exercise',
      emotion: 'tired',
      duration: '10 min',
      rating: 4.3,
      link: '#'
    }
  ]

  const emotions = ['all', 'happy', 'sad', 'anxious', 'calm', 'stressed', 'tired', 'neutral']

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesEmotion = selectedEmotion === 'all' || resource.emotion === selectedEmotion
    return matchesSearch && matchesEmotion
  })

  const getTypeIcon = (type: string) => {
    const icons = {
      music: Music,
      meditation: Sparkles,
      book: Book,
      podcast: Headphones,
      exercise: Heart
    }
    return icons[type as keyof typeof icons] || Music
  }

  const getTypeColor = (type: string) => {
    const colors = {
      music: 'bg-blue-100 text-blue-700',
      meditation: 'bg-purple-100 text-purple-700',
      book: 'bg-green-100 text-green-700',
      podcast: 'bg-orange-100 text-orange-700',
      exercise: 'bg-pink-100 text-pink-700'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700'
  }

  const getEmotionColor = (emotion: string) => {
    const colors: { [key: string]: string } = {
      'happy': 'bg-yellow-100 text-yellow-700',
      'sad': 'bg-blue-100 text-blue-700',
      'anxious': 'bg-orange-100 text-orange-700',
      'calm': 'bg-green-100 text-green-700',
      'stressed': 'bg-red-100 text-red-700',
      'tired': 'bg-gray-100 text-gray-700',
      'neutral': 'bg-purple-100 text-purple-700'
    }
    return colors[emotion] || 'bg-gray-100 text-gray-700'
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Wellness Resources</h1>
          <p className="text-gray-600">Curated content to support your emotional wellbeing</p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-full"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {emotions.map((emotion) => (
                  <Button
                    key={emotion}
                    variant={selectedEmotion === emotion ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedEmotion(emotion)}
                    className={`rounded-full ${
                      selectedEmotion === emotion 
                        ? 'bg-blue-400 hover:bg-blue-500 text-white' 
                        : ''
                    }`}
                  >
                    {emotion === 'all' ? 'All' : emotion.charAt(0).toUpperCase() + emotion.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const Icon = getTypeIcon(resource.type)
            return (
              <Card key={resource.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(resource.type)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className={getEmotionColor(resource.emotion)}>
                      {resource.emotion}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-1">{resource.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(resource.rating)}
                      <span className="text-sm text-gray-600 ml-1">({resource.rating})</span>
                    </div>
                    {resource.duration && (
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {resource.duration}
                      </div>
                    )}
                  </div>
                  <Button className="w-full bg-blue-400 hover:bg-blue-500 text-white rounded-full">
                    <Play className="w-4 h-4 mr-2" />
                    {resource.type === 'book' ? 'Read' : resource.type === 'podcast' ? 'Listen' : 'Start'}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">No resources found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Categories Overview */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['music', 'meditation', 'book', 'podcast', 'exercise'].map((type) => {
              const Icon = getTypeIcon(type)
              const count = resources.filter(r => r.type === type).length
              return (
                <Card key={type} className="border-0 shadow hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${getTypeColor(type)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-medium text-gray-800 capitalize">{type}</h3>
                    <p className="text-sm text-gray-600">{count} items</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}