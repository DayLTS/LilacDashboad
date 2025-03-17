import { Header } from "@/components/header"
import { SidebarNav } from "@/components/sidebar-nav"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CartLocations() {
  return (
    <SidebarProvider>
      <SidebarNav />
      <SidebarInset>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h1 className="text-2xl font-semibold text-foreground mb-4 md:mb-0">Cart Locations</h1>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex gap-2">
                    <Input placeholder="Search carts..." className="w-full" />
                    <Button>Search</Button>
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Areas</SelectItem>
                      <SelectItem value="main">Main Area</SelectItem>
                      <SelectItem value="vendor">Vendor Area</SelectItem>
                      <SelectItem value="stage">Stage Area</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Festival Map</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Interactive map would be displayed here</p>
                      {/* In a real application, you would integrate a map library like Leaflet or Google Maps */}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm">Available Carts</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm">Rented Carts</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                        <span className="text-sm">Maintenance</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Main Area</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Total Carts:</span>
                          <span className="font-medium">15</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Available:</span>
                          <span className="font-medium text-green-600">8</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rented:</span>
                          <span className="font-medium text-blue-600">6</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Maintenance:</span>
                          <span className="font-medium text-yellow-600">1</span>
                        </div>
                        <Button className="w-full" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Vendor Area</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Total Carts:</span>
                          <span className="font-medium">20</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Available:</span>
                          <span className="font-medium text-green-600">5</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rented:</span>
                          <span className="font-medium text-blue-600">12</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Maintenance:</span>
                          <span className="font-medium text-yellow-600">3</span>
                        </div>
                        <Button className="w-full" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Stage Area</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Total Carts:</span>
                          <span className="font-medium">10</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Available:</span>
                          <span className="font-medium text-green-600">3</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rented:</span>
                          <span className="font-medium text-blue-600">7</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Maintenance:</span>
                          <span className="font-medium text-yellow-600">0</span>
                        </div>
                        <Button className="w-full" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

