'use client'

import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  MessageCircle, 
  Send, 
  Heart, 
  Sparkles, 
  User,
  Bot,
  Mic,
  MicOff,
  Smile,
  Lightbulb
} from 'lucide-react'

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
  emotion?: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI companion, here to support you through whatever you're feeling today. How are you doing right now?",
      role: 'assistant',
      timestamp: new Date(Date.now() - 60000),
      emotion: 'caring'
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI response generation
    const responses = [
      "I hear you. It sounds like you're going through a lot right now. Remember that it's okay to feel this way, and I'm here to support you.",
      "Thank you for sharing that with me. Your feelings are valid. Would you like to explore what might be causing these emotions?",
      "I appreciate you opening up to me. Let's take a moment to acknowledge these feelings together. What would feel most helpful for you right now?",
      "That sounds really challenging. You're showing strength by expressing yourself. How can I help you navigate through this?",
      "I'm here to listen. Sometimes just putting our feelings into words can help. Is there anything specific you'd like to talk about?",
      "Thank you for trusting me with this. Your emotional wellbeing matters. Let's work through this together."
    ]

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const detectEmotion = (text: string): string => {
    const lowerText = text.toLowerCase()
    if (lowerText.includes('happy') || lowerText.includes('good') || lowerText.includes('great')) return 'happy'
    if (lowerText.includes('sad') || lowerText.includes('down') || lowerText.includes('blue')) return 'sad'
    if (lowerText.includes('angry') || lowerText.includes('mad') || lowerText.includes('frustrated')) return 'angry'
    if (lowerText.includes('anxious') || lowerText.includes('worried') || lowerText.includes('nervous')) return 'anxious'
    return 'neutral'
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
      emotion: detectEmotion(input)
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    try {
      const aiResponse = await generateAIResponse(input)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: 'assistant',
        timestamp: new Date(),
        emotion: 'empathetic'
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error generating response:', error)
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // TODO: Implement voice recording functionality
  }

  const getEmotionColor = (emotion?: string) => {
    const colors: { [key: string]: string } = {
      'happy': 'bg-yellow-100 text-yellow-700',
      'sad': 'bg-blue-100 text-blue-700',
      'angry': 'bg-red-100 text-red-700',
      'anxious': 'bg-orange-100 text-orange-700',
      'caring': 'bg-green-100 text-green-700',
      'empathetic': 'bg-purple-100 text-purple-700',
      'neutral': 'bg-gray-100 text-gray-700'
    }
    return colors[emotion || 'neutral'] || colors.neutral
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const quickSuggestions = [
    "I'm feeling overwhelmed today",
    "I had a good day!",
    "I'm worried about something",
    "I need some motivation",
    "I feel lonely",
    "Help me relax"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto h-[calc(100vh-2rem)]">
        <Card className="h-full border-0 shadow-lg flex flex-col">
          <CardHeader className="border-b bg-gradient-to-r from-blue-400 to-purple-400 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-white">AI Companion</CardTitle>
                  <p className="text-blue-100 text-sm">Your emotional support friend</p>
                </div>
              </div>
              <Badge className="bg-green-500 text-white">
                Online
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === 'user' ? 'bg-blue-500' : 'bg-purple-500'
                      }`}>
                        {message.role === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className={`rounded-2xl px-4 py-2 ${
                          message.role === 'user' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>
                        <div className="flex items-center gap-2 px-1">
                          <span className="text-xs text-gray-500">
                            {formatTime(message.timestamp)}
                          </span>
                          {message.emotion && (
                            <Badge variant="secondary" className={`text-xs ${getEmotionColor(message.emotion)}`}>
                              {message.emotion}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex gap-3 max-w-[80%]">
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl px-4 py-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Quick Suggestions */}
            <div className="border-t p-4">
              <div className="mb-3">
                <p className="text-sm text-gray-600 mb-2">Quick suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickSuggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setInput(suggestion)}
                      className="text-xs rounded-full"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="pr-12 rounded-full"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={toggleRecording}
                    className={`absolute right-1 top-1 h-8 w-8 rounded-full ${
                      isRecording ? 'text-red-500' : 'text-gray-400'
                    }`}
                  >
                    {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </Button>
                </div>
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-6"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}