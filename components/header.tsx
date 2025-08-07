import { Button } from "@/components/ui/button"
import Link from "next/link"
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

export function Header() {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 ${sora.variable} ${ibmPlexSans.variable}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Always Links to Landing Page */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-techko-green rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">☕</span>
            </div>
            <span className="font-sora font-semibold text-xl text-techko-text-main">TechKo</span>
          </Link>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-6">
            {/* Producer Profiles Link */}
            <Link
              href="/producers"
              className="font-sora font-medium text-techko-text-main hover:text-techko-green transition-colors"
            >
              Producer Profiles
            </Link>

            {/* Register/Login Button */}
            <Button
              asChild
              className="bg-techko-coral hover:bg-techko-coral/90 text-white font-ibm font-medium px-6 py-2 rounded-full"
            >
              <Link href="/signin">Sign In</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-techko-text-main">
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden border-t border-gray-100 py-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/producers"
              className="font-sora font-medium text-techko-text-main hover:text-techko-green transition-colors px-2"
            >
              Producer Profiles
            </Link>
            <Link
              href="/signin"
              className="font-sora font-medium text-techko-coral hover:text-techko-coral/80 transition-colors px-2"
            >
              Sign In
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
