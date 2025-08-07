"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sora, IBM_Plex_Sans } from "next/font/google"
import { BarChart3, User, Settings, LogOut, Menu, X } from "lucide-react"
import { useSession } from "@/contexts/session-context"
import { useState } from "react"
import { cn } from "@/lib/utils"

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

interface SidebarProps {
  className?: string
}

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: BarChart3,
  },
  {
    name: "My Profile",
    href: "/profile",
    icon: User,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function DashboardSidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const { logout } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    window.location.href = "/"
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white border border-gray-200 shadow-sm"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/20 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          `fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-100 z-40 transform transition-transform duration-200 ease-in-out ${sora.variable} ${ibmPlexSans.variable}`,
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          className,
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center space-x-3 p-6 border-b border-gray-100">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-techko-green rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">☕</span>
              </div>
              <span className="font-sora font-semibold text-xl text-techko-text-main">TechKo</span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-xl font-ibm font-medium transition-colors",
                    isActive
                      ? "bg-techko-green/10 text-techko-green border border-techko-green/20"
                      : "text-techko-text-sub hover:bg-gray-50 hover:text-techko-text-main",
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-gray-100">
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full justify-start text-techko-text-sub hover:text-techko-text-main hover:bg-gray-50 font-ibm font-medium"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Log out
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}
