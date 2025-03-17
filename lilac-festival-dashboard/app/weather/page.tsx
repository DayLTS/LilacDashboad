import { Header } from "@/components/header"
import { SidebarNav } from "@/components/sidebar-nav"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { WeatherDisplay } from "@/components/weather-display"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WeatherReport() {
  return (
    <SidebarProvider>
      <SidebarNav />
      <SidebarInset>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-semibold text-foreground mb-6">Weather Report</h1>

              <div className="grid gap-6">
                <WeatherDisplay compact={false} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Weather Forecast</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-blue-600">Wed</span>
                            </div>
                            <div>
                              <p className="font-medium">May 12</p>
                              <p className="text-sm text-muted-foreground">Partly Cloudy</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">72°F</p>
                            <p className="text-sm text-muted-foreground">55°F</p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-blue-600">Thu</span>
                            </div>
                            <div>
                              <p className="font-medium">May 13</p>
                              <p className="text-sm text-muted-foreground">Sunny</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">75°F</p>
                            <p className="text-sm text-muted-foreground">58°F</p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-blue-600">Fri</span>
                            </div>
                            <div>
                              <p className="font-medium">May 14</p>
                              <p className="text-sm text-muted-foreground">Chance of Rain</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">68°F</p>
                            <p className="text-sm text-muted-foreground">52°F</p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-blue-600">Sat</span>
                            </div>
                            <div>
                              <p className="font-medium">May 15</p>
                              <p className="text-sm text-muted-foreground">Partly Cloudy</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">70°F</p>
                            <p className="text-sm text-muted-foreground">54°F</p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-blue-600">Sun</span>
                            </div>
                            <div>
                              <p className="font-medium">May 16</p>
                              <p className="text-sm text-muted-foreground">Sunny</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">73°F</p>
                            <p className="text-sm text-muted-foreground">56°F</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Weather Alerts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 border border-yellow-300 bg-yellow-50 rounded-lg">
                          <h3 className="font-medium text-yellow-800">Heat Advisory</h3>
                          <p className="text-sm text-yellow-700 mt-1">
                            High temperatures expected. Ensure hydration stations are stocked.
                          </p>
                          <p className="text-xs text-yellow-600 mt-2">Issued: May 12, 2025 - 8:00 AM</p>
                        </div>

                        <div className="p-4 border border-blue-300 bg-blue-50 rounded-lg">
                          <h3 className="font-medium text-blue-800">Event Planning Recommendation</h3>
                          <p className="text-sm text-blue-700 mt-1">
                            Consider setting up additional shade structures for the weekend due to forecasted high
                            temperatures.
                          </p>
                          <p className="text-xs text-blue-600 mt-2">Issued: May 11, 2025 - 3:30 PM</p>
                        </div>

                        <div className="p-4 border border-gray-300 bg-gray-50 rounded-lg">
                          <h3 className="font-medium text-gray-800">Weather Impact on Attendance</h3>
                          <p className="text-sm text-gray-700 mt-1">
                            Based on historical data, expect 15-20% higher attendance on Saturday due to favorable
                            weather conditions.
                          </p>
                          <p className="text-xs text-gray-600 mt-2">Issued: May 10, 2025 - 10:15 AM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

