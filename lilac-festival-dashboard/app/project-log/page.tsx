import { Header } from "@/components/header"
import { SidebarNav } from "@/components/sidebar-nav"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectLog() {
  return (
    <SidebarProvider>
      <SidebarNav />
      <SidebarInset>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h1 className="text-2xl font-semibold text-foreground mb-4 md:mb-0">Project Log</h1>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex gap-2">
                    <Input placeholder="Search logs..." className="w-full" />
                    <Button>Search</Button>
                  </div>
                  <Button>+ New Log Entry</Button>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">May 11, 2025</CardTitle>
                    <div className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Planning</div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-semibold mb-2">Vendor Layout Finalized</h3>
                    <p className="text-muted-foreground mb-4">
                      The final vendor layout has been approved. All 45 vendor locations have been assigned and
                      confirmed.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>Posted by: John Doe</span>
                      <span className="mx-2">•</span>
                      <span>10:30 AM</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">May 10, 2025</CardTitle>
                    <div className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Equipment</div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-semibold mb-2">Cart Maintenance Completed</h3>
                    <p className="text-muted-foreground mb-4">
                      All 45 carts have been serviced and are ready for the festival. Battery replacements were done on
                      5 carts.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>Posted by: Jane Smith</span>
                      <span className="mx-2">•</span>
                      <span>3:45 PM</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">May 9, 2025</CardTitle>
                    <div className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">Logistics</div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-semibold mb-2">Delivery Schedule Updated</h3>
                    <p className="text-muted-foreground mb-4">
                      The delivery schedule for all vendors has been updated. Main deliveries will occur between May
                      12-14.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>Posted by: Mike Johnson</span>
                      <span className="mx-2">•</span>
                      <span>11:15 AM</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">May 8, 2025</CardTitle>
                    <div className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">Inventory</div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-semibold mb-2">Merchandise Inventory Received</h3>
                    <p className="text-muted-foreground mb-4">
                      All festival merchandise has been received and inventoried. T-shirt sizes L and XL are lower than
                      expected.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>Posted by: Sarah Williams</span>
                      <span className="mx-2">•</span>
                      <span>2:00 PM</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">May 7, 2025</CardTitle>
                    <div className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Issue</div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-semibold mb-2">Stage Setup Delay</h3>
                    <p className="text-muted-foreground mb-4">
                      Main stage setup has been delayed due to equipment delivery issues. New ETA is May 10.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>Posted by: Alex Thompson</span>
                      <span className="mx-2">•</span>
                      <span>9:30 AM</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

