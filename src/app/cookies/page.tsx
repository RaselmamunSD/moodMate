'use client'

import { Cookie, Settings, Shield, Eye, CheckCircle, XCircle, Calendar, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function CookiePolicyPage() {
  const lastUpdated = "November 15, 2024"

  const cookieCategories = [
    {
      name: "Essential Cookies",
      required: true,
      icon: Shield,
      color: "green",
      description: "These cookies are necessary for the website to function and cannot be switched off.",
      purpose: [
        "Maintain user authentication and session state",
        "Enable basic website functionality",
        "Provide security features",
        "Remember your cookie preferences"
      ],
      examples: [
        "Session cookies",
        "Authentication tokens",
        "Security cookies",
        "Preference cookies"
      ],
      retention: "Session to 1 year"
    },
    {
      name: "Performance Cookies",
      required: false,
      icon: Eye,
      color: "blue",
      description: "These cookies help us understand how visitors interact with our website.",
      purpose: [
        "Analyze website traffic and usage patterns",
        "Improve website performance and speed",
        "Identify and fix technical issues",
        "Optimize user experience"
      ],
      examples: [
        "Google Analytics",
        "Hotjar",
        "Mixpanel",
        "Custom analytics"
      ],
      retention: "2 years"
    },
    {
      name: "Functional Cookies",
      required: false,
      icon: Settings,
      color: "purple",
      description: "These cookies enable enhanced functionality and personalization.",
      purpose: [
        "Remember your preferences and settings",
        "Provide personalized content",
        "Enable social media features",
        "Save your progress and data"
      ],
      examples: [
        "Language preferences",
        "Theme settings",
        "Feature preferences",
        "Saved data"
      ],
      retention: "1 year"
    },
    {
      name: "Marketing Cookies",
      required: false,
      icon: Cookie,
      color: "orange",
      description: "These cookies are used to deliver advertisements relevant to you.",
      purpose: [
        "Deliver personalized advertisements",
        "Measure ad campaign effectiveness",
        "Retargeting across websites",
        "Cross-site tracking"
      ],
      examples: [
        "Google Ads",
        "Facebook Pixel",
        "LinkedIn Insight Tag",
        "Twitter Pixel"
      ],
      retention: "2 years"
    }
  ]

  const thirdPartyCookies = [
    {
      name: "Google Analytics",
      purpose: "Website analytics and performance monitoring",
      category: "Performance",
      link: "https://policies.google.com/privacy",
      retention: "2 years"
    },
    {
      name: "Google Ads",
      purpose: "Advertising and remarketing",
      category: "Marketing",
      link: "https://policies.google.com/privacy",
      retention: "2 years"
    },
    {
      name: "Facebook Pixel",
      purpose: "Social media advertising and analytics",
      category: "Marketing",
      link: "https://www.facebook.com/policy.php",
      retention: "1 year"
    },
    {
      name: "Hotjar",
      purpose: "User behavior analysis and feedback",
      category: "Performance",
      link: "https://www.hotjar.com/legal/policies/privacy/",
      retention: "1 year"
    }
  ]

  const managingCookies = [
    {
      title: "Accept or Reject Cookies",
      description: "Use our cookie consent banner to choose which types of cookies you accept.",
      action: "Manage preferences"
    },
    {
      title: "Browser Settings",
      description: "Configure your browser to block or delete cookies through browser settings.",
      action: "Browser settings"
    },
    {
      title: "Cookie Preferences",
      description: "Access our cookie settings panel anytime to update your preferences.",
      action: "Update settings"
    },
    {
      title: "Opt-Out Tools",
      description: "Use industry opt-out tools to prevent targeted advertising.",
      action: "Opt-out options"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Cookie className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Learn how we use cookies and similar technologies to enhance your experience.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Overview */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Cookie Definition</h3>
                  <p className="text-gray-600 mb-4">
                    Cookies are small text files stored on your device when you visit websites. 
                    They help websites remember information about your visit and can improve your 
                    browsing experience.
                  </p>
                  <p className="text-gray-600">
                    Cookies are widely used to make websites work more efficiently and provide 
                    information to website owners.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">How We Use Cookies</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Essential functionality and security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Remembering your preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Analyzing website performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Personalizing your experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Delivering relevant content</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cookie Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookie Categories</h2>
            <p className="text-lg text-gray-600">
              We use different types of cookies for various purposes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {cookieCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 text-${category.color}-600`} />
                      </div>
                      {category.required ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Required
                        </Badge>
                      ) : (
                        <Badge variant="outline">Optional</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <p className="text-gray-600">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                        <ul className="space-y-1">
                          {category.purpose.map((purpose, purposeIndex) => (
                            <li key={purposeIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {purpose}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.examples.map((example, exampleIndex) => (
                            <Badge key={exampleIndex} variant="outline" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2 border-t">
                        <span className="text-sm text-gray-500">Retention: {category.retention}</span>
                        {category.required ? (
                          <div className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            <span className="text-sm">Always active</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-gray-400">
                            <Settings className="w-4 h-4" />
                            <span className="text-sm">Configurable</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-lg text-gray-600">
              We use trusted third-party services that may set their own cookies
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Cookie Providers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {thirdPartyCookies.map((provider, index) => (
                  <div key={index} className="border-b pb-6 last:border-b-0">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{provider.name}</h3>
                        <p className="text-gray-600 mb-3">{provider.purpose}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">{provider.category}</Badge>
                          <Badge variant="secondary">Retention: {provider.retention}</Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Privacy Policy
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> These third-party providers have their own privacy policies 
                  and cookie policies. We recommend reviewing their policies for detailed information 
                  about their cookie practices.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Managing Your Cookies</h2>
            <p className="text-lg text-gray-600">
              You have control over the cookies we use
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {managingCookies.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button variant="outline" size="sm">
                    {item.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Browser-Specific Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Chrome</h4>
                  <p className="text-sm text-gray-600">
                    Settings → Privacy and security → Cookies and other site data
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Firefox</h4>
                  <p className="text-sm text-gray-600">
                    Options → Privacy & Security → Cookies and Site Data
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                  <p className="text-sm text-gray-600">
                    Preferences → Privacy → Cookies and website data
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Edge</h4>
                  <p className="text-sm text-gray-600">
                    Settings → Privacy, search, and services → Cookies
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cookie Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Impact of Disabling Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    What Still Works
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600">• Basic website navigation</li>
                    <li className="text-gray-600">• Reading content and articles</li>
                    <li className="text-gray-600">• Using essential features</li>
                    <li className="text-gray-600">• Contacting support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Limited Functionality
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600">• Personalized experience</li>
                    <li className="text-gray-600">• Remembered preferences</li>
                    <li className="text-gray-600">• Usage analytics</li>
                    <li className="text-gray-600">• Targeted content</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> Disabling essential cookies may prevent some parts of our 
                  website from functioning properly. We recommend keeping essential cookies enabled 
                  for the best experience.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact and Updates */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Questions and Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h3>
                  <p className="text-gray-600 mb-4">
                    If you have questions about our cookie policy or how we use cookies, 
                    please contact our privacy team:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      Email: privacy@moodmate.ai<br />
                      Subject: Cookie Policy Inquiry
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Policy Updates</h3>
                  <p className="text-gray-600 mb-4">
                    We may update this cookie policy periodically to reflect changes in our 
                    practices or applicable laws. We will notify you of significant changes 
                    through our website or email.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Last updated: {lastUpdated}</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    Manage Cookie Preferences
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}