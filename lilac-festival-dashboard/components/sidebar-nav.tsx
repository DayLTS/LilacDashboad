"use client"

import { BarChart3, FileText, Home, Map, Package, ShoppingBag, ShoppingCart, Truck, Warehouse } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

export function SidebarNav() {
  const pathname = usePathname()

  const routes = [
    {
      title: "Dashboard",
      href: "/",
      icon: Home,
    },
    {
      title: "Cart Rentals",
      href: "/cart-rentals",
      icon: ShoppingCart,
    },
    {
      title: "Weather Report",
      href: "/weather",
      icon: BarChart3,
    },
    {
      title: "Cart Locations",
      href: "/cart-locations",
      icon: Map,
    },
    {
      title: "Inventory",
      href: "/inventory",
      icon: Package,
    },
    {
      title: "Deliveries & Shipping",
      href: "/deliveries",
      icon: Truck,
    },
    {
      title: "Project Log",
      href: "/project-log",
      icon: FileText,
    },
    {
      title: "Facilities",
      href: "/facilities",
      icon: Warehouse,
    },
    {
      title: "Orders",
      href: "/orders",
      icon: ShoppingBag,
    },
  ]

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu>
          {routes.map((route) => (
            <SidebarMenuItem key={route.href}>
              <SidebarMenuButton asChild isActive={pathname === route.href}>
                <Link href={route.href}>
                  <route.icon className="h-5 w-5" />
                  <span>{route.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

