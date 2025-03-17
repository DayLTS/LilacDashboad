import { DollarSign, ShoppingBag, Truck, Users } from "lucide-react"
import { Header } from "@/components/header"
import { SidebarNav } from "@/components/sidebar-nav"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { WeatherDisplay } from "@/components/weather-display"
import { StatsCard } from "@/components/stats-card"

export default function Dashboard() {
  const stats = [
    { title: "Total Visitors", value: "12,456", change: "+8%", icon: Users },
    { title: "Equipment Usage", value: "78%", change: "+5%", icon: Truck },
    { title: "Open Orders", value: "34", change: "-2%", icon: ShoppingBag },
    { title: "Revenue", value: "$24,389", change: "+12%", icon: DollarSign },
  ]

  return (
    <SidebarProvider>
      <SidebarNav />
      <SidebarInset>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-semibold text-foreground mb-6">Dashboard</h1>

              <WeatherDisplay className="mb-8" compact={false} />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                  <StatsCard
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    change={stat.change}
                    icon={stat.icon}
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-card shadow rounded-lg">
                  <div className="px-6 py-5 border-b">
                    <h3 className="text-lg leading-6 font-medium text-foreground">Recent Activity</h3>
                  </div>
                  <div className="px-6 py-5">
                    <ul className="divide-y divide-border">
                      <li className="py-4">
                        <div className="flex space-x-3">
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium">Equipment Request Approved</h3>
                              <p className="text-sm text-muted-foreground">1h ago</p>
                            </div>
                            <p className="text-sm text-muted-foreground">Cart #12 assigned to Vendor Area</p>
                          </div>
                        </div>
                      </li>
                      <li className="py-4">
                        <div className="flex space-x-3">
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium">Inventory Update</h3>
                              <p className="text-sm text-muted-foreground">3h ago</p>
                            </div>
                            <p className="text-sm text-muted-foreground">Merchandise stock replenished</p>
                          </div>
                        </div>
                      </li>
                      <li className="py-4">
                        <div className="flex space-x-3">
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium">New Order</h3>
                              <p className="text-sm text-muted-foreground">5h ago</p>
                            </div>
                            <p className="text-sm text-muted-foreground">Order #1234 received for processing</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card shadow rounded-lg">
                  <div className="px-6 py-5 border-b">
                    <h3 className="text-lg leading-6 font-medium text-foreground">Cart Status Overview</h3>
                  </div>
                  <div className="px-6 py-5">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Available Carts</span>
                        <span className="text-sm font-bold">24</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Rented Carts</span>
                        <span className="text-sm font-bold">16</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Maintenance</span>
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

