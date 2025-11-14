'use client'

import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'
import { 
  Camera, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  MessageCircle, 
  Brain,
  Sparkles,
  Heart,
  Smile,
  Frown,
  Meh,
  Angry,
  Zap
} from 'lucide-react'

export default function EmotionDetectionPage() {
  const [activeTab, setActiveTab] = useState('facial')
  const [isScanning, setIsScanning] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [detectedEmotion, setDetectedEmotion] = useState<{
    emotion: string
    confidence: number
    intensity: number
  } | null>(null)
  const [textInput, setTextInput] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoOn, setIsVideoOn] = useState(false)

  const emotions = [
    { name: 'Happy', icon: Smile, color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Sad', icon: Frown, color: 'bg-blue-100 text-blue-700' },
    { name: 'Neutral', icon: Meh, color: 'bg-gray-100 text-gray-700' },
    { name: 'Angry', icon: Angry, color: 'bg-red-100 text-red-700' },
    { name: 'Excited', icon: Zap, color: 'bg-pink-100 text-pink-700' },
    { name: 'Calm', icon: Heart, color: 'bg-green-100 text-green-700' }
  ]

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsVideoOn(true)
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
      alert('Unable to access camera. Please check permissions.')
    }
  }

  const stopVideo = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach(track => track.stop())
      videoRef.current.srcObject = null
      setIsVideoOn(false)
    }
  }

  const startFacialScan = () => {
    setIsScanning(true)
    // Simulate emotion detection
    setTimeout(() => {
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)]
      setDetectedEmotion({
        emotion: randomEmotion.name,
        confidence: Math.floor(Math.random() * 30) + 70,
        intensity: Math.floor(Math.random() * 5) + 5
      })
      setIsScanning(false)
    }, 3000)
  }

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false)
      // Simulate voice analysis
      setTimeout(() => {
        const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)]
        setDetectedEmotion({
          emotion: randomEmotion.name,
          confidence: Math.floor(Math.random() * 30) + 70,
          intensity: Math.floor(Math.random() * 5) + 5
        })
      }, 1000)
    } else {
      setIsRecording(true)
    }
  }

  const analyzeText = () => {
    if (!textInput.trim()) return
    
    setIsAnalyzing(true)
    // Simulate text emotion analysis
    setTimeout(() => {
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)]
      setDetectedEmotion({
        emotion: randomEmotion.name,
        confidence: Math.floor(Math.random() * 30) + 70,
        intensity: Math.floor(Math.random() * 5) + 5
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  const getEmotionIcon = (emotionName: string) => {
    const emotion = emotions.find(e => e.name === emotionName)
    return emotion ? emotion.icon : Heart
  }

  const getEmotionColor = (emotionName: string) => {
    const emotion = emotions.find(e => e.name === emotionName)
    return emotion ? emotion.color : 'bg-gray-100 text-gray-700'
  }

  useEffect(() => {
    return () => {
      stopVideo()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Emotion Detection</h1>
          <p className="text-gray-600">Let AI help you understand your emotional state</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="facial" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Facial
            </TabsTrigger>
            <TabsTrigger value="voice" className="flex items-center gap-2">
              <Mic className="w-4 h-4" />
              Voice
            </TabsTrigger>
            <TabsTrigger value="text" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Text
            </TabsTrigger>
          </TabsList>

          {/* Facial Recognition */}
          <TabsContent value="facial" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-blue-500" />
                  Facial Expression Analysis
                </CardTitle>
                <CardDescription>
                  Allow camera access to analyze your facial expressions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      {isVideoOn ? (
                        <video
                          ref={videoRef}
                          autoPlay
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center">
                            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600">Camera is off</p>
                          </div>
                        </div>
                      )}
                      {isScanning && (
                        <div className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center">
                          <div className="text-center">
                            <Brain className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-pulse" />
                            <p className="text-blue-700 font-medium">Analyzing expression...</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        onClick={isVideoOn ? stopVideo : startVideo}
                        variant="outline"
                        className="flex-1 rounded-full"
                      >
                        {isVideoOn ? <VideoOff className="w-4 h-4 mr-2" /> : <Video className="w-4 h-4 mr-2" />}
                        {isVideoOn ? 'Stop Camera' : 'Start Camera'}
                      </Button>
                      <Button
                        onClick={startFacialScan}
                        disabled={!isVideoOn || isScanning}
                        className="flex-1 bg-blue-400 hover:bg-blue-500 text-white rounded-full"
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        {isScanning ? 'Scanning...' : 'Analyze'}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-800">Detection Tips:</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        Ensure good lighting on your face
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        Look directly at the camera
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        Keep a neutral expression first, then show your emotion
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        Remove glasses if they cause glare
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Voice Analysis */}
          <TabsContent value="voice" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="w-5 h-5 text-purple-500" />
                  Voice Tone Analysis
                </CardTitle>
                <CardDescription>
                  Speak naturally and let AI analyze your emotional tone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-6">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className={`w-32 h-32 rounded-full flex items-center justify-center ${
                      isRecording ? 'bg-red-100 animate-pulse' : 'bg-gray-100'
                    }`}>
                      <Mic className={`w-16 h-16 ${isRecording ? 'text-red-500' : 'text-gray-400'}`} />
                    </div>
                    {isRecording && (
                      <div className="absolute inset-0 rounded-full border-4 border-red-400 animate-ping" />
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      {isRecording ? 'Listening... Speak naturally' : 'Click the button to start recording'}
                    </p>
                    <Button
                      onClick={toggleRecording}
                      size="lg"
                      className={`rounded-full ${
                        isRecording 
                          ? 'bg-red-500 hover:bg-red-600 text-white' 
                          : 'bg-purple-400 hover:bg-purple-500 text-white'
                      }`}
                    >
                      {isRecording ? <MicOff className="w-5 h-5 mr-2" /> : <Mic className="w-5 h-5 mr-2" />}
                      {isRecording ? 'Stop Recording' : 'Start Recording'}
                    </Button>
                  </div>

                  <div className="text-sm text-gray-500 max-w-md mx-auto">
                    <p>Speak for at least 10 seconds to get accurate results.</p>
                    <p>The AI analyzes pitch, tone, speed, and other vocal patterns.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Text Analysis */}
          <TabsContent value="text" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  Text Sentiment Analysis
                </CardTitle>
                <CardDescription>
                  Write about how you're feeling and let AI analyze your emotions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea
                    placeholder="Describe how you're feeling right now... What's on your mind? How was your day?"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    className="min-h-32 resize-none"
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {textInput.length} characters
                    </span>
                    <Button
                      onClick={analyzeText}
                      disabled={!textInput.trim() || isAnalyzing}
                      className="bg-green-400 hover:bg-green-500 text-white rounded-full"
                    >
                      <Brain className="w-4 h-4 mr-2" />
                      {isAnalyzing ? 'Analyzing...' : 'Analyze Text'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Results Section */}
        {detectedEmotion && (
          <Card className="mt-8 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                Detection Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${getEmotionColor(detectedEmotion.emotion)}`}>
                    {(() => {
                      const Icon = getEmotionIcon(detectedEmotion.emotion)
                      return <Icon className="w-10 h-10" />
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{detectedEmotion.emotion}</h3>
                  <p className="text-gray-600">Detected Emotion</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Confidence</span>
                      <span className="font-medium">{detectedEmotion.confidence}%</span>
                    </div>
                    <Progress value={detectedEmotion.confidence} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Intensity</span>
                      <span className="font-medium">{detectedEmotion.intensity}/10</span>
                    </div>
                    <Progress value={detectedEmotion.intensity * 10} className="h-2" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Recommendations:</h4>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      🎵 Listen to uplifting music
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      🧘 Try a 5-minute meditation
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      💬 Chat with AI companion
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}