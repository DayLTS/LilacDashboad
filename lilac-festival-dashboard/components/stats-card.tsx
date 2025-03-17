import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string
  change?: string
  icon: LucideIcon
  className?: string
}

export function StatsCard({ title, value, change, icon: Icon, className }: StatsCardProps) {
  const isPositive = change?.startsWith("+")

  return (
    <div className={cn("bg-card overflow-hidden shadow rounded-lg", className)}>
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-primary/10 rounded-md p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-muted-foreground truncate">{title}</dt>
              <dd>
                <div className="text-lg font-medium text-foreground">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {change && (
        <div className="bg-muted/50 px-5 py-3">
          <div className="text-sm">
            <span className={isPositive ? "text-green-600" : "text-red-600"}>{change} from last week</span>
          </div>
        </div>
      )}
    </div>
  )
}

