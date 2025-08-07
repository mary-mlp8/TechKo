"use client"

import type React from "react"

import { Thermometer, Droplets, Bug, Clock } from "lucide-react"
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

interface MetricCardProps {
  title: string
  value: string
  icon: React.ReactNode
  status: "good" | "medium" | "warning"
  className?: string
}

function MetricCard({ title, value, icon, status, className }: MetricCardProps) {
  const statusColors = {
    good: "bg-techko-green/10 border-techko-green/20 text-techko-green",
    medium: "bg-yellow-50 border-yellow-200 text-yellow-700",
    warning: "bg-techko-coral/10 border-techko-coral/20 text-techko-coral",
  }

  return (
    <div className={`bg-white border border-gray-100 rounded-2xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div className={`p-2 rounded-lg ${statusColors[status]}`}>{icon}</div>
      </div>
      <div className="space-y-1">
        <p className={`font-sora font-bold text-2xl text-techko-text-main ${sora.variable}`}>{value}</p>
        <p className={`font-ibm text-sm text-techko-text-sub ${ibmPlexSans.variable}`}>{title}</p>
      </div>
    </div>
  )
}

export function DashboardMetrics() {
  const metrics = [
    {
      title: "Temperature",
      value: "28°C",
      icon: <Thermometer className="w-5 h-5" />,
      status: "good" as const,
    },
    {
      title: "Humidity",
      value: "62%",
      icon: <Droplets className="w-5 h-5" />,
      status: "good" as const,
    },
    {
      title: "Pest Risk",
      value: "Medium",
      icon: <Bug className="w-5 h-5" />,
      status: "medium" as const,
    },
    {
      title: "Last Updated",
      value: "2 hours ago",
      icon: <Clock className="w-5 h-5" />,
      status: "good" as const,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  )
}
