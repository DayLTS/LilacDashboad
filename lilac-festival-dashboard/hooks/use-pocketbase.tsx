"use client"

import { useEffect, useState } from "react"
import { getPocketBase, isClient } from "@/lib/pocketbase"

export function usePocketBaseAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    if (!isClient) return

    const pb = getPocketBase()

    // Check if user is already logged in
    if (pb.authStore.isValid) {
      setIsLoggedIn(true)
      setUser(pb.authStore.model)
    }

    setIsLoading(false)

    // Listen for auth changes
    const unsubscribe = pb.authStore.onChange(() => {
      setIsLoggedIn(pb.authStore.isValid)
      setUser(pb.authStore.model)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const pb = getPocketBase()
      const authData = await pb.collection("users").authWithPassword(email, password)
      return { success: true, data: authData }
    } catch (error) {
      console.error("Login error:", error)
      return { success: false, error }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    const pb = getPocketBase()
    pb.authStore.clear()
  }

  return { isLoggedIn, isLoading, user, login, logout }
}

