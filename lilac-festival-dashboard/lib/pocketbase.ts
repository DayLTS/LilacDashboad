import PocketBase from "pocketbase"

// Create a single PocketBase instance for the entire app
let pb: PocketBase | null = null

export function getPocketBase() {
  if (!pb) {
    // Initialize PocketBase with your URL
    pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL || "http://localhost:8090")
  }
  return pb
}

// Helper function to check if we're on the client side
export const isClient = typeof window !== "undefined"

