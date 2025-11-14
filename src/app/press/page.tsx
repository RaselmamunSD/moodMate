'use client'

import { useState } from 'react'
import { Newspaper, Download, Calendar, ExternalLink, Mail, Camera, FileText, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

export default function PressPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const pressReleases = [
    {
      id: 1,
      title: "MoodMate Raises $20M Series B to Revolutionize Mental Health Care",
      date: "November 15, 2024",
      category: "Funding",
      summary: "Leading mental health AI platform secures major funding to expand services and reach more users globally.",
      downloadUrl: "#",
      readMoreUrl: "#"
    },
    {
      id: 2,
      title: "New Study Shows MoodMate AI Reduces Anxiety Symptoms by 45%",
      date: "October 28, 2024",
      category: "Research",
      summary: "Independent clinical study demonstrates significant improvements in user mental health outcomes.",
      downloadUrl: "#",
      readMoreUrl: "#"
    },
    {
      id: 3,
      title: "MoodMate Partners with Major Healthcare Providers",
      date: "September 12, 2024",
      category: "Partnership",
      summary: "Strategic partnerships with leading healthcare systems to integrate AI-powered mental health support.",
      downloadUrl: "#",
      readMoreUrl: "#"
    },
    {
      id: 4,
      title: "MoodMate Reaches 1 Million Users Milestone",
      date: "August 5, 2024",
      category: "Milestone",
      summary: "AI-powered mental health platform celebrates major user adoption milestone with 95% satisfaction rate.",
      downloadUrl: "#",
      readMoreUrl: "#"
    }
  ]

  const mediaCoverage = [
    {
      id: 1,
      publication: "TechCrunch",
      title: "How MoodMate is Using AI to Make Mental Health Care Accessible",
      date: "November 10, 2024",
      author: "Sarah Johnson",
      url: "#",
      category: "Technology"
    },
    {
      id: 2,
      publication: "Forbes",
      title: "The Future of Mental Health: AI-Powered Support Systems",
      date: "October 25, 2024",
      author: "Michael Chen",
      url: "#",
      category: "Business"
    },
    {
      id: 3,
      publication: "Medical News Today",
      title: "Clinical Validation of AI in Mental Health Treatment",
      date: "October 15, 2024",
      author: "Dr. Emily Rodriguez",
      url: "#",
      category: "Healthcare"
    },
    {
      id: 4,
      publication: "Wired",
      title: "Inside MoodMate's Mission to Democratize Mental Health Care",
      date: "September 20, 2024",
      author: "Alex Thompson",
      url: "#",
      category: "Innovation"
    }
  ]

  const mediaAssets = [
    {
      id: 1,
      name: "MoodMate Logo Kit",
      description: "Official logos in various formats and colors",
      type: "ZIP",
      size: "2.4 MB",
      downloadUrl: "#"
    },
    {
      id: 2,
      name: "Product Screenshots",
      description: "High-resolution screenshots of the MoodMate app",
      type: "ZIP",
      size: "8.7 MB",
      downloadUrl: "#"
    },
    {
      id: 3,
      name: "Team Photos",
      description: "Professional headshots and team photos",
      type: "ZIP",
      size: "12.1 MB",
      downloadUrl: "#"
    },
    {
      id: 4,
      name: "Brand Guidelines",
      description: "Complete brand style guide and usage guidelines",
      type: "PDF",
      size: "1.8 MB",
      downloadUrl: "#"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', organization: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Newspaper className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Welcome to the MoodMate press room. Find the latest news, press releases, 
              media resources, and company information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Download Press Kit
              </Button>
              <Button size="lg" variant="outline">
                Contact PR Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Facts & Figures</h2>
            <p className="text-lg text-gray-600">
              Essential information about MoodMate
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
                <div className="text-gray-600">Active Users</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Contributors</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Press Releases</h2>
            <p className="text-lg text-gray-600">
              Latest announcements and company news
            </p>
          </div>
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <Card key={release.id}>
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary">{release.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {release.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">{release.title}</CardTitle>
                      <p className="text-gray-600">{release.summary}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Coverage</h2>
            <p className="text-lg text-gray-600">
              What the press is saying about MoodMate
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaCoverage.map((coverage) => (
              <Card key={coverage.id}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{coverage.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {coverage.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-1">{coverage.title}</CardTitle>
                  <p className="text-sm text-gray-600 mb-3">
                    {coverage.publication} • By {coverage.author}
                  </p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Article
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Assets */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Assets</h2>
            <p className="text-lg text-gray-600">
              Download logos, images, and brand materials
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaAssets.map((asset) => (
              <Card key={asset.id}>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    {asset.type === 'PDF' ? (
                      <FileText className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Camera className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                  <CardTitle className="text-lg">{asset.name}</CardTitle>
                  <p className="text-sm text-gray-600 mb-2">{asset.description}</p>
                  <p className="text-xs text-gray-500 mb-3">{asset.type} • {asset.size}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Press Inquiries</CardTitle>
              <p className="text-gray-600">
                For media inquiries, interview requests, or additional information, please contact our PR team.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Direct Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:press@moodmate.ai" className="text-blue-600 hover:underline">
                          press@moodmate.ai
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">For Investors</p>
                        <a href="mailto:investors@moodmate.ai" className="text-blue-600 hover:underline">
                          investors@moodmate.ai
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Response Time</h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      We typically respond to press inquiries within 24 hours during business days. 
                      For urgent matters, please include "URGENT" in your subject line.
                    </p>
                  </div>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for your interest in MoodMate. Our PR team will get back to you soon.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="organization">Organization *</Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      required
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="e.g., Tech News Daily"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your inquiry, deadline, and any specific requirements..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}