"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Sora, IBM_Plex_Sans } from "next/font/google"
import { DynamicHeader } from "@/components/dynamic-header"
import { Footer } from "@/components/footer"
import { useSession } from "@/contexts/session-context"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Upload, Coffee, MapPin, Leaf } from "lucide-react"

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

export default function CompleteProfilePage() {
  const { isLoggedIn, userName, markProfileCompleted } = useSession()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: userName ? `${userName} Ribeiro da Silva` : "",
    location: "",
    coffeeVarieties: "",
    regenerativePractices: [],
  })

  // Redirect to signin if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/signin")
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call to save profile
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Save profile data to localStorage (in real app, this would be saved to database)
    localStorage.setItem("techko-profile", JSON.stringify(profileData))

    // Mark profile as completed in session
    markProfileCompleted()

    setIsSubmitting(false)

    // Redirect to dashboard after completion
    router.push("/dashboard")
  }

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className={`min-h-screen bg-white ${ibmPlexSans.variable} ${sora.variable} font-ibm`}>
      <DynamicHeader />

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-12 mt-16">
        <div className="space-y-12">
          {/* Page Header */}
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-techko-green/10 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-4xl">👤</span>
            </div>
            <div className="space-y-3">
              <h1 className="font-sora font-bold text-3xl lg:text-4xl text-techko-text-main">Complete your profile</h1>
              <p className="font-ibm text-lg text-techko-text-sub max-w-xl mx-auto">
                Tell us about your coffee farm and regenerative practices to create your producer profile
              </p>
            </div>
          </div>

          {/* Profile Form */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Profile Photo Section */}
              <div className="space-y-4">
                <Label className="font-sora font-semibold text-lg text-techko-text-main flex items-center space-x-2">
                  <span className="text-xl">📸</span>
                  <span>Profile Photo (Optional)</span>
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
                    Upload Photo
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
                  placeholder="Enter your full name"
                  value={profileData.fullName}
                  onChange={handleInputChange}
                  className="rounded-xl border-gray-200 focus:border-techko-green text-lg py-3"
                  required
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
                  placeholder="e.g., Matas de Minas, Minas Gerais, Brasil"
                  value={profileData.location}
                  onChange={handleInputChange}
                  className="rounded-xl border-gray-200 focus:border-techko-green text-lg py-3"
                  required
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
                  placeholder="e.g., Catuaí Vermelho, Mundo Novo, Bourbon"
                  value={profileData.coffeeVarieties}
                  onChange={handleInputChange}
                  className="rounded-xl border-gray-200 focus:border-techko-green text-lg py-3"
                  required
                />
                <p className="font-ibm text-sm text-techko-text-sub">List the coffee varieties you grow on your farm</p>
              </div>

              {/* Regenerative Practices */}
              <div className="space-y-4">
                <Label className="font-sora font-semibold text-lg text-techko-text-main flex items-center space-x-2">
                  <Leaf className="w-5 h-5" />
                  <span>Regenerative Practices</span>
                </Label>
                <p className="font-ibm text-sm text-techko-text-sub">
                  Select all the regenerative practices you use on your farm
                </p>
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

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-techko-green hover:bg-techko-green/90 text-white font-sora font-semibold py-4 rounded-xl text-lg"
                >
                  {isSubmitting ? "Saving your profile..." : "Save and continue"}
                </Button>
              </div>
            </form>
          </div>

          {/* Benefits Preview */}
          <div className="bg-gradient-to-r from-techko-green/5 to-green-50 rounded-3xl p-8">
            <div className="text-center space-y-4">
              <h3 className="font-sora font-semibold text-xl text-techko-text-main">What happens next?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl">📊</div>
                  <p className="font-ibm text-sm text-techko-text-sub">Access your personalized dashboard</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl">🌐</div>
                  <p className="font-ibm text-sm text-techko-text-sub">Your profile becomes publicly visible</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl">🤝</div>
                  <p className="font-ibm text-sm text-techko-text-sub">Connect with buyers and other producers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
