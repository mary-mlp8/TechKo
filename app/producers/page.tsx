import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Sora, IBM_Plex_Sans } from "next/font/google"
import { MapPin } from "lucide-react"
import { DynamicHeader } from "@/components/dynamic-header"
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

export default function ProducerProfiles() {
  return (
    <div className={`min-h-screen bg-white ${ibmPlexSans.variable} ${sora.variable} font-ibm`}>
      <DynamicHeader />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 mt-16 space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="font-sora font-bold text-3xl lg:text-4xl text-techko-text-main">Producer Profiles</h1>
          <p className="font-ibm text-xl text-techko-text-sub max-w-2xl mx-auto">
            Meet the regenerative coffee producers who are transforming agriculture with sustainable practices and
            technology
          </p>
        </div>

        {/* Producer Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* João Ribeiro da Silva Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 space-y-6 hover:shadow-lg transition-shadow">
            {/* Avatar */}
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-techko-green/20">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="João Ribeiro da Silva"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Producer Info */}
            <div className="text-center space-y-3">
              <h3 className="font-sora font-semibold text-xl text-techko-text-main">João Ribeiro da Silva</h3>

              {/* Location */}
              <div className="flex items-center justify-center space-x-2 text-techko-text-sub">
                <MapPin className="w-4 h-4" />
                <span className="font-ibm text-sm">Matas de Minas, MG, Brasil</span>
              </div>

              {/* Coffee Type */}
              <div className="bg-gradient-to-r from-techko-brown/10 to-amber-50 rounded-full px-4 py-2">
                <p className="font-ibm text-sm text-techko-brown font-medium">Catuaí Vermelho, Mundo Novo</p>
              </div>
            </div>

            {/* Practices Badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-techko-green/10 rounded-xl p-3 text-center">
                <div className="text-xl mb-1">♻️</div>
                <p className="font-ibm text-xs text-techko-text-main">Compostagem</p>
              </div>
              <div className="bg-green-50 rounded-xl p-3 text-center">
                <div className="text-xl mb-1">🌳</div>
                <p className="font-ibm text-xs text-techko-text-main">Sombra natural</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-3 text-center">
                <div className="text-xl mb-1">🌱</div>
                <p className="font-ibm text-xs text-techko-text-main">Cobertura vegetal</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-3 text-center">
                <div className="text-xl mb-1">✋</div>
                <p className="font-ibm text-xs text-techko-text-main">Colheita manual</p>
              </div>
            </div>

            {/* View Profile Button */}
            <div className="flex justify-center pt-2">
              <Button
                asChild
                className="bg-techko-green hover:bg-techko-green/90 text-white font-ibm font-medium px-6 py-2 rounded-full"
              >
                <Link href="/profile/joao">View full profile</Link>
              </Button>
            </div>
          </div>

          {/* Additional Producer Cards (Placeholder) */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-6 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-3xl">👤</span>
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-sora font-semibold text-lg text-gray-400">More producers</h3>
              <p className="font-ibm text-sm text-gray-400">Coming soon</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-6 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-3xl">👤</span>
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-sora font-semibold text-lg text-gray-400">More producers</h3>
              <p className="font-ibm text-sm text-gray-400">Coming soon</p>
            </div>
          </div>
        </div>

        {/* Call to Action for Producers */}
        <section className="bg-gradient-to-r from-techko-green/5 to-green-50 rounded-3xl p-12 text-center space-y-6">
          <h2 className="font-sora font-bold text-2xl lg:text-3xl text-techko-text-main">
            Are you a regenerative coffee producer?
          </h2>
          <p className="font-ibm text-lg text-techko-text-sub max-w-2xl mx-auto">
            Join our community of sustainable farmers and showcase your regenerative practices to buyers worldwide
          </p>
          <Button
            asChild
            size="lg"
            className="bg-techko-coral hover:bg-techko-coral/90 text-white font-ibm font-medium px-8 py-4 rounded-full text-lg"
          >
            <Link href="/auth">Register as Producer</Link>
          </Button>
        </section>

        {/* Benefits for Buyers */}
        <section className="text-center space-y-8">
          <h2 className="font-sora font-bold text-2xl lg:text-3xl text-techko-text-main">
            Why choose regenerative coffee?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-techko-green/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="font-sora font-semibold text-lg text-techko-text-main">Soil Health</h3>
              <p className="font-ibm text-techko-text-sub">
                Regenerative practices improve soil fertility and carbon sequestration
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-techko-blue/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">☕</span>
              </div>
              <h3 className="font-sora font-semibold text-lg text-techko-text-main">Quality Coffee</h3>
              <p className="font-ibm text-techko-text-sub">
                Sustainable farming produces higher quality beans with unique flavor profiles
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-techko-coral/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-sora font-semibold text-lg text-techko-text-main">Direct Trade</h3>
              <p className="font-ibm text-techko-text-sub">
                Connect directly with producers for transparent and fair partnerships
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
