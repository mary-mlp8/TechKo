"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Sora, IBM_Plex_Sans } from "next/font/google"
import { MapPin } from "lucide-react"
import { DynamicHeader } from "@/components/dynamic-header"
import { Footer } from "@/components/footer"
import { ContactProducerModal } from "@/components/contact-producer-modal"

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

export default function JoaoPublicProfile() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const profileOwner = "João"

  return (
    <div className={`min-h-screen bg-white ${ibmPlexSans.variable} ${sora.variable} font-ibm`}>
      <DynamicHeader />

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 mt-16 space-y-12">
        {/* Public Profile Indicator */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-sky-50 rounded-full px-6 py-3 border border-blue-200">
            <span className="text-lg">🌐</span>
            <p className="font-ibm text-sm text-techko-text-main">This is a public profile</p>
          </div>
        </div>

        {/* Header Section - No Edit Button */}
        <div className="text-center space-y-4">
          <h1 className="font-sora font-bold text-3xl lg:text-4xl text-techko-text-main">👤 João Ribeiro da Silva</h1>
          <p className="font-ibm text-xl text-techko-text-sub">Produtor de café regenerativo</p>
        </div>

        {/* Avatar */}
        <div className="flex justify-center">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-techko-green/20">
            <Image
              src="/placeholder.svg?height=160&width=160"
              alt="João Ribeiro da Silva - Coffee Producer"
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
            <p className="font-ibm text-lg text-techko-text-main">Matas de Minas, Minas Gerais, Brasil</p>
          </div>
        </div>

        {/* Coffee Types */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="font-sora font-semibold text-2xl text-techko-text-main mb-2">☕ Café cultivado</h2>
          </div>

          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-techko-brown/10 to-amber-50 rounded-3xl px-8 py-6 text-center">
              <p className="font-ibm text-lg text-techko-brown font-medium">Catuaí Vermelho, Mundo Novo</p>
            </div>
          </div>
        </section>

        {/* Regenerative Practices */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="font-sora font-semibold text-2xl text-techko-text-main mb-2">🌿 Práticas regenerativas</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Compostagem */}
            <div className="bg-techko-green/10 border border-techko-green/20 rounded-2xl p-6 text-center space-y-3">
              <div className="text-3xl">♻️</div>
              <p className="font-ibm font-medium text-techko-text-main">Compostagem</p>
            </div>

            {/* Sombra Natural */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-3">
              <div className="text-3xl">🌳</div>
              <p className="font-ibm font-medium text-techko-text-main">Sombra natural</p>
            </div>

            {/* Cobertura Vegetal */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
              <div className="text-3xl">🌱</div>
              <p className="font-ibm font-medium text-techko-text-main">Cobertura vegetal</p>
            </div>

            {/* Colheita Manual */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center space-y-3">
              <div className="text-3xl">✋</div>
              <p className="font-ibm font-medium text-techko-text-main">Colheita manual</p>
            </div>
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

        {/* Universal Contact Section - No Authentication Required */}
        <section className="bg-gradient-to-r from-techko-green/5 to-green-50 border border-techko-green/20 rounded-3xl p-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">🤝</span>
              <h3 className="font-sora font-semibold text-2xl text-techko-text-main">
                Interested in {profileOwner}'s coffee?
              </h3>
            </div>
            <p className="font-ibm text-lg text-techko-text-sub max-w-2xl mx-auto">
              Connect with {profileOwner} to learn more about their regenerative practices and coffee offerings.
            </p>
            <Button
              onClick={() => setIsContactModalOpen(true)}
              size="lg"
              className="bg-techko-green hover:bg-techko-green/90 text-white font-ibm font-medium px-8 py-4 rounded-full text-lg"
            >
              Connect with {profileOwner}
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Contact Modal */}
      <ContactProducerModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        producerName={profileOwner}
      />
    </div>
  )
}
