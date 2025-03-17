"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"

export function MobileMenuToggle() {
  const { toggleSidebar } = useSidebar()

  return (
    <Button onClick={toggleSidebar} variant="ghost" size="icon" className="md:hidden" aria-label="Toggle Menu">
      <Menu className="h-5 w-5" />
    </Button>
  )
}

