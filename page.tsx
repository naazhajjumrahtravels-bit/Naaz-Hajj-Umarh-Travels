'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/hooks/use-toast'

const services = [
  {
    title: 'Custom Website Design',
    description: 'Tailored solutions that reflect your brand\'s unique identity. We create stunning, memorable designs that make your business stand out from the competition.',
    icon: '🎨',
    features: ['Unique Brand Identity', 'Custom UI/UX', 'Modern Aesthetics']
  },
  {
    title: 'Responsive Web Development',
    description: 'Websites that load quickly and look great on all devices. From desktop to mobile, your site will deliver a seamless experience to every visitor.',
    icon: '📱',
    features: ['Mobile-First Design', 'Fast Loading', 'Cross-Browser Support']
  },
  {
    title: 'E-commerce Solutions',
    description: 'Build your online store with secure payment integration, inventory management, and a seamless shopping experience that converts visitors into customers.',
    icon: '🛒',
    features: ['Secure Payments', 'Inventory Management', 'Order Tracking']
  },
  {
    title: 'SEO Optimization',
    description: 'Get found online with our comprehensive SEO strategies. We help your website rank higher in search results and attract more organic traffic.',
    icon: '🔍',
    features: ['Keyword Research', 'On-Page SEO', 'Performance Optimization']
  },
  {
    title: 'Secure & Reliable',
    description: 'Built with clean code and strong security in mind. Your website will be protected against threats and perform reliably 24/7.',
    icon: '🔒',
    features: ['SSL Certificates', 'Regular Backups', 'Security Monitoring']
  },
  {
    title: 'Growth-Oriented',
    description: 'Designs built to boost engagement and drive results. We focus on conversions and help your business grow through strategic web solutions.',
    icon: '📈',
    features: ['Analytics Integration', 'Conversion Tracking', 'A/B Testing']
  }
]

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '30+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' }
]

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon!',
    })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/rb-logo.png" alt="RB Web Developments" className="h-10 w-10 rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                RB Web Developments
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/hero-bg.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2">
            🚀 Professional Web Development Services
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Online Presence
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            We create stunning, high-performance websites that captivate your audience and drive real business results. From startups to enterprises, we bring your digital vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25"
            >
              Start Your Project
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl"
            >
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-400 mt-1 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-slate-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-slate-700/50 text-slate-300 text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-500/10 text-green-400 border-green-500/20">
                About Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                We Build Digital Experiences That Matter
              </h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                <strong className="text-white">RB Web Developments</strong> is a passionate team of web designers and developers dedicated to helping businesses grow online. We specialize in creating beautiful, fast, and user-friendly websites that make a strong first impression and convert visitors into loyal customers.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                With a focus on modern design, responsive layouts, and performance optimization, we ensure your website not only looks great but also delivers results. Whether you&apos;re a small business, a startup, or looking to upgrade your existing site, we&apos;re here to bring your vision to life with creativity and technical precision.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: '✅', title: 'Custom Web Design', desc: 'Tailored solutions that reflect your brand\'s unique identity' },
                  { icon: '⚡', title: 'Fast & Responsive', desc: 'Websites that load quickly and look great on all devices' },
                  { icon: '🔒', title: 'Secure & Reliable', desc: 'Built with clean code and strong security in mind' },
                  { icon: '🤝', title: 'Client-Focused', desc: 'We listen, we care, and we deliver on time' },
                  { icon: '📈', title: 'Growth-Oriented', desc: 'Designs built to boost engagement and drive results' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <strong className="text-white">{item.title}</strong>
                      <span className="text-slate-400"> – {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-slate-700/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-800/80 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                    <div className="text-slate-400 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="bg-slate-800/80 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-slate-400 text-sm">Support</div>
                  </div>
                  <div className="bg-slate-800/80 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">5+</div>
                    <div className="text-slate-400 text-sm">Years Experience</div>
                  </div>
                  <div className="bg-slate-800/80 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
                    <div className="text-slate-400 text-sm">Projects Delivered</div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <p className="text-slate-300 italic text-center">
                    &ldquo;We don&apos;t just build websites, we create digital experiences that help businesses thrive in the modern world.&rdquo;
                  </p>
                  <p className="text-blue-400 text-center mt-4 font-semibold">— RB Web Developments Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-pink-500/10 text-pink-400 border-pink-500/20">
                Contact Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s Build Something Amazing Together
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Ready to transform your online presence? Get in touch with us today and let&apos;s discuss how we can help your business grow. We respond to all inquiries within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">WhatsApp</div>
                    <div className="text-white font-semibold">+91 7795483452</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Instagram</div>
                    <div className="text-white font-semibold">@fzami_29</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Email</div>
                    <div className="text-white font-semibold">rbweb52@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">🎉</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-slate-400 mb-6">
                    Your message has been sent successfully. We will get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: '', email: '', message: '' })
                    }}
                    variant="outline"
                    className="border-slate-600 text-slate-300"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-3">
              <img src="/rb-logo.png" alt="RB Web Developments" className="h-12 w-12 rounded-lg" />
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  RB Web Developments
                </span>
                <p className="text-slate-400 text-sm">Professional Web Solutions</p>
              </div>
            </div>
            
            <div className="flex justify-center gap-6">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm">
                © 2025 RB Web Developments. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
