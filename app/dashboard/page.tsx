"use client"

import { Sora, IBM_Plex_Sans } from "next/font/google"
import { useSession } from "@/contexts/session-context"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardMetrics } from "@/components/dashboard-metrics"
import { RecommendationCard, BioCompBotCard } from "@/components/dashboard-content"

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

export default function ProducerDashboard() {
  const { isLoggedIn, userName, profileCompleted } = useSession()
  const router = useRouter()

  // Redirect to signin if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/signin")
    } else if (!profileCompleted) {
      // If logged in but profile not completed, redirect to complete profile
      router.push("/complete-profile")
    }
  }, [isLoggedIn, profileCompleted, router])

  if (!isLoggedIn || !profileCompleted) {
    return null
  }

  return (
    <div className={`min-h-screen bg-gray-50 ${ibmPlexSans.variable} ${sora.variable}`}>
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="lg:ml-64">
        <main className="p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8 lg:mb-12">
            <div className="flex flex-col space-y-2">
              <h1 className="font-sora font-bold text-2xl lg:text-3xl text-techko-text-main">
                Welcome back, {userName || "João"}! ☕
              </h1>
              <p className="font-ibm text-lg text-techko-text-sub">Here's what's happening on your coffee farm today</p>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="mb-8">
            <DashboardMetrics />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
            {/* Recommendation Card */}
            <RecommendationCard />

            {/* BioCompBot Card */}
            <BioCompBotCard />
          </div>

          {/* Additional Content Spacer */}
          <div className="h-8" />
        </main>
      </div>
    </div>
  )
}
