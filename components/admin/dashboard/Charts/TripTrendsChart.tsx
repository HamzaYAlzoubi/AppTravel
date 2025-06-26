"use client"

import { useState } from "react"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Cell } from "recharts"

const chartData = [
  { month: "Beach", Trip: 50 },
  { month: "Cultural", Trip: 20 },
  { month: "City", Trip: 28 },
  { month: "Nature", Trip: 20 },
  { month: "Culinary", Trip: 40 },
  { month: "Relax", Trip: 20 },
  { month: "Adventure", Trip: 33 },
]

const chartConfig = {
  Trip: {
    label: "Trips",
    color: "#2563eb",
  },
} satisfies ChartConfig

export default function TripTrendsChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <Card className="lg:w-[50%]">
      <CardHeader>
        <CardTitle className="text-[20px]">Trip Trends</CardTitle>
        <hr className="mt-4 mb-4" />
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              domain={[10, 50]}
              ticks={[10, 30, 50]}
              tickFormatter={(value) => `${value}%`}
              tickMargin={10}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />

            <Bar
              dataKey="Trip"
              radius={[8, 8, 0, 0]}
              barSize={30}
              fill="#ccc"
              onMouseEnter={(_, index) => {
                setActiveIndex(index)
              }}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={activeIndex === index ? "#2563eb" : "#ccc"}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
