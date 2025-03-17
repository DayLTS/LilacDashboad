import { Header } from "@/components/header"
import { SidebarNav } from "@/components/sidebar-nav"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Deliveries() {
  return (
    <SidebarProvider>
      <SidebarNav />
      <SidebarInset>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h1 className="text-2xl font-semibold text-foreground mb-4 md:mb-0">Deliveries & Shipping</h1>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex gap-2">
                    <Input placeholder="Search deliveries..." className="w-full" />
                    <Button>Search</Button>
                  </div>
                  <Button>+ New Delivery</Button>
                </div>
              </div>

              <Tabs defaultValue="incoming" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="incoming">Incoming Deliveries</TabsTrigger>
                  <TabsTrigger value="outgoing">Outgoing Shipments</TabsTrigger>
                </TabsList>

                <TabsContent value="incoming" className="space-y-6">
                  <div className="bg-card shadow rounded-lg overflow-hidden">
                    <div className="p-4 border-b flex flex-col sm:flex-row gap-4 justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Status:</span>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="scheduled">Scheduled</SelectItem>
                            <SelectItem value="in-transit">In Transit</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Vendor:</span>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by vendor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Vendors</SelectItem>
                            <SelectItem value="vendor-a">Vendor A</SelectItem>
                            <SelectItem value="vendor-b">Vendor B</SelectItem>
                            <SelectItem value="vendor-c">Vendor C</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Delivery ID</TableHead>
                          <TableHead>Vendor</TableHead>
                          <TableHead>Items</TableHead>
                          <TableHead>Expected Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">DEL-001</TableCell>
                          <TableCell>Vendor A</TableCell>
                          <TableCell>T-Shirts, Hats</TableCell>
                          <TableCell>May 12, 2025</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">In Transit</span>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">DEL-002</TableCell>
                          <TableCell>Vendor B</TableCell>
                          <TableCell>Food Supplies</TableCell>
                          <TableCell>May 13, 2025</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                              Scheduled
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">DEL-003</TableCell>
                          <TableCell>Vendor C</TableCell>
                          <TableCell>Tents, Tables</TableCell>
                          <TableCell>May 10, 2025</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                              Delivered
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>

                <TabsContent value="outgoing" className="space-y-6">
                  <div className="bg-card shadow rounded-lg overflow-hidden">
                    <div className="p-4 border-b flex flex-col sm:flex-row gap-4 justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Status:</span>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="processing">Processing</SelectItem>
                            <SelectItem value="shipped">Shipped</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Destination:</span>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by destination" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Destinations</SelectItem>
                            <SelectItem value="vendor-a">Vendor A</SelectItem>
                            <SelectItem value="vendor-b">Vendor B</SelectItem>
                            <SelectItem value="storage">Storage Facility</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Shipment ID</TableHead>
                          <TableHead>Destination</TableHead>
                          <TableHead>Items</TableHead>
                          <TableHead>Ship Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">SHIP-001</TableCell>
                          <TableCell>Vendor A</TableCell>
                          <TableCell>Unused Equipment</TableCell>
                          <TableCell>May 16, 2025</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                              Processing
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">SHIP-002</TableCell>
                          <TableCell>Storage Facility</TableCell>
                          <TableCell>Decorations, Signage</TableCell>
                          <TableCell>May 15, 2025</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Shipped</span>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">SHIP-003</TableCell>
                          <TableCell>Vendor B</TableCell>
                          <TableCell>Rental Equipment</TableCell>
                          <TableCell>May 14, 2025</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                              Delivered
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

