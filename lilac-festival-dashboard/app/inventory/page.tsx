import { Header } from "@/components/header"
import { SidebarNav } from "@/components/sidebar-nav"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Inventory() {
  return (
    <SidebarProvider>
      <SidebarNav />
      <SidebarInset>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h1 className="text-2xl font-semibold text-foreground mb-4 md:mb-0">Inventory Tracking</h1>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex gap-2">
                    <Input placeholder="Search inventory..." className="w-full" />
                    <Button>Search</Button>
                  </div>
                  <Button>+ Add Item</Button>
                </div>
              </div>

              <div className="bg-card shadow rounded-lg overflow-hidden">
                <div className="p-4 border-b flex flex-col sm:flex-row gap-4 justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Category:</span>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="equipment">Equipment</SelectItem>
                        <SelectItem value="merchandise">Merchandise</SelectItem>
                        <SelectItem value="supplies">Supplies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Status:</span>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="in-stock">In Stock</SelectItem>
                        <SelectItem value="low-stock">Low Stock</SelectItem>
                        <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">INV-001</TableCell>
                      <TableCell>Golf Carts</TableCell>
                      <TableCell>Equipment</TableCell>
                      <TableCell>45</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">In Stock</span>
                      </TableCell>
                      <TableCell>May 10, 2025</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV-002</TableCell>
                      <TableCell>T-Shirts (L)</TableCell>
                      <TableCell>Merchandise</TableCell>
                      <TableCell>25</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">Low Stock</span>
                      </TableCell>
                      <TableCell>May 9, 2025</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV-003</TableCell>
                      <TableCell>Water Bottles</TableCell>
                      <TableCell>Supplies</TableCell>
                      <TableCell>500</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">In Stock</span>
                      </TableCell>
                      <TableCell>May 8, 2025</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV-004</TableCell>
                      <TableCell>Festival Guides</TableCell>
                      <TableCell>Merchandise</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Out of Stock</span>
                      </TableCell>
                      <TableCell>May 7, 2025</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV-005</TableCell>
                      <TableCell>Vendor Tents</TableCell>
                      <TableCell>Equipment</TableCell>
                      <TableCell>12</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">In Stock</span>
                      </TableCell>
                      <TableCell>May 6, 2025</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Update
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

