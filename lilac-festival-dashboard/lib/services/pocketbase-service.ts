import { getPocketBase } from "@/lib/pocketbase"

// Base service class for PocketBase operations
export class PocketBaseService {
  protected collection: string

  constructor(collection: string) {
    this.collection = collection
  }

  async getList(page = 1, perPage = 20, filter = "") {
    const pb = getPocketBase()
    try {
      return await pb.collection(this.collection).getList(page, perPage, {
        filter,
        sort: "-created",
      })
    } catch (error) {
      console.error(`Error fetching ${this.collection} list:`, error)
      throw error
    }
  }

  async getOne(id: string) {
    const pb = getPocketBase()
    try {
      return await pb.collection(this.collection).getOne(id)
    } catch (error) {
      console.error(`Error fetching ${this.collection} item:`, error)
      throw error
    }
  }

  async create(data: Record<string, any>) {
    const pb = getPocketBase()
    try {
      return await pb.collection(this.collection).create(data)
    } catch (error) {
      console.error(`Error creating ${this.collection} item:`, error)
      throw error
    }
  }

  async update(id: string, data: Record<string, any>) {
    const pb = getPocketBase()
    try {
      return await pb.collection(this.collection).update(id, data)
    } catch (error) {
      console.error(`Error updating ${this.collection} item:`, error)
      throw error
    }
  }

  async delete(id: string) {
    const pb = getPocketBase()
    try {
      return await pb.collection(this.collection).delete(id)
    } catch (error) {
      console.error(`Error deleting ${this.collection} item:`, error)
      throw error
    }
  }
}

