import { Header } from "@/components/header"
import { SidebarNav } from "@/components/sidebar-nav"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CartRentals() {
  return (
    <SidebarProvider>
      <SidebarNav />
      <SidebarInset>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h1 className="text-2xl font-semibold text-foreground mb-4 md:mb-0">Cart Rentals</h1>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex gap-2">
                    <Input placeholder="Search carts..." className="w-full" />
                    <Button>Search</Button>
                  </div>
                  <Button>+ New Rental</Button>
                </div>
              </div>

              <div className="bg-card shadow rounded-lg overflow-hidden">
                <div className="p-4 border-b flex flex-col sm:flex-row gap-4 justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Status:</span>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Carts</SelectItem>
                        <SelectItem value="available">Available</SelectItem>
                        <SelectItem value="rented">Rented</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Location:</span>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        <SelectItem value="main">Main Area</SelectItem>
                        <SelectItem value="vendor">Vendor Area</SelectItem>
                        <SelectItem value="stage">Stage Area</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cart ID</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Renter</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Rental Date</TableHead>
                      <TableHead>Return Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">CART-001</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Available</span>
                      </TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>Main Storage</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Rent
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CART-002</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Rented</span>
                      </TableCell>
                      <TableCell>Vendor A</TableCell>
                      <TableCell>Vendor Area</TableCell>
                      <TableCell>May 10, 2025</TableCell>
                      <TableCell>May 15, 2025</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Return
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CART-003</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                          Maintenance
                        </span>
                      </TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>Maintenance Bay</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CART-004</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Rented</span>
                      </TableCell>
                      <TableCell>Staff</TableCell>
                      <TableCell>Stage Area</TableCell>
                      <TableCell>May 11, 2025</TableCell>
                      <TableCell>May 12, 2025</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Return
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CART-005</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Available</span>
                      </TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>Main Storage</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Rent
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

