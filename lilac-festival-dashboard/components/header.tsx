"use client"

import { Bell, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { WeatherDisplay } from "@/components/weather-display"
import { MobileMenuToggle } from "@/components/mobile-menu-toggle"

export function Header() {
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false)

  useEffect(() => {
    // Check for unread notifications
    const checkNotifications = async () => {
      // In a real app, you would fetch this from your API
      setHasUnreadNotifications(true)
    }

    checkNotifications()
  }, [])

  return (
    <header className="bg-background border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <MobileMenuToggle />
            <div className="flex-shrink-0 flex items-center ml-4 md:ml-0">
              <Link href="/" className="text-primary text-xl font-bold">
                Lilac Festival 2025
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <WeatherDisplay className="hidden md:flex" />
            <div className="relative ml-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {hasUnreadNotifications && (
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-destructive" />
                )}
                <span className="sr-only">Notifications</span>
              </Button>
            </div>
            <div className="ml-3 relative">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
                </Avatar>
                <span className="ml-2 text-foreground hidden md:block">John Doe</span>
                <ChevronDown className="ml-1 h-4 w-4 text-muted-foreground hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

