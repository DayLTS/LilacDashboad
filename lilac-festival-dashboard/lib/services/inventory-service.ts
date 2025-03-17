import { PocketBaseService } from "./pocketbase-service"

export interface InventoryItem {
  id: string
  itemId: string
  name: string
  category: string
  quantity: number
  status: "in-stock" | "low-stock" | "out-of-stock"
  lastUpdated: string
  notes?: string
}

export class InventoryService extends PocketBaseService {
  constructor() {
    super("inventory")
  }

  async getByCategory(category: string) {
    return this.getList(1, 100, `category="${category}"`)
  }

  async getByStatus(status: string) {
    return this.getList(1, 100, `status="${status}"`)
  }

  async updateQuantity(id: string, quantity: number) {
    // Calculate status based on quantity
    let status = "in-stock"
    if (quantity <= 0) {
      status = "out-of-stock"
    } else if (quantity < 10) {
      status = "low-stock"
    }

    return this.update(id, {
      quantity,
      status,
      lastUpdated: new Date().toISOString(),
    })
  }
}

