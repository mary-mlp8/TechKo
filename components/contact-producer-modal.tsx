"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Sora, IBM_Plex_Sans } from "next/font/google"

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm",
})

interface ContactProducerModalProps {
  isOpen: boolean
  onClose: () => void
  producerName: string
}

export function ContactProducerModal({ isOpen, onClose, producerName }: ContactProducerModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
      onClose()
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`max-w-md mx-auto ${ibmPlexSans.variable} ${sora.variable}`}>
        <DialogHeader>
          <DialogTitle className="font-sora font-semibold text-xl text-techko-text-main text-center">
            Connect with {producerName}
          </DialogTitle>
        </DialogHeader>

        {!isSubmitted ? (
          <div className="space-y-6 p-6">
            {/* Header with icon */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-techko-green/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">🤝</span>
              </div>
              <p className="font-ibm text-techko-text-sub">
                Send a message to {producerName} about their regenerative coffee practices
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-ibm font-medium text-techko-text-main">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="rounded-xl border-gray-200 focus:border-techko-green"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-ibm font-medium text-techko-text-main">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="rounded-xl border-gray-200 focus:border-techko-green"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-ibm font-medium text-techko-text-main">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={`Hi ${producerName}, I'm interested in learning more about your regenerative coffee practices...`}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="rounded-xl border-gray-200 focus:border-techko-green min-h-[100px] resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-techko-green hover:bg-techko-green/90 text-white font-ibm font-medium py-3 rounded-xl text-lg"
              >
                {isSubmitting ? "Sending message..." : "Send message"}
              </Button>
            </form>
          </div>
        ) : (
          // Success State
          <div className="space-y-6 p-6 text-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-4xl">✅</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-sora font-semibold text-xl text-techko-green">Message Sent!</h3>
              <p className="font-ibm text-techko-text-sub">
                Your message has been sent to {producerName}! They'll get back to you soon.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
