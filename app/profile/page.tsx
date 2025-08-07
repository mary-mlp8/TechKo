"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { Sora, IBM_Plex_Sans } from "next/font/google"
import { MapPin, Edit, Save, X, Upload, Coffee, Leaf } from "lucide-react"
import { useSession } from "@/contexts/session-context"
import { useRouter } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

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

interface ProfileData {
  fullName: string
  location: string
  coffeeVarieties: string
  regenerativePractices: string[]
  profilePhoto?: string
}

const regenerativePracticesOptions = [
  { id: "compostagem", label: "Compostagem", icon: "♻️" },
  { id: "sombra-natural", label: "Sombra natural", icon: "🌳" },
  { id: "cobertura-vegetal", label: "Cobertura vegetal", icon: "🌱" },
  { id: "colheita-manual", label: "Colheita manual", icon: "✋" },
  { id: "rotacao-culturas", label: "Rotação de culturas", icon: "🔄" },
  { id: "controle-biologico", label: "Controle biológico", icon: "🐛" },
]

const practiceDisplayMap: Record<string, { label: string; icon: string }> = {
  compostagem: { label: "Compostagem", icon: "♻️" },
  "sombra-natural": { label: "Sombra natural", icon: "🌳" },
  "cobertura-vegetal": { label: "Cobertura vegetal", icon: "🌱" },
  "colheita-manual": { label: "Colheita manual", icon: "✋" },
  "rotacao-culturas": { label: "Rotação de culturas", icon: "🔄" },
  "controle-biologico": { label: "Controle biológico", icon: "🐛" },
}

