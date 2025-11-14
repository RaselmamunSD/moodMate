'use client'

import { useState } from 'react'
import { Briefcase, MapPin, Clock, DollarSign, Users, Heart, Send, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$150,000 - $200,000",
      description: "We're looking for an experienced AI Engineer to help build and scale our mental health AI systems.",
      responsibilities: [
        "Design and implement machine learning models for emotion detection",
        "Collaborate with clinical team to ensure AI accuracy and safety",
        "Optimize AI performance and scalability",
        "Stay current with latest AI research and technologies"
      ],
      requirements: [
        "PhD or Master's in Computer Science, AI, or related field",
        "5+ years of experience in machine learning and AI",
        "Strong programming skills in Python and TensorFlow/PyTorch",
        "Experience with healthcare AI is a plus"
      ]
    },
    {
      id: 2,
      title: "Clinical Psychologist",
      department: "Clinical",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$120,000 - $160,000",
      description: "Join our clinical team to help shape the future of digital mental health care.",
      responsibilities: [
        "Provide clinical oversight for AI systems",
        "Develop evidence-based therapeutic interventions",
        "Conduct user research and clinical validation studies",
        "Train and supervise junior clinical staff"
      ],
      requirements: [
        "PhD or PsyD in Clinical Psychology",
        "Licensed to practice in California",
        "3+ years of clinical experience",
        "Interest in technology and digital health"
      ]
    },
    {
      id: 3,
      title: "Product Designer",
      department: "Design",
      location: "New York, NY / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100,000 - $140,000",
      description: "Create beautiful, intuitive interfaces that make mental health support accessible to everyone.",
      responsibilities: [
        "Design user-centered digital experiences",
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with engineering and clinical teams"
      ],
      requirements: [
        "3+ years of product design experience",
        "Strong portfolio demonstrating user-centered design",
        "Proficiency in Figma, Sketch, or Adobe Creative Suite",
        "Experience in healthcare or mental health is a plus"
      ]
    },
    {
      id: 4,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$90,000 - $120,000",
      description: "Help us reach more people who need mental health support through innovative marketing strategies.",
      responsibilities: [
        "Develop and execute marketing campaigns",
        "Manage social media and content marketing",
        "Analyze marketing metrics and optimize performance",
        "Collaborate with clinical team on responsible marketing"
      ],
      requirements: [
        "4+ years of marketing experience",
        "Experience in healthcare or mental health marketing",
        "Strong analytical and communication skills",
        "Understanding of digital marketing tools and platforms"
      ]
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
    setFormData({ name: '', email: '', phone: '', position: '', experience: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Help us revolutionize mental health care. We're looking for passionate individuals 
              who want to make a meaningful impact on people's lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join MoodMate?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job – we offer a chance to make a real difference
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Heart className="w-8 h-8 text-red-500 mb-4" />
                <CardTitle>Meaningful Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every day, you'll work on products that help people improve their mental health 
                  and well-being. See the direct impact of your work on users' lives.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-blue-500 mb-4" />
                <CardTitle>Amazing Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work with brilliant minds from diverse backgrounds – clinicians, engineers, 
                  designers, and researchers all united by a common mission.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Building className="w-8 h-8 text-green-500 mb-4" />
                <CardTitle>Growth & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We invest in our team's growth with continuous learning opportunities, 
                  professional development budgets, and clear career paths.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-lg text-gray-600">
              We take care of our team so they can take care of others
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Health & Wellness</h3>
              <p className="text-sm text-gray-600">
                Comprehensive health, dental, and vision insurance for you and your family
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Work</h3>
              <p className="text-sm text-gray-600">
                Remote-first culture with flexible hours and unlimited PTO
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Competitive Pay</h3>
              <p className="text-sm text-gray-600">
                Competitive salaries plus equity and performance bonuses
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Professional Growth</h3>
              <p className="text-sm text-gray-600">
                $2,000 annual learning budget and regular training opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">
              Find your next opportunity with us
            </p>
          </div>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.experience}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <Button 
                      onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Apply to Join Our Team</CardTitle>
              <p className="text-gray-600">
                Ready to make a difference? Fill out the form below and we'll be in touch.
              </p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in joining MoodMate. We'll review your application 
                    and get back to you within 5-7 business days.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Submit Another Application
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
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="position">Position *</Label>
                      <Input
                        id="position"
                        name="position"
                        type="text"
                        required
                        value={formData.position}
                        onChange={handleInputChange}
                        placeholder="e.g., Senior AI Engineer"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Input
                      id="experience"
                      name="experience"
                      type="text"
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="e.g., 5+ years in AI/ML"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Cover Letter / Additional Information *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're interested in joining MoodMate and what makes you a great fit for this role..."
                    />
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Next Steps:</strong> After reviewing your application, we'll contact you 
                      within 5-7 business days if there's a potential match. All applications are kept 
                      confidential for 6 months.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
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