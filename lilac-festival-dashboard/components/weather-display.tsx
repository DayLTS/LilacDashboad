"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface WeatherData {
  weather: Array<{
    id: number
    main: string
    description: string
    icon: string
  }>
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
  }
  visibility: number
  name: string
}

interface WeatherDisplayProps {
  className?: string
  compact?: boolean
}

export function WeatherDisplay({ className, compact = true }: WeatherDisplayProps) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // In a real app, you would use your own API key and fetch from your backend
        // This is a placeholder for demonstration
        const lat = 43.1367
        const lon = -77.6082
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY || "demo_key"

        // In production, you should proxy this request through your backend
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`,
        )

        if (!response.ok) {
          throw new Error("Failed to fetch weather data")
        }

        const data = await response.json()
        setWeatherData(data)
      } catch (err) {
        console.error("Error fetching weather data:", err)
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setIsLoading(false)
      }
    }

    fetchWeatherData()

    // Refresh weather data every 30 minutes
    const interval = setInterval(fetchWeatherData, 30 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTemp = (temp: number) => {
    return `${Math.round(temp)}°F`
  }

  const getWeatherIconUrl = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  }

  if (isLoading) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-4 w-16" />
      </div>
    )
  }

  if (error || !weatherData) {
    return null
  }

  if (compact) {
    return (
      <div className={cn("flex items-center mr-4 px-3 py-1 bg-muted rounded-full", className)}>
        <img
          src={getWeatherIconUrl(weatherData.weather[0].icon) || "/placeholder.svg"}
          alt={weatherData.weather[0].description}
          className="w-8 h-8"
        />
        <span className="ml-1 text-sm font-medium">{formatTemp(weatherData.main.temp)}</span>
      </div>
    )
  }

  return (
    <div className={cn("bg-card shadow rounded-lg p-6", className)}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={getWeatherIconUrl(weatherData.weather[0].icon) || "/placeholder.svg"}
            alt={weatherData.weather[0].description}
            className="w-16 h-16"
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Current Weather in Rochester, NY</h2>
            <p className="text-muted-foreground capitalize">{weatherData.weather[0].description}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-3xl font-bold">{formatTemp(weatherData.main.temp)}</p>
          <p className="text-muted-foreground">
            H: {formatTemp(weatherData.main.temp_max)} L: {formatTemp(weatherData.main.temp_min)}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="text-center">
          <p className="text-muted-foreground">Humidity</p>
          <p className="text-lg font-medium">{weatherData.main.humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground">Wind</p>
          <p className="text-lg font-medium">{Math.round(weatherData.wind.speed)} mph</p>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground">Pressure</p>
          <p className="text-lg font-medium">{weatherData.main.pressure} hPa</p>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground">Visibility</p>
          <p className="text-lg font-medium">{(weatherData.visibility / 1609).toFixed(1)} mi</p>
        </div>
      </div>
    </div>
  )
}

