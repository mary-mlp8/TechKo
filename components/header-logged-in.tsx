import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sora, IBM_Plex_Sans } from "next/font/google"
import { LogOut } from "lucide-react"

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

interface LoggedInHeaderProps {
  userName?: string
}

export function LoggedInHeader({ userName = "João" }: LoggedInHeaderProps) {
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
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/producers"
                className="font-sora font-medium text-techko-text-main hover:text-techko-green transition-colors"
              >
                Producer Profiles
              </Link>
              <Link
                href="/dashboard"
                className="font-sora font-medium text-techko-text-main hover:text-techko-green transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/profile"
                className="font-sora font-medium text-techko-text-main hover:text-techko-green transition-colors"
              >
                My Profile
              </Link>
            </nav>

            {/* Log Out Button */}
            <Button
              asChild
              variant="outline"
              className="border-gray-300 text-techko-text-sub hover:bg-gray-50 font-ibm font-medium px-4 py-2 rounded-full bg-transparent"
            >
              <Link href="/">
                <LogOut className="w-4 h-4 mr-2" />
                Log out
              </Link>
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
              href="/dashboard"
              className="font-sora font-medium text-techko-text-main hover:text-techko-green transition-colors px-2"
            >
              Dashboard
            </Link>
            <Link
              href="/profile"
              className="font-sora font-medium text-techko-text-main hover:text-techko-green transition-colors px-2"
            >
              My Profile
            </Link>
            <Link
              href="/"
              className="font-sora font-medium text-techko-text-sub hover:text-techko-text-main transition-colors px-2 flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Log out</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
