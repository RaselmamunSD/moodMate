'use client'

import Image from 'next/image'
import { Heart, Users, Target, Award, Globe, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About MoodMate
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your intelligent AI companion for emotional wellness and mental health support. 
              We're dedicated to making mental health care accessible, personalized, and effective for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At MoodMate, we believe that everyone deserves access to quality mental health support. 
                Our mission is to leverage cutting-edge AI technology to provide personalized, 
                compassionate, and accessible emotional wellness solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We're committed to breaking down barriers to mental health care by creating a safe, 
                supportive environment where individuals can explore their emotions, develop coping strategies, 
                and build resilience.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Empowering mental wellness through AI</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
                  <div className="text-gray-600">Users Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-gray-600">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-gray-600">Expert Contributors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We approach mental health with empathy, understanding, and genuine care for every individual's unique journey.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy & Security</h3>
              <p className="text-gray-600">
                Your privacy is paramount. We use industry-leading security measures to protect your personal information.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We celebrate diversity and create inclusive spaces where everyone feels welcome and understood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind MoodMate's innovative approach to mental wellness
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "MD Rasel Mamun",
                role: "CEO & Founder",
                expertise: "Full Stack Developer",
                image: "/images/RaselMamun.jpg" 
              },
              {
                name: "Shuvo Chakma",
                role: "CTO",
                expertise: "AI & Machine Learning",
                image: "/images/suvo.jpg"
              },
              {
                name: "MD Thaiabul Alam",
                role: "Head of Clinical Research",
                expertise: "UI/UX Design",
                image: "/images/alom.jpg"
              },
              {
                name: "Nandan Chakraborty",
                role: "Frontend Developer",
                expertise: "Healthcare Management",
                image: "/images/nadon.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="rounded-2xl p-1 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-200 border border-white/40">
                  <div className="flex flex-col items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=E5E7EB&color=374151&size=256` }}
                      className="rounded-full object-cover mb-4 ring-4 ring-white shadow-sm"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">{member.name}</h3>
                    <div className="mt-2">
                      <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700">
                        {member.role}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 text-center">{member.expertise}</p>
                    <div className="mt-4 flex gap-2 text-gray-500 text-xs">
                      <span>• 5+ yrs exp</span>
                      <span>• Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Us in Revolutionizing Mental Health Care
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're seeking support or want to contribute to our mission, 
            there's a place for you in the MoodMate community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/signup">Start Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
