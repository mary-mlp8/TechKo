"use client"

import { Sora, IBM_Plex_Sans } from "next/font/google"
import { useSession } from "@/contexts/session-context"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Bell, Shield, Globe, Smartphone } from "lucide-react"

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

export default function SettingsPage() {
  const { isLoggedIn, userName } = useSession()
  const router = useRouter()

  // Redirect to signin if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/signin")
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return null
  }

  const settingsCategories = [
    {
      title: "Notifications",
      description: "Manage your alert preferences",
      icon: Bell,
      items: ["Weather alerts", "Compost updates", "System notifications"],
    },
    {
      title: "Privacy & Security",
      description: "Control your data and profile visibility",
      icon: Shield,
      items: ["Profile visibility", "Data sharing", "Account security"],
    },
    {
      title: "Farm Settings",
      description: "Configure your farm monitoring preferences",
      icon: Globe,
      items: ["Sensor calibration", "Measurement units", "Reporting frequency"],
    },
    {
      title: "Mobile App",
      description: "Mobile application preferences",
      icon: Smartphone,
      items: ["Push notifications", "Offline sync", "App permissions"],
    },
  ]

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
              <h1 className="font-sora font-bold text-2xl lg:text-3xl text-techko-text-main">Settings</h1>
              <p className="font-ibm text-lg text-techko-text-sub">
                Manage your account and farm monitoring preferences
              </p>
            </div>
          </div>

          {/* Settings Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {settingsCategories.map((category, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-techko-green/10 rounded-xl">
                    <category.icon className="w-6 h-6 text-techko-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sora font-semibold text-lg text-techko-text-main mb-2">{category.title}</h3>
                    <p className="font-ibm text-techko-text-sub mb-4">{category.description}</p>
                    <ul className="space-y-2 mb-4">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="font-ibm text-sm text-techko-text-sub flex items-center">
                          <span className="w-1.5 h-1.5 bg-techko-green rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="border-techko-green text-techko-green hover:bg-techko-green/10 font-ibm font-medium px-4 py-2 rounded-xl bg-transparent"
                    >
                      Configure
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Account Actions */}
          <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="font-sora font-semibold text-lg text-techko-text-main mb-4">Account Actions</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="border-gray-300 text-techko-text-sub hover:bg-gray-50 font-ibm font-medium px-6 py-3 rounded-xl bg-transparent"
              >
                Export Data
              </Button>
              <Button
                variant="outline"
                className="border-techko-coral text-techko-coral hover:bg-techko-coral/10 font-ibm font-medium px-6 py-3 rounded-xl bg-transparent"
              >
                Delete Account
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
