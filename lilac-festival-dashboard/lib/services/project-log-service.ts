import { PocketBaseService } from "./pocketbase-service"

export interface LogEntry {
  id: string
  date: string
  category: "planning" | "equipment" | "logistics" | "inventory" | "issue" | "other"
  title: string
  description: string
  postedBy: string
  postedAt: string
}

export class ProjectLogService extends PocketBaseService {
  constructor() {
    super("project_logs")
  }

  async getByCategory(category: string) {
    return this.getList(1, 100, `category="${category}"`)
  }

  async getByDateRange(startDate: string, endDate: string) {
    return this.getList(1, 100, `date >= "${startDate}" && date <= "${endDate}"`)
  }

  async addLogEntry(entry: Omit<LogEntry, "id" | "postedAt">) {
    return this.create({
      ...entry,
      postedAt: new Date().toISOString(),
    })
  }
}

