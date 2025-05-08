import { useState, useRef, useEffect } from 'react'
import { X, Send, MessageSquare } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'

// Predefined Q&A pairs for the chat bot
const predefinedQA = [
  {
    question: "How do I sell my license?",
    answer: "Selling your license is easy! Just fill out the form on our website with details about your license, and we'll get back to you with a valuation within 24 hours."
  },
  {
    question: "What types of licenses do you buy?",
    answer: "We purchase a wide range of software licenses including Microsoft, Adobe, Autodesk, and many more. If you're unsure, feel free to ask about your specific license."
  },
  {
    question: "How much can I get for my license?",
    answer: "The value depends on several factors including the software type, version, and remaining subscription period. We offer competitive prices based on current market rates."
  },
  {
    question: "How long does the process take?",
    answer: "Once you submit your license details, we typically provide a valuation within 24 hours. After acceptance, payment is processed within 2-3 business days."
  },
  {
    question: "Is the process secure?",
    answer: "Absolutely! We use bank-level encryption for all transactions and follow strict data protection protocols to ensure your information remains secure."
  }
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi there! I\'m your SoftSell assistant. How can I help you today?' }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus()
      }, 300)
    }
  }, [isOpen])

  // Handle ESC key to close chat
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen])

  // Prevent body scrolling when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleSend = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = { role: 'user', content: inputValue }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate thinking time
    setTimeout(() => {
      // Find a matching predefined Q&A or respond with default
      const lowerCaseInput = inputValue.toLowerCase()
      const matchedQA = predefinedQA.find(qa => 
        lowerCaseInput.includes(qa.question.toLowerCase()) || 
        lowerCaseInput.includes(qa.question.toLowerCase().replace(/[?]/g, ''))
      )

      const botResponse = matchedQA 
        ? { role: 'bot', content: matchedQA.answer }
        : { role: 'bot', content: "I don't have specific information about that. Please contact our support team at support@softsell.com or fill out the contact form for personalized assistance." }
      
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  const handleQuestionClick = (question, answer) => {
    setMessages(prev => [
      ...prev, 
      { role: 'user', content: question },
      { role: 'bot', content: answer }
    ])
  }

  return (
    <>
      {/* Chat button */}
      <button 
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all z-50 chat-bot-button"
        onClick={() => setIsOpen(true)}
        aria-label="Open chat assistant"
      >
        <MessageSquare size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 chat-overlay"
          onClick={(e) => {
            // Close if clicking outside the chat card
            if (e.target === e.currentTarget) {
              setIsOpen(false)
            }
          }}
        >
          {/* Chat Dialog */}
          <Card className="w-full max-w-md mx-auto h-[550px] flex flex-col shadow-xl chat-dialog">
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                  SoftSell Assistant
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 overflow-auto py-4 px-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg px-4 py-2 break-words ${
                        message.role === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}
                      style={{
                        animation: 'fadeIn 0.3s ease-out'
                      }}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
            
            <CardFooter className="border-t p-4">
              <div className="flex w-full items-center space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-grow"
                  ref={inputRef}
                />
                <Button 
                  onClick={handleSend} 
                  size="icon" 
                  aria-label="Send message"
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Suggested Questions (only when chat is open and there's only the initial bot message) */}
          {messages.length <= 1 && (
            <div 
              className="absolute bottom-6 right-6 md:bottom-auto md:right-[calc(50%+210px)] w-64 z-50"
              style={{
                animation: 'slideUp 0.5s ease-out'
              }}
            >
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="py-2">
                  <div className="space-y-2">
                    {predefinedQA.map((qa, i) => (
                      <Button 
                        key={i} 
                        variant="outline" 
                        size="sm" 
                        className="w-full justify-start text-sm h-auto py-2 text-left truncate"
                        onClick={() => handleQuestionClick(qa.question, qa.answer)}
                        title={qa.question} // Show full text on hover
                      >
                        <span className="truncate block">{qa.question}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      )}
    </>
  )
}