export default function ProducerProfile() {
  const { isLoggedIn, userName } = useSession()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: "",
    location: "",
    coffeeVarieties: "",
    regenerativePractices: [],
  })

  // Redirect to signin if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/signin")
    } else {
      // Load profile data from localStorage (in real app, this would be from API)
      const savedProfile = localStorage.getItem("techko-profile")
      if (savedProfile) {
        setProfileData(JSON.parse(savedProfile))
      } else {
        // If no profile data, redirect to complete profile
        router.push("/complete-profile")
      }
    }
  }, [isLoggedIn, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePracticeChange = (practiceId: string, checked: boolean) => {
    if (checked) {
      setProfileData({
        ...profileData,
        regenerativePractices: [...profileData.regenerativePractices, practiceId],
      })
    } else {
      setProfileData({
        ...profileData,
        regenerativePractices: profileData.regenerativePractices.filter((id) => id !== practiceId),
      })
    }
  }

  const handleSave = async () => {
    setIsSaving(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Save to localStorage (in real app, this would be API call)
    localStorage.setItem("techko-profile", JSON.stringify(profileData))

    setIsSaving(false)
    setIsEditing(false)
  }

  const handleCancel = () => {
    // Reload profile data from localStorage
    const savedProfile = localStorage.getItem("techko-profile")
    if (savedProfile) {
      setProfileData(JSON.parse(savedProfile))
    }
    setIsEditing(false)
  }

  if (!isLoggedIn || !profileData.fullName) {
    return null
  }

  return (
    <div className={`min-h-screen bg-gray-50 ${ibmPlexSans.variable} ${sora.variable}`}>
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="lg:ml-64">
        <main className="p-6 lg:p-8">
          {/* Profile Context Indicator */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-techko-green/10 to-green-50 rounded-full px-6 py-3 border border-techko-green/20">
              <span className="text-lg">👤</span>
              <p className="font-ibm text-sm text-techko-text-main">This is your profile</p>
            </div>
          </div>

          {/* Rest of the existing profile content goes here */}
          {/* Header Section with Edit Controls */}
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center space-x-4">
              <h1 className="font-sora font-bold text-3xl lg:text-4xl text-techko-text-main">
                👤 {isEditing ? "Edit Profile" : profileData.fullName}
              </h1>
              {!isEditing && (
                <Button
                  onClick={() => setIsEditing(true)}
                  size="sm"
                  variant="outline"
                  className="border-techko-green text-techko-green hover:bg-techko-green/10 font-ibm font-medium px-4 py-2 rounded-full bg-transparent"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>
            {!isEditing && <p className="font-ibm text-xl text-techko-text-sub">Produtor de café regenerativo</p>}
          </div>

          {/* Keep all the existing profile content but wrap it in a max-width container */}
          <div className="max-w-4xl mx-auto space-y-12">
            {isEditing ? (
              /* Edit Mode */
              <div className="bg-white border border-gray-100 rounded-3xl p-8 space-y-8">
                <div className="space-y-8">
                  {/* Profile Photo Section */}
                  <div className="space-y-4">
                    <Label className="font-sora font-semibold text-lg text-techko-text-main flex items-center space-x-2">
                      <span className="text-xl">📸</span>
                      <span>Profile Photo</span>
                    </Label>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 bg-gray-50 flex items-center justify-center">
                        {profileData.profilePhoto ? (
                          <Image
                            src={profileData.profilePhoto || "/placeholder.svg"}
                            alt="Profile"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Upload className="w-8 h-8 text-gray-400" />
                        )}
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-techko-green text-techko-green hover:bg-techko-green/10 font-ibm font-medium px-6 py-2 rounded-full bg-transparent"
                      >
                        Change Photo
                      </Button>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="fullName"
                      className="font-sora font-semibold text-lg text-techko-text-main flex items-center space-x-2"
                    >
                      <span className="text-xl">👤</span>
                      <span>Full Name</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={profileData.fullName}
                      onChange={handleInputChange}
                      className="rounded-xl border-gray-200 focus:border-techko-green text-lg py-3"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="location"
                      className="font-sora font-semibold text-lg text-techko-text-main flex items-center space-x-2"
                    >
                      <MapPin className="w-5 h-5" />
                      <span>Farm Location</span>
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      value={profileData.location}
                      onChange={handleInputChange}
                      className="rounded-xl border-gray-200 focus:border-techko-green text-lg py-3"
                    />
                  </div>

                  {/* Coffee Varieties */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="coffeeVarieties"
                      className="font-sora font-semibold text-lg text-techko-text-main flex items-center space-x-2"
                    >
                      <Coffee className="w-5 h-5" />
                      <span>Coffee Varieties</span>
                    </Label>
                    <Input
                      id="coffeeVarieties"
                      name="coffeeVarieties"
                      type="text"
                      value={profileData.coffeeVarieties}
                      onChange={handleInputChange}
                      className="rounded-xl border-gray-200 focus:border-techko-green text-lg py-3"
                    />
                  </div>

                  {/* Regenerative Practices */}
                  <div className="space-y-4">
                    <Label className="font-sora font-semibold text-lg text-techko-text-main flex items-center space-x-2">
                      <Leaf className="w-5 h-5" />
                      <span>Regenerative Practices</span>
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {regenerativePracticesOptions.map((practice) => (
                        <div
                          key={practice.id}
                          className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-techko-green/50 transition-colors"
                        >
                          <Checkbox
                            id={practice.id}
                            checked={profileData.regenerativePractices.includes(practice.id)}
                            onCheckedChange={(checked) => handlePracticeChange(practice.id, checked as boolean)}
                            className="data-[state=checked]:bg-techko-green data-[state=checked]:border-techko-green"
                          />
                          <div className="flex items-center space-x-2">
                            <span className="text-xl">{practice.icon}</span>
                            <Label
                              htmlFor={practice.id}
                              className="font-ibm font-medium text-techko-text-main cursor-pointer"
                            >
                              {practice.label}
                            </Label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      onClick={handleSave}
                      disabled={isSaving}
                      className="flex-1 bg-techko-green hover:bg-techko-green/90 text-white font-sora font-semibold py-3 rounded-xl"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {isSaving ? "Saving changes..." : "Save changes"}
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      className="flex-1 border-gray-300 text-techko-text-sub hover:bg-gray-50 font-sora font-medium py-3 rounded-xl bg-transparent"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              /* View Mode */
              <>
                {/* Avatar */}
                <div className="flex justify-center">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-techko-green/20">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt={`${profileData.fullName} - Coffee Producer`}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-6 py-3">
                    <MapPin className="w-5 h-5 text-techko-brown" />
                    <span className="text-lg">📍</span>
                    <p className="font-ibm text-lg text-techko-text-main">{profileData.location}</p>
                  </div>
                </div>

                {/* Coffee Types */}
                <section className="space-y-6">
                  <div className="text-center">
                    <h2 className="font-sora font-semibold text-2xl text-techko-text-main mb-2">☕ Café cultivado</h2>
                  </div>

                  <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-techko-brown/10 to-amber-50 rounded-3xl px-8 py-6 text-center">
                      <p className="font-ibm text-lg text-techko-brown font-medium">{profileData.coffeeVarieties}</p>
                    </div>
                  </div>
                </section>

                {/* Regenerative Practices */}
                <section className="space-y-8">
                  <div className="text-center">
                    <h2 className="font-sora font-semibold text-2xl text-techko-text-main mb-2">
                      🌿 Práticas regenerativas
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {profileData.regenerativePractices.map((practiceId) => {
                      const practice = practiceDisplayMap[practiceId]
                      if (!practice) return null

                      return (
                        <div
                          key={practiceId}
                          className="bg-techko-green/10 border border-techko-green/20 rounded-2xl p-6 text-center space-y-3"
                        >
                          <div className="text-3xl">{practice.icon}</div>
                          <p className="font-ibm font-medium text-techko-text-main">{practice.label}</p>
                        </div>
                      )
                    })}
                  </div>
                </section>

                {/* Description/Quote */}
                <section className="flex justify-center">
                  <div className="max-w-2xl bg-gradient-to-r from-techko-green/5 to-green-50 border border-techko-green/20 rounded-3xl p-8">
                    <div className="text-center space-y-4">
                      <div className="text-4xl text-techko-green">"</div>
                      <blockquote className="font-ibm text-lg lg:text-xl text-techko-text-main leading-relaxed italic">
                        Meu café cresce em harmonia com a terra e o tempo. Cuido do solo como cuido da minha família.
                      </blockquote>
                      <div className="text-4xl text-techko-green rotate-180">"</div>
                    </div>
                  </div>
                </section>

                {/* Farm Stats */}
                <section className="bg-gray-50 rounded-3xl p-8">
                  <div className="text-center space-y-6">
                    <h3 className="font-sora font-semibold text-xl text-techko-text-main">Dados da fazenda</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center space-y-2">
                        <div className="text-3xl">🏞️</div>
                        <p className="font-sora font-bold text-2xl text-techko-green">12 hectares</p>
                        <p className="font-ibm text-sm text-techko-text-sub">Área cultivada</p>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-3xl">📅</div>
                        <p className="font-sora font-bold text-2xl text-techko-brown">15 anos</p>
                        <p className="font-ibm text-sm text-techko-text-sub">Experiência</p>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-3xl">🌿</div>
                        <p className="font-sora font-bold text-2xl text-techko-blue">100%</p>
                        <p className="font-ibm text-sm text-techko-text-sub">Orgânico</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Profile Visibility Settings */}
                <section className="bg-blue-50 border border-blue-200 rounded-3xl p-8">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-xl">👁️</span>
                      <h3 className="font-sora font-semibold text-xl text-techko-text-main">Profile Visibility</h3>
                    </div>
                    <p className="font-ibm text-techko-text-sub">
                      Your profile is currently <span className="font-medium text-techko-green">public</span> and
                      visible to buyers
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="bg-techko-blue hover:bg-techko-blue/90 text-white font-ibm font-medium px-6 py-3 rounded-full">
                        View public profile
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-techko-text-sub hover:bg-gray-50 font-ibm font-medium px-6 py-3 rounded-full bg-transparent"
                      >
                        Privacy settings
                      </Button>
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
