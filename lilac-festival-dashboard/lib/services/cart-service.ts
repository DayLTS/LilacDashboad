import { PocketBaseService } from "./pocketbase-service"

export interface Cart {
  id: string
  cartId: string
  status: "available" | "rented" | "maintenance"
  renter?: string
  location: string
  rentalDate?: string
  returnDate?: string
  notes?: string
}

export class CartService extends PocketBaseService {
  constructor() {
    super("carts")
  }

  async getAvailableCarts() {
    return this.getList(1, 100, 'status="available"')
  }

  async getRentedCarts() {
    return this.getList(1, 100, 'status="rented"')
  }

  async getCartsByLocation(location: string) {
    return this.getList(1, 100, `location="${location}"`)
  }

  async rentCart(id: string, renter: string, location: string, returnDate: string) {
    return this.update(id, {
      status: "rented",
      renter,
      location,
      rentalDate: new Date().toISOString(),
      returnDate,
    })
  }

  async returnCart(id: string) {
    return this.update(id, {
      status: "available",
      renter: "",
      rentalDate: "",
      returnDate: "",
    })
  }
}

