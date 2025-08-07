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

export default function SignInPage() {
  const { login } = useSession()
  const router = useRouter()
  const [email, setEmail] = useState("")

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()

    // This is a RETURNING user login
    const userName = email.split("@")[0] || "João"

    // Login will check for existing profile and set profileCompleted accordingly
    login(userName)

    // Check if user has completed profile
    const hasCompletedProfile = localStorage.getItem("techko-profile")

    if (hasCompletedProfile) {
      // Returning user with completed profile - go to dashboard
      router.push("/dashboard")
    } else {
      // Returning user without completed profile - complete it first
      router.push("/complete-profile")
    }
  }

  return (
    <div className={`min-h-screen bg-white ${ibmPlexSans.variable} ${sora.variable} font-ibm`}>
      <DynamicHeader />

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-12 mt-16">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-techko-green/10 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-3xl">🔑</span>
            </div>
            <h1 className="font-sora font-bold text-2xl lg:text-3xl text-techko-text-main">
              Log in to your coffee dashboard
            </h1>
            <p className="font-ibm text-techko-text-sub">
              Welcome back! Access your farm monitoring tools and regenerative insights.
            </p>
          </div>

          {/* Sign In Form */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 space-y-6">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-ibm font-medium text-techko-text-main">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Enter your password"
                  className="rounded-xl border-gray-200 focus:border-techko-green"
                  required
                />
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                className="w-full bg-techko-green hover:bg-techko-green/90 text-white font-ibm font-medium py-3 rounded-xl"
              >
                Enter my dashboard
              </Button>
            </form>

            <div className="text-center">
              <Link href="/auth" className="font-ibm text-sm text-techko-green hover:text-techko-green/80 font-medium">
                Forgot your password?
              </Link>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="font-ibm text-sm text-techko-text-sub">
              Don't have an account?{" "}
              <Link href="/auth" className="text-techko-coral hover:text-techko-coral/80 font-medium">
                Register as a producer
              </Link>
            </p>
          </div>

          {/* Coffee Illustration */}
          <div className="text-center pt-4">
            <div className="w-20 h-20 bg-techko-brown/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-4xl">☕</span>
            </div>
            <p className="font-ibm text-xs text-techko-text-sub mt-2">Your regenerative coffee journey awaits</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
