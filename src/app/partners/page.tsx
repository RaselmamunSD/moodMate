'use client'

import { useState } from 'react'
import { Handshake, Building, Users, Globe, Heart, Send, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    partnershipType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const partnershipTypes = [
    {
      id: 1,
      title: "Healthcare Providers",
      description: "Integrate MoodMate into your practice or healthcare system",
      icon: Building,
      benefits: [
        "Expand your mental health service offerings",
        "Provide 24/7 support to patients",
        "Reduce wait times and improve access",
        "Evidence-based AI tools"
      ]
    },
    {
      id: 2,
      title: "Technology Partners",
      description: "Integrate our AI technology into your platforms",
      icon: Globe,
      benefits: [
        "Access to cutting-edge AI technology",
        "API integration support",
        "Co-marketing opportunities",
        "Revenue sharing models"
      ]
    },
    {
      id: 3,
      title: "Research Institutions",
      description: "Collaborate on mental health research and studies",
      icon: Users,
      benefits: [
        "Access to anonymized data",
        "Research collaboration opportunities",
        "Publication support",
        "Grant funding partnerships"
      ]
    },
    {
      id: 4,
      title: "Employers & Organizations",
      description: "Provide mental health support to your employees",
      icon: Heart,
      benefits: [
        "Improve employee wellbeing",
        "Reduce healthcare costs",
        "Increase productivity",
        "Customized wellness programs"
      ]
    }
  ]

  const currentPartners = [
    {
      id: 1,
      name: "Mayo Clinic",
      type: "Healthcare Provider",
      description: "Leading healthcare institution integrating AI-powered mental health support",
      logo: "/api/placeholder/200/100"
    },
    {
      id: 2,
      name: "Stanford Medicine",
      type: "Research Institution",
      description: "Collaborating on clinical research and validation studies",
      logo: "/api/placeholder/200/100"
    },
    {
      id: 3,
      name: "Kaiser Permanente",
      type: "Healthcare Provider",
      description: "Providing mental health services to millions of members",
      logo: "/api/placeholder/200/100"
    },
    {
      id: 4,
      name: "Google Health",
      type: "Technology Partner",
      description: "Integrating AI technologies and expanding reach",
      logo: "/api/placeholder/200/100"
    },
    {
      id: 5,
      name: "Microsoft Healthcare",
      type: "Technology Partner",
      description: "Cloud infrastructure and AI model development",
      logo: "/api/placeholder/200/100"
    },
    {
      id: 6,
      name: "Harvard Medical School",
      type: "Research Institution",
      description: "Academic research and clinical validation partnerships",
      logo: "/api/placeholder/200/100"
    }
  ]

  const successStories = [
    {
      id: 1,
      partner: "Mayo Clinic",
      challenge: "Long wait times for mental health services",
      solution: "Integrated MoodMate AI for initial screening and support",
      results: "45% reduction in wait times, 92% patient satisfaction",
      quote: "MoodMate has transformed how we deliver mental health care at scale."
    },
    {
      id: 2,
      partner: "TechCorp Inc.",
      challenge: "Employee burnout and mental health concerns",
      solution: "Enterprise-wide MoodMate implementation with custom programs",
      results: "60% improvement in employee wellbeing scores",
      quote: "The ROI on employee mental health has been extraordinary."
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    setFormData({ name: '', email: '', company: '', partnershipType: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Handshake className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join us in revolutionizing mental health care. Together, we can make quality 
              mental health support accessible to everyone who needs it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Become a Partner
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect partnership model for your organization
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type) => {
              const Icon = type.icon
              return (
                <Card key={type.id} className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                    <p className="text-gray-600">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant="outline">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
            <p className="text-lg text-gray-600">
              Leading organizations already working with MoodMate
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner) => (
              <Card key={partner.id}>
                <CardContent className="p-6">
                  <div className="w-full h-16 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 font-semibold">{partner.name}</span>
                  </div>
                  <Badge variant="secondary" className="mb-2">{partner.type}</Badge>
                  <p className="text-sm text-gray-600">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">
              Real results from our partnerships
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <Card key={story.id}>
                <CardHeader>
                  <CardTitle className="text-xl">{story.partner}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Challenge</h4>
                      <p className="text-gray-600">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Solution</h4>
                      <p className="text-gray-600">{story.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Results</h4>
                      <p className="text-green-600 font-semibold">{story.results}</p>
                    </div>
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
                      "{story.quote}"
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Start a Partnership</CardTitle>
              <p className="text-gray-600">
                Ready to transform mental health care together? Let's discuss how we can work together.
              </p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Partnership Inquiry Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in partnering with MoodMate. Our partnerships team 
                    will review your inquiry and get back to you within 3-5 business days.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Submit Another Inquiry
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
                    <Label htmlFor="company">Organization *</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g., Healthcare Systems Inc."
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="partnershipType">Partnership Type *</Label>
                    <select
                      id="partnershipType"
                      name="partnershipType"
                      required
                      value={formData.partnershipType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select partnership type</option>
                      <option value="healthcare">Healthcare Provider</option>
                      <option value="technology">Technology Partner</option>
                      <option value="research">Research Institution</option>
                      <option value="employer">Employer/Organization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Tell us about your partnership goals *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your organization, what you hope to achieve through partnership, and any specific requirements or questions..."
                    />
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Next Steps:</strong> Our partnerships team will review your inquiry and 
                      contact you within 3-5 business days to schedule a consultation and discuss 
                      potential collaboration opportunities.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Partnership Inquiry'}
                    <Send className="w-4 h-4 ml-2" />
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