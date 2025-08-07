"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface SessionContextType {
  isLoggedIn: boolean
  userName: string | null
  profileCompleted: boolean
  login: (userName: string) => void
  logout: () => void
  markProfileCompleted: () => void
}

const SessionContext = createContext<SessionContextType | undefined>(undefined)

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState<string | null>(null)
  const [profileCompleted, setProfileCompleted] = useState(false)

  // Check for existing session on mount
  useEffect(() => {
    const savedSession = localStorage.getItem("techko-session")
    if (savedSession) {
      const {
        isLoggedIn: savedIsLoggedIn,
        userName: savedUserName,
        profileCompleted: savedProfileCompleted,
      } = JSON.parse(savedSession)
      setIsLoggedIn(savedIsLoggedIn)
      setUserName(savedUserName)
      setProfileCompleted(savedProfileCompleted || false)
    }
  }, [])

  const login = (userName: string) => {
    setIsLoggedIn(true)
    setUserName(userName)
    // Don't set profileCompleted here - let it be determined by existing data
    const existingProfile = localStorage.getItem("techko-profile")
    const completed = !!existingProfile
    setProfileCompleted(completed)

    localStorage.setItem(
      "techko-session",
      JSON.stringify({
        isLoggedIn: true,
        userName,
        profileCompleted: completed,
      }),
    )
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUserName(null)
    setProfileCompleted(false)
    localStorage.removeItem("techko-session")
  }

  const markProfileCompleted = () => {
    setProfileCompleted(true)
    const savedSession = localStorage.getItem("techko-session")
    if (savedSession) {
      const sessionData = JSON.parse(savedSession)
      sessionData.profileCompleted = true
      localStorage.setItem("techko-session", JSON.stringify(sessionData))
    }
  }

  return (
    <SessionContext.Provider
      value={{
        isLoggedIn,
        userName,
        profileCompleted,
        login,
        logout,
        markProfileCompleted,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const context = useContext(SessionContext)
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider")
  }
  return context
}
