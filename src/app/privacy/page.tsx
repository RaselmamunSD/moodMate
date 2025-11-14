'use client'

import { Shield, Eye, Lock, Database, UserCheck, Calendar, Mail, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 15, 2024"

  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Name, email address, and contact information",
            "Demographic information (age, gender, location)",
            "Professional information (occupation, industry)",
            "Emergency contact information"
          ]
        },
        {
          subtitle: "Health and Wellness Data",
          items: [
            "Mood tracking entries and emotional states",
            "AI chat conversations and interactions",
            "Self-reported symptoms and assessments",
            "Therapy progress and outcomes",
            "Medication information (if voluntarily provided)"
          ]
        },
        {
          subtitle: "Technical Data",
          items: [
            "IP address and device information",
            "Browser type and operating system",
            "Usage patterns and interaction data",
            "Cookies and similar tracking technologies",
            "App performance and crash reports"
          ]
        },
        {
          subtitle: "Communications",
          items: [
            "Email correspondence with our support team",
            "Feedback and survey responses",
            "Customer service interactions",
            "Community forum participation"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        {
          subtitle: "Service Provision",
          items: [
            "Provide personalized mental health support",
            "Generate mood insights and recommendations",
            "Facilitate AI-powered conversations",
            "Track progress and outcomes",
            "Connect users with appropriate resources"
          ]
        },
        {
          subtitle: "Research and Improvement",
          items: [
            "Improve our AI algorithms and accuracy",
            "Conduct clinical research studies",
            "Develop new features and services",
            "Analyze usage patterns to enhance user experience",
            "Validate effectiveness of interventions"
          ]
        },
        {
          subtitle: "Communication",
          items: [
            "Send important service notifications",
            "Provide customer support",
            "Share relevant mental health resources",
            "Respond to inquiries and feedback",
            "Send marketing communications (with consent)"
          ]
        },
        {
          subtitle: "Legal and Safety",
          items: [
            "Comply with legal obligations",
            "Prevent fraud and abuse",
            "Ensure platform security",
            "Respond to emergencies",
            "Protect user safety"
          ]
        }
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      icon: UserCheck,
      content: [
        {
          subtitle: "We Do Not Sell Your Data",
          items: [
            "We never sell personal information to third parties",
            "We do not rent or lease your data",
            "Your information is not used for advertising targeting",
            "No data brokers have access to your information"
          ]
        },
        {
          subtitle: "Limited Sharing Circumstances",
          items: [
            "Healthcare providers with your explicit consent",
            "Research institutions in anonymized form",
            "Service providers who assist in operations",
            "Legal authorities when required by law",
            "Emergency services in crisis situations"
          ]
        },
        {
          subtitle: "Aggregated and Anonymized Data",
          items: [
            "Research publications use only anonymized data",
            "Statistical analysis removes all identifiers",
            "AI training uses de-identified conversations",
            "Public reports contain no personal information",
            "Performance metrics are aggregated"
          ]
        }
      ]
    },
    {
      title: "Data Security and Protection",
      icon: Lock,
      content: [
        {
          subtitle: "Encryption and Security",
          items: [
            "End-to-end encryption for all communications",
            "AES-256 encryption for data storage",
            "Secure socket layer (SSL) for data transmission",
            "Regular security audits and penetration testing",
            "Multi-factor authentication for sensitive operations"
          ]
        },
        {
          subtitle: "Access Controls",
          items: [
            "Role-based access permissions",
            "Minimum necessary data access principle",
            "Regular access reviews and audits",
            "Employee background checks and training",
            "Strict confidentiality agreements"
          ]
        },
        {
          subtitle: "Compliance Standards",
          items: [
            "HIPAA compliant for protected health information",
            "GDPR compliant for European users",
            "CCPA compliant for California residents",
            "Regular compliance assessments",
            "Third-party security certifications"
          ]
        }
      ]
    },
    {
      title: "Your Rights and Choices",
      icon: UserCheck,
      content: [
        {
          subtitle: "Access and Review",
          items: [
            "Request a copy of your personal data",
            "Review information we have about you",
            "Understand how your data is used",
            "Access your interaction history",
            "Download your data in portable format"
          ]
        },
        {
          subtitle: "Correction and Updates",
          items: [
            "Correct inaccurate personal information",
            "Update your profile and preferences",
            "Modify your communication preferences",
            "Add or remove emergency contacts",
            "Update your privacy settings"
          ]
        },
        {
          subtitle: "Deletion and Portability",
          items: [
            "Request deletion of your account and data",
            "Export your data before deletion",
            "Opt-out of data collection where possible",
            "Withdraw consent for specific uses",
            "Request data transfer to other services"
          ]
        },
        {
          subtitle: "Control and Preferences",
          items: [
            "Adjust privacy settings in your account",
            "Control cookie preferences",
            "Manage communication preferences",
            "Set data retention periods",
            "Choose what to share with healthcare providers"
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your privacy is our priority. Learn how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Privacy at a Glance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">We Never Sell Data</h3>
                  <p className="text-sm text-gray-600">Your personal information is never sold to third parties</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
                  <p className="text-sm text-gray-600">Your health information is protected by law</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Full Transparency</h3>
                  <p className="text-sm text-gray-600">You always know what data we collect and why</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <UserCheck className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">You're in Control</h3>
                  <p className="text-sm text-gray-600">Manage your data and privacy settings anytime</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <div key={index} className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="space-y-8">
                  {section.content.map((subsection, subIndex) => (
                    <div key={subIndex} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {subsection.subtitle}
                      </h3>
                      <ul className="space-y-3">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Retention Periods</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Active Accounts</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Mood logs: 7 years</li>
                        <li>• Chat conversations: 5 years</li>
                        <li>• Assessment results: 7 years</li>
                        <li>• Profile information: Until account deletion</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Deleted Accounts</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Immediate deletion of personal data</li>
                        <li>• Anonymized data retained for research</li>
                        <li>• Legal compliance data retained as required</li>
                        <li>• Backup data deleted within 90 days</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h3>
                  <p className="text-gray-600 mb-4">
                    You can request early deletion of your data at any time through your account settings 
                    or by contacting our privacy team. We'll process your request within 30 days.
                  </p>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Your Data
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Our Privacy Team</CardTitle>
              <p className="text-gray-600">
                Have questions about your privacy or need to exercise your rights?
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Privacy Inquiries</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:privacy@moodmate.ai" className="text-blue-600 hover:underline">
                          privacy@moodmate.ai
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Data Protection Officer</p>
                        <a href="mailto:dpo@moodmate.ai" className="text-blue-600 hover:underline">
                          dpo@moodmate.ai
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Response Times</h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Standard Requests:</strong> 30 days<br />
                      <strong>Urgent Requests:</strong> 7 days<br />
                      <strong>Emergency Requests:</strong> 24 hours
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>For European Users:</strong> You have additional rights under GDPR, including the right to 
                  data portability, restriction of processing, and objection to processing. Contact our EU 
                  representative at eu-privacy@moodmate.ai for GDPR-specific requests.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Policy Updates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Staying Informed</h2>
          <p className="text-xl text-gray-600 mb-8">
            We'll notify you of significant changes to our privacy policy
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Notifications</h3>
                <p className="text-sm text-gray-600">We'll email you about major policy changes</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">In-App Notices</h3>
                <p className="text-sm text-gray-600">Important updates shown in the app</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Website Updates</h3>
                <p className="text-sm text-gray-600">Always available here on our website</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}