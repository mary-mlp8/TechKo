"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Sora, IBM_Plex_Sans } from "next/font/google"
import { DynamicHeader } from "@/components/dynamic-header"
import { Footer } from "@/components/footer"
import { useSession } from "@/contexts/session-context"
import { useRouter } from "next/navigation"
import { useState } from "react"

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

export default function AuthPage() {
  const { login } = useSession()
  const router = useRouter()
  const [name, setName] = useState("")

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    // This is a NEW registration - profile is not completed yet
    const userName = name.split(" ")[0] || "João"

    // Clear any existing profile data to ensure fresh start
    localStorage.removeItem("techko-profile")

    // Login with profileCompleted = false (will be set in login function)
    login(userName)

    // Always redirect to profile completion for new registrations
    router.push("/complete-profile")
  }

  return (
    <div className={`min-h-screen bg-white ${ibmPlexSans.variable} ${sora.variable} font-ibm`}>
      <DynamicHeader />

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-12 mt-16">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-techko-green rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-white text-2xl font-bold">☕</span>
            </div>
            <h1 className="font-sora font-bold text-2xl lg:text-3xl text-techko-text-main">Welcome to TechKo</h1>
            <p className="font-ibm text-techko-text-sub">
              Register as a producer to access your dashboard and connect with buyers
            </p>
          </div>

          {/* Registration Form */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 space-y-6">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-ibm font-medium text-techko-text-main">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl border-gray-200 focus:border-techko-green"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-ibm font-medium text-techko-text-main">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-xl border-gray-200 focus:border-techko-green"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="font-ibm font-medium text-techko-text-main">
                  Farm Location
                </Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="City, State, Country"
                  className="rounded-xl border-gray-200 focus:border-techko-green"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-ibm font-medium text-techko-text-main">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className="rounded-xl border-gray-200 focus:border-techko-green"
                  required
                />
              </div>

              {/* Registration Button */}
              <Button
                type="submit"
                className="w-full bg-techko-coral hover:bg-techko-coral/90 text-white font-ibm font-medium py-3 rounded-xl"
              >
                Register as Producer
              </Button>
            </form>

            <div className="text-center">
              <p className="font-ibm text-sm text-techko-text-sub">
                Already have an account?{" "}
                <Link href="/signin" className="text-techko-green hover:text-techko-green/80 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-techko-green/5 to-green-50 rounded-3xl p-6 space-y-4">
            <h3 className="font-sora font-semibold text-lg text-techko-text-main text-center">Producer Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="text-lg">📊</span>
                <span className="font-ibm text-sm text-techko-text-sub">Real-time farm monitoring dashboard</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-lg">🌱</span>
                <span className="font-ibm text-sm text-techko-text-sub">Regenerative practice tracking</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-lg">🤝</span>
                <span className="font-ibm text-sm text-techko-text-sub">Direct connection with buyers</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-lg">💡</span>
                <span className="font-ibm text-sm text-techko-text-sub">AI-powered farming recommendations</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
