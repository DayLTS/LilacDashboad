import { PocketBaseService } from "./pocketbase-service"

export interface Delivery {
  id: string
  deliveryId: string
  vendor: string
  items: string
  expectedDate: string
  status: "scheduled" | "in-transit" | "delivered"
  notes?: string
}

export interface Shipment {
  id: string
  shipmentId: string
  destination: string
  items: string
  shipDate: string
  status: "processing" | "shipped" | "delivered"
  notes?: string
}

export class DeliveryService extends PocketBaseService {
  constructor() {
    super("deliveries")
  }

  async getByStatus(status: string) {
    return this.getList(1, 100, `status="${status}"`)
  }

  async getByVendor(vendor: string) {
    return this.getList(1, 100, `vendor="${vendor}"`)
  }

  async updateStatus(id: string, status: "scheduled" | "in-transit" | "delivered") {
    return this.update(id, {
      status,
      ...(status === "delivered" ? { deliveredDate: new Date().toISOString() } : {}),
    })
  }
}

export class ShipmentService extends PocketBaseService {
  constructor() {
    super("shipments")
  }

  async getByStatus(status: string) {
    return this.getList(1, 100, `status="${status}"`)
  }

  async getByDestination(destination: string) {
    return this.getList(1, 100, `destination="${destination}"`)
  }

  async updateStatus(id: string, status: "processing" | "shipped" | "delivered") {
    return this.update(id, {
      status,
      ...(status === "shipped" ? { actualShipDate: new Date().toISOString() } : {}),
      ...(status === "delivered" ? { deliveredDate: new Date().toISOString() } : {}),
    })
  }
}

