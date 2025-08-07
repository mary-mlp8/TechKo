"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Sora, IBM_Plex_Sans } from "next/font/google"
import { Thermometer, CheckCircle, Lightbulb } from "lucide-react"

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

export function RecommendationCard() {
  return (
    <div className={`bg-white border border-gray-100 rounded-2xl p-8 ${sora.variable} ${ibmPlexSans.variable}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-blue-50 rounded-xl">
          <Lightbulb className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="font-sora font-semibold text-xl text-techko-text-main">🧠 Recommendation</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-4 p-4 bg-blue-50/50 rounded-xl">
          <div className="text-2xl">🚿</div>
          <div>
            <p className="font-ibm text-lg text-techko-text-main font-medium mb-2">Irrigation Needed</p>
            <p className="font-ibm text-techko-text-sub leading-relaxed">
              Irrigate gently during early morning hours. Current soil moisture levels suggest light watering will
              optimize plant health.
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <Button className="bg-techko-green hover:bg-techko-green/90 text-white font-ibm font-medium px-6 py-3 rounded-xl">
            View More Tips
          </Button>
        </div>
      </div>
    </div>
  )
}

export function BioCompBotCard() {
  return (
    <div className={`bg-white border border-gray-100 rounded-2xl p-8 ${sora.variable} ${ibmPlexSans.variable}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-techko-green/10 rounded-xl">
          <span className="text-2xl">♻️</span>
        </div>
        <h2 className="font-sora font-semibold text-xl text-techko-text-main">♻️ BioCompBot</h2>
      </div>

      <div className="space-y-6">
        {/* Progress Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-sora font-medium text-lg text-techko-text-main">Compost maturity</p>
            <span className="font-ibm text-sm text-techko-text-sub font-medium">64%</span>
          </div>
          <div className="relative">
            <Progress value={64} className="h-3 bg-gray-100">
              <div
                className="h-full bg-gradient-to-r from-techko-green to-green-400 rounded-full transition-all duration-300"
                style={{ width: "64%" }}
              />
            </Progress>
          </div>
        </div>

        {/* Sub-indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl">
            <Thermometer className="w-5 h-5 text-orange-600" />
            <div>
              <p className="font-sora font-semibold text-lg text-techko-text-main">45°C</p>
              <p className="font-ibm text-sm text-orange-600">Compost temp</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-sora font-semibold text-lg text-techko-text-main">Optimal</p>
              <p className="font-ibm text-sm text-green-600">Moisture level</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center pt-4">
          <Button className="bg-techko-coral hover:bg-techko-coral/90 text-white font-ibm font-medium px-8 py-3 rounded-xl">
            Activate Compost Cycle
          </Button>
        </div>

        {/* Expected Yield */}
        <div className="text-center pt-2">
          <p className="font-ibm text-techko-text-sub">
            Expected yield: <span className="font-medium text-techko-text-main">6kg of organic fertilizer</span>
          </p>
        </div>
      </div>
    </div>
  )
}
