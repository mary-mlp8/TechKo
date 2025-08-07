import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Sora, IBM_Plex_Sans } from "next/font/google"
import { LoggedInHeader } from "@/components/header-logged-in"
import { Footer } from "@/components/footer"

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

export default function LoggedInLandingPage() {
  return (
    <div className={`min-h-screen bg-white ${ibmPlexSans.variable} ${sora.variable} font-ibm`}>
      <LoggedInHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Illustration */}
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Coffee farm with digital technology overlay"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <h1 className="font-sora font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight text-techko-text-main">
                  Reimagining coffee farming from the ground up
                </h1>
                <p className="font-ibm text-xl lg:text-2xl text-techko-text-sub leading-relaxed">
                  A regenerative tech system that helps your coffee farm care for itself
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-techko-coral hover:bg-techko-coral/90 text-white font-ibm font-medium px-8 py-4 rounded-full text-lg"
                >
                  <Link href="/producers">Discover producers</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-techko-green text-techko-green hover:bg-techko-green/10 font-ibm font-medium px-8 py-4 rounded-full text-lg bg-transparent"
                >
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-3xl lg:text-4xl text-techko-text-main mb-6">
              The real problem on the mountain
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Problems */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl">
                <div className="text-3xl">🌦️</div>
                <div>
                  <h3 className="font-sora font-semibold text-xl text-techko-text-main mb-2">
                    Unmonitored weather leads to crop loss
                  </h3>
                  <p className="font-ibm text-techko-text-sub">
                    Without real-time weather data, farmers can't protect their crops from sudden changes
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl">
                <div className="text-3xl">🍒</div>
                <div>
                  <h3 className="font-sora font-semibold text-xl text-techko-text-main mb-2">
                    Coffee pulp waste is discarded, losing value
                  </h3>
                  <p className="font-ibm text-techko-text-sub">
                    Valuable organic matter goes to waste instead of enriching the soil
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Illustration */}
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Struggling coffee field illustration"
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-3xl lg:text-4xl text-techko-text-main mb-6">
              TechKo: Caring, regenerating and growing from the roots
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Coffee Guardian Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-techko-green/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">☕</span>
              </div>
              <div>
                <h3 className="font-sora font-semibold text-2xl text-techko-green mb-4">Coffee Guardian</h3>
                <p className="font-ibm text-lg text-techko-text-sub leading-relaxed">
                  Monitors weather and gives farmers easy action tips
                </p>
              </div>
            </div>

            {/* BioCompBot Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-techko-green/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">♻️</span>
              </div>
              <div>
                <h3 className="font-sora font-semibold text-2xl text-techko-green mb-4">BioCompBot</h3>
                <p className="font-ibm text-lg text-techko-text-sub leading-relaxed">
                  Turns coffee pulp into organic compost automatically
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="font-sora font-bold text-3xl lg:text-4xl text-techko-text-main">Want to see how it works?</h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-techko-green hover:bg-techko-green/90 text-white font-ibm font-medium px-8 py-4 rounded-full text-lg"
            >
              <Link href="/producers">Browse producers</Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-techko-coral hover:bg-techko-coral/90 text-white font-ibm font-medium px-8 py-4 rounded-full text-lg"
            >
              <Link href="/dashboard">View your dashboard</Link>
            </Button>
          </div>

          <div className="pt-8">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Coffee plant growing from technology circuits"
              width={400}
              height={300}
              className="mx-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
