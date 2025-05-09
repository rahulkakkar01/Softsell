import { useState } from 'react'
import './styles/globals.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { ThemeProvider } from './components/theme-provider'
import { ThemeToggle } from './components/theme-toggle'
import { ChatBot } from './components/chat-bot' // Import the chat bot component

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend validation
    if (!formData.name || !formData.email || !formData.company || !formData.licenseType || !formData.message) {
      alert('Please fill in all fields')
      return
    }
    if (!formData.email.includes('@')) {
      alert('Please enter a valid email')
      return
    }
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      licenseType: value
    })
  }

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background font-sans">
        {/* Navigation */}
        <nav className="py-4 px-6 shadow-sm bg-background/90 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              {/* Add the text logo back */}
              <div className="text-2xl font-bold text-primary">SoftSell</div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How it Works</a>
              <a href="#why-us" className="text-foreground hover:text-primary transition-colors">Why Choose Us</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center hero-bg">
          <div className="container mx-auto px-4 text-center hero-content">
            {/* Keep the logo in the hero section too */}
            <div className="flex justify-center mb-8">
              <img 
                src={import.meta.env.BASE_URL + "logo.png"} 
                alt="SoftSell Logo" 
                className="h-48 w-auto" // Increased from h-32 to h-48
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Software <span className="text-primary">Licenses</span> into Cash
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              SoftSell helps you monetize your unused software licenses quickly and securely. 
              Get the best value for your digital assets.
            </p>
            <Button size="lg" className="submit-button">
              Sell My Licenses
            </Button>
            
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="flex items-center bg-card/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">Secure Transactions</span>
              </div>
              <div className="flex items-center bg-card/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">Best Market Value</span>
              </div>
              <div className="flex items-center bg-card/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">24-Hour Process</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">Our simple three-step process makes selling your licenses easy and efficient</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="feature-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <CardTitle className="text-center">Upload License</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">Simply upload your software license details through our secure platform</CardDescription>
                </CardContent>
              </Card>
              <Card className="feature-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <CardTitle className="text-center">Get Valuation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">Receive an instant, competitive valuation for your license</CardDescription>
                </CardContent>
              </Card>
              <Card className="feature-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-center">Get Paid</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">Receive payment quickly and securely once the sale is complete</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-24 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose SoftSell</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">We offer the most reliable and valuable license selling experience</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="feature-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Secure Transactions</h3>
                  <p className="text-muted-foreground">Bank-level security for all your transactions</p>
                </CardContent>
              </Card>
              <Card className="feature-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Quick Process</h3>
                  <p className="text-muted-foreground">Complete the sale in as little as 24 hours</p>
                </CardContent>
              </Card>
              <Card className="feature-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Best Value</h3>
                  <p className="text-muted-foreground">Get competitive offers from verified buyers</p>
                </CardContent>
              </Card>
              <Card className="feature-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                  <p className="text-muted-foreground">Dedicated team to guide you through the process</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">Read about the experiences of businesses that have sold their licenses through SoftSell</p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="testimonial-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-semibold">RK</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Rahul Kakkar</h3>
                      <p className="text-sm text-muted-foreground">CTO, TechCorp</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">"SoftSell made selling our unused licenses incredibly easy. The process was smooth and we got a great value for our assets."</p>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="testimonial-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-semibold">PU</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Prajwal Ulli</h3>
                      <p className="text-sm text-muted-foreground">IT Director, GlobalSoft</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">"The team at SoftSell was professional and responsive throughout the entire process. Highly recommended!"</p>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-24 bg-gradient-to-b from-muted to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get Started</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">Fill out the form below and we'll get back to you within 24 hours</p>
            
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Tell us about your software licenses and how we can help.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Company</label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="licenseType" className="text-sm font-medium">License Type</label>
                    <Select 
                      value={formData.licenseType} 
                      onValueChange={handleSelectChange}
                      required
                    >
                      <SelectTrigger id="licenseType">
                        <SelectValue placeholder="Select a license type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="microsoft">Microsoft</SelectItem>
                        <SelectItem value="adobe">Adobe</SelectItem>
                        <SelectItem value="autodesk">Autodesk</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full submit-button">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <img 
                    src="/logo.png" 
                    alt="SoftSell Logo" 
                    className="h-8 mr-2 filter brightness-200" 
                  />
                  SoftSell
                </h3>
                <p className="text-background/80 mb-4">
                  The easiest way to sell your unused software licenses for the best value.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-background/80 hover:text-background">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z" />
                    </svg>
                  </a>
                  <a href="#" className="text-background/80 hover:text-background">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.022A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.378.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                  <a href="#" className="text-background/80 hover:text-background">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#how-it-works" className="text-background/80 hover:text-background">How It Works</a>
                  </li>
                  <li>
                    <a href="#why-us" className="text-background/80 hover:text-background">Why Choose Us</a>
                  </li>
                  <li>
                    <a href="#testimonials" className="text-background/80 hover:text-background">Testimonials</a>
                  </li>
                  <li>
                    <a href="#contact" className="text-background/80 hover:text-background">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-background/80 mb-2">A 1104 Silver Palm</p>
                <p className="text-background/80 mb-2">Ravet, Pune 412101</p>
                <p className="text-background/80 mb-2">info@softsell.com</p>
                <p className="text-background/80">+91 7385756427</p>
              </div>
            </div>
            <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
              <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Add Chat Bot Component */}
        <ChatBot />
      </div>
    </ThemeProvider>
  )
}

export default App
