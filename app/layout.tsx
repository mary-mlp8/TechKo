import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SessionProvider } from "@/contexts/session-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechKo - Regenerative Coffee Technology",
  description: "Reimagining coffee farming from the ground up with regenerative tech systems",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
