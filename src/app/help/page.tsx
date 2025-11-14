'use client'

import { useState } from 'react'
import { Search, HelpCircle, Book, MessageCircle, Phone, Shield, Users, Settings, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Topics', icon: Book, color: 'blue' },
    { id: 'getting-started', name: 'Getting Started', icon: HelpCircle, color: 'green' },
    { id: 'account', name: 'Account & Billing', icon: Users, color: 'purple' },
    { id: 'features', name: 'Features', icon: Settings, color: 'orange' },
    { id: 'privacy', name: 'Privacy & Security', icon: Shield, color: 'red' },
    { id: 'technical', name: 'Technical Support', icon: MessageCircle, color: 'indigo' }
  ]

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I get started with MoodMate?',
      answer: 'Getting started is easy! Simply sign up for a free account, complete your profile, and take our initial assessment. Our AI will then personalize your experience based on your responses and preferences.',
      helpful: 45
    },
    {
      id: 2,
      category: 'getting-started',
      question: 'Is MoodMate free to use?',
      answer: 'MoodMate offers a free tier with basic features including mood tracking, limited AI chat sessions, and access to some resources. Premium features like unlimited AI chat, advanced analytics, and personalized therapy programs are available with our subscription plans.',
      helpful: 38
    },
    {
      id: 3,
      category: 'account',
      question: 'How do I update my personal information?',
      answer: 'You can update your personal information by going to Settings > Profile. From there, you can edit your name, email, phone number, and other personal details. Don\'t forget to save your changes!',
      helpful: 52
    },
    {
      id: 4,
      category: 'account',
      question: 'How do I cancel my subscription?',
      answer: 'To cancel your subscription, go to Settings > Billing > Subscription Management. Click on "Cancel Subscription" and follow the prompts. You\'ll continue to have access until the end of your current billing period.',
      helpful: 29
    },
    {
      id: 5,
      category: 'features',
      question: 'How accurate is the emotion detection?',
      answer: 'Our emotion detection AI has been trained on millions of data points and validated through clinical studies. It achieves approximately 85% accuracy in identifying emotional states. However, it\'s designed as a supportive tool, not a replacement for professional diagnosis.',
      helpful: 67
    },
    {
      id: 6,
      category: 'features',
      question: 'Can I use MoodMate with my therapist?',
      answer: 'Yes! MoodMate offers a professional version that therapists can use to monitor their clients\' progress between sessions. You can share your mood logs, AI chat summaries, and progress reports with your healthcare provider.',
      helpful: 41
    },
    {
      id: 7,
      category: 'privacy',
      question: 'Is my data secure and private?',
      answer: 'Absolutely. We use industry-standard encryption and comply with HIPAA regulations. Your data is never shared with third parties without your explicit consent, and all AI interactions are anonymized for training purposes.',
      helpful: 89
    },
    {
      id: 8,
      category: 'privacy',
      question: 'Can I delete my data?',
      answer: 'Yes, you have complete control over your data. You can request data deletion through Settings > Privacy > Data Management. We\'ll permanently delete your account and all associated data within 30 days.',
      helpful: 56
    },
    {
      id: 9,
      category: 'technical',
      question: 'Why is the app running slowly?',
      answer: 'Performance issues can be caused by various factors including internet connection, device performance, or high server load. Try clearing your cache, checking your internet connection, or restarting the app. If issues persist, contact our technical support.',
      helpful: 23
    },
    {
      id: 10,
      category: 'technical',
      question: 'Is MoodMate available offline?',
      answer: 'Basic features like mood tracking and journaling are available offline. However, AI chat and real-time features require an internet connection. Your offline data will sync automatically when you reconnect.',
      helpful: 34
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const quickActions = [
    {
      title: 'Live Chat Support',
      description: 'Chat with our support team in real-time',
      icon: MessageCircle,
      action: 'Start Chat',
      available: '24/7'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: HelpCircle,
      action: 'Send Email',
      available: 'Response within 24h'
    },
    {
      title: 'Phone Support',
      description: 'Speak with a support specialist',
      icon: Phone,
      action: 'Call Now',
      available: 'Mon-Fri, 9am-6pm PST'
    },
    {
      title: 'Community Forum',
      description: 'Get help from other users',
      icon: Users,
      action: 'Join Forum',
      available: 'Always available'
    }
  ]

  const guides = [
    {
      title: 'Complete User Guide',
      description: 'Learn everything about using MoodMate effectively',
      readTime: '15 min read',
      category: 'Getting Started'
    },
    {
      title: 'Understanding Your Mood Reports',
      description: 'How to interpret and use your mood analytics',
      readTime: '8 min read',
      category: 'Features'
    },
    {
      title: 'Privacy & Security Best Practices',
      description: 'Keep your account and data secure',
      readTime: '5 min read',
      category: 'Privacy'
    },
    {
      title: 'Troubleshooting Common Issues',
      description: 'Quick fixes for frequent problems',
      readTime: '10 min read',
      category: 'Technical'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Help Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers, get support, and learn how to make the most of MoodMate
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for help articles, FAQs, and topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-3 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{action.description}</p>
                    <p className="text-xs text-gray-500 mb-3">{action.available}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      {action.action}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                          selectedCategory === category.id ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>

            {/* Popular Articles */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Popular Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {faqs.slice(0, 4).map((faq) => (
                    <div key={faq.id} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 line-clamp-2">{faq.question}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="text-xs text-gray-500">{faq.helpful} found helpful</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* FAQs */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center justify-between w-full pr-4">
                        <span className="font-medium">{faq.question}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {categories.find(c => c.id === faq.category)?.name}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-gray-500">{faq.helpful}</span>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                      <div className="mt-4 pt-4 border-t flex items-center gap-4">
                        <span className="text-sm text-gray-500">Was this helpful?</span>
                        <Button variant="outline" size="sm">Yes</Button>
                        <Button variant="outline" size="sm">No</Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Guides */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Helpful Guides
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {guides.map((guide, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline">{guide.category}</Badge>
                        <span className="text-sm text-gray-500">{guide.readTime}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{guide.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{guide.description}</p>
                      <Button variant="outline" size="sm">
                        Read Guide
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Still Need Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is here to help you with any questions or issues
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-sm text-gray-600 mb-4">Get instant help from our support team</p>
                <Button>Start Chat</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <HelpCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-sm text-gray-600 mb-4">We'll respond within 24 hours</p>
                <Button variant="outline">Send Email</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-sm text-gray-600 mb-4">Mon-Fri, 9am-6pm PST</p>
                <Button variant="outline">Call Us</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}