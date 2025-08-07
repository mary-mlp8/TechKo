import { IBM_Plex_Sans } from "next/font/google"

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm",
})

export function Footer() {
  return (
    <footer className={`bg-white border-t border-gray-100 py-8 ${ibmPlexSans.variable}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="font-ibm text-techko-text-sub">
            Built with 🤎 by those who believe in coffee with living roots.
          </p>
        </div>
      </div>
    </footer>
  )
}
