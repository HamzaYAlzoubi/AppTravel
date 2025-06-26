"use client"

import TripTrendsChart from "./TripTrendsChart"
import { UserGrowthChart } from "./UserGrowthChart"

export function Charts() {
  return (
    <section className="gap-10 flex flex-col lg:flex-row justify-between">
      <UserGrowthChart />

      <TripTrendsChart />
    </section>
  )
}
