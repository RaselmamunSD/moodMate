'use client'

import { FileText, Shield, AlertTriangle, Users, Gavel, Heart, Calendar, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function TermsOfServicePage() {
  const lastUpdated = "November 15, 2024"

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FileText,
      content: [
        "By accessing and using MoodMate, you accept and agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, you may not use our services.",
        "These terms constitute a legally binding agreement between you and MoodMate Inc.",
        "We may update these terms periodically, and continued use constitutes acceptance of changes."
      ]
    },
    {
      title: "Service Description",
      icon: Heart,
      content: [
        "MoodMate is an AI-powered mental health support platform designed to provide emotional wellness resources.",
        "Our services include mood tracking, AI chat support, personalized recommendations, and educational content.",
        "We are not a substitute for professional medical care, diagnosis, or treatment.",
        "Services are provided on an 'as is' basis and may be updated or modified at our discretion."
      ]
    },
    {
      title: "User Responsibilities",
      icon: Users,
      content: [
        "You must be at least 18 years old to use our services, or have parental consent.",
        "Provide accurate and complete information when creating your account.",
        "Maintain the confidentiality of your account credentials.",
        "Use the services for lawful purposes and in accordance with applicable laws.",
        "Do not attempt to harm, disrupt, or interfere with our systems or other users.",
        "Respect the privacy and rights of other users and healthcare providers."
      ]
    },
    {
      title: "Medical Disclaimer",
      icon: Shield,
      content: [
        "MoodMate is not a medical device and does not provide medical diagnosis or treatment.",
        "Our AI responses are for informational and supportive purposes only.",
        "Always consult qualified healthcare professionals for medical concerns.",
        "In case of emergency, contact emergency services immediately.",
        "Do not rely on our services for life-threatening situations or acute mental health crises.",
        "We are not responsible for decisions made based on information provided through our services."
      ]
    },
    {
      title: "Privacy and Data Protection",
      icon: Shield,
      content: [
        "Your privacy is important to us. Please review our Privacy Policy for detailed information.",
        "We collect and process data in accordance with applicable privacy laws.",
        "Health information is protected under HIPAA and other relevant regulations.",
        "We implement appropriate security measures to protect your personal information.",
        "You have rights regarding your personal data as described in our Privacy Policy."
      ]
    },
    {
      title: "Intellectual Property",
      icon: FileText,
      content: [
        "All content, features, and functionality of MoodMate are owned by MoodMate Inc. and protected by intellectual property laws.",
        "You may not copy, modify, distribute, or create derivative works without our express permission.",
        "You retain ownership of any content you submit to our services.",
        "By submitting content, you grant us a license to use, modify, and display it for service provision.",
        "Trademarks, logos, and service marks are the property of MoodMate Inc."
      ]
    },
    {
      title: "Limitation of Liability",
      icon: AlertTriangle,
      content: [
        "To the maximum extent permitted by law, MoodMate shall not be liable for any indirect, incidental, or consequential damages.",
        "Our total liability for any claims related to our services shall not exceed the amount you paid for the services in the preceding 12 months.",
        "We are not responsible for the accuracy, completeness, or usefulness of information provided through our services.",
        "We do not guarantee uninterrupted or error-free operation of our services.",
        "Use of our services is at your own risk."
      ]
    },
    {
      title: "Indemnification",
      icon: Gavel,
      content: [
        "You agree to indemnify and hold MoodMate harmless from any claims, damages, or expenses arising from your use of our services.",
        "This includes violations of these terms, infringement of third-party rights, or harm to other users.",
        "We reserve the right to assume the exclusive defense and control of any matter subject to indemnification.",
        "You will cooperate with our defense of any claim covered by this indemnification."
      ]
    },
    {
      title: "Termination",
      icon: AlertTriangle,
      content: [
        "You may terminate your account at any time by following the account deletion process.",
        "We may suspend or terminate your account for violations of these terms or applicable laws.",
        "Upon termination, your right to use the services ceases immediately.",
        "We may delete your account and data in accordance with our Privacy Policy.",
        "Certain provisions of these terms survive termination, including privacy and liability limitations."
      ]
    }
  ]

  const prohibitedUses = [
    "Using the services for illegal activities or content",
    "Harassing, abusing, or harming other users",
    "Attempting to gain unauthorized access to our systems",
    "Interfering with or disrupting service operations",
    "Using automated tools to access our services excessively",
    "Impersonating others or providing false information",
    "Violating the rights of others, including privacy rights",
    "Distributing malware or malicious content",
    "Engaging in fraudulent or deceptive practices",
    "Using the services to provide professional medical advice without proper qualifications"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Please read these terms carefully before using MoodMate services.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">
                    Important Medical Disclaimer
                  </h3>
                  <p className="text-red-800">
                    MoodMate is not a substitute for professional medical care, diagnosis, or treatment. 
                    If you are experiencing a mental health emergency, please call 988 or contact emergency 
                    services immediately. Our services are designed to provide support and resources, not 
                    medical advice.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Terms Sections */}
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
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Prohibited Uses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Prohibited Uses</CardTitle>
              <p className="text-gray-600">
                The following activities are strictly prohibited when using MoodMate services:
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {prohibitedUses.map((use, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{use}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Consequences of Violation:</strong> Violation of these prohibited uses may result 
                  in immediate account termination, legal action, and reporting to law enforcement 
                  authorities where appropriate.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Modifications */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Service Modifications and Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Changes</h3>
                  <p className="text-gray-600 mb-4">
                    We reserve the right to modify, suspend, or discontinue any part of our services 
                    at any time, with or without notice. We may also impose limits on certain features 
                    or restrict access to parts or all of the services without notice or liability.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Availability</h3>
                  <p className="text-gray-600 mb-4">
                    While we strive to maintain high availability, we cannot guarantee that our services 
                    will be uninterrupted or error-free. We may experience downtime for maintenance, 
                    updates, or other technical reasons.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Services</h3>
                  <p className="text-gray-600">
                    Our services may include links to third-party websites or services. We are not 
                    responsible for the content, privacy policies, or practices of third-party sites. 
                    Your use of third-party services is governed by their respective terms of service.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Governing Law</h3>
                  <p className="text-gray-600">
                    These terms are governed by and construed in accordance with the laws of the State 
                    of California, without regard to conflict of law principles.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Arbitration</h3>
                  <p className="text-gray-600 mb-4">
                    Any dispute arising from or relating to these terms or our services shall be resolved 
                    through binding arbitration, rather than in court, except that you may assert claims 
                    in small claims court if your claims qualify.
                  </p>
                  <p className="text-gray-600">
                    The arbitration shall be administered by the American Arbitration Association under 
                    its Consumer Arbitration Rules. The arbitrator's decision shall be final and binding.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Class Action Waiver</h3>
                  <p className="text-gray-600">
                    You agree to resolve disputes individually and waive any right to participate in 
                    a class action, class arbitration, or representative proceeding.
                  </p>
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
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <p className="text-gray-600">
                If you have questions about these Terms of Service, please contact us:
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">General Inquiries</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:legal@moodmate.ai" className="text-blue-600 hover:underline">
                          legal@moodmate.ai
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Support</p>
                        <a href="mailto:support@moodmate.ai" className="text-blue-600 hover:underline">
                          support@moodmate.ai
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Mailing Address</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      MoodMate Inc.<br />
                      Legal Department<br />
                      123 Wellness Street<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Print Terms
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}