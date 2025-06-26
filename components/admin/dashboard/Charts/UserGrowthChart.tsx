import { Area, Bar, CartesianGrid, ComposedChart, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", thisMonth: 2500, lastMonth: 2300 },
  { month: "February", thisMonth: 1900, lastMonth: 1800 },
  { month: "March", thisMonth: 3000, lastMonth: 2920 },
  { month: "April", thisMonth: 1900, lastMonth: 1800 },
  { month: "May", thisMonth: 1900, lastMonth: 1900 },
  { month: "June", thisMonth: 1900, lastMonth: 1850 },
]

const chartConfig = {
  thisMonth: {
    label: "Users Now",
    color: "#2563eb",
  },
  lastMonth: {
    label: "lastMonth",
    color: "blue",
  },
}

const maxY = Math.max(...chartData.map((d) => d.thisMonth))
const step = 1000
const ticks: (string | number)[] = []

for (let i = 0; i <= maxY; i += step) {
  ticks.push(i)
}

export function UserGrowthChart() {
  return (
    <Card className="lg:w-[50%]">
      <CardHeader>
        <CardTitle className="text-[20px]">User Growth</CardTitle>
        <hr className="mt-4 mb-4" />
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ComposedChart
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              domain={[0, "dataMax"]}
              ticks={ticks}
              tickMargin={10}
              tickFormatter={(value) => `${value / 1000}K`}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <defs>
              <linearGradient
                id="barGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#2563eb"
                  stopOpacity="1"
                />
                <stop
                  offset="16.6%"
                  stopColor="#2563eb"
                  stopOpacity="1"
                />

                <stop
                  offset="16.6%"
                  stopColor="#2563eb"
                  stopOpacity="0.8"
                />
                <stop
                  offset="33.2%"
                  stopColor="#2563eb"
                  stopOpacity="0.8"
                />

                <stop
                  offset="33.2%"
                  stopColor="#2563eb"
                  stopOpacity="0.6"
                />
                <stop
                  offset="49.8%"
                  stopColor="#2563eb"
                  stopOpacity="0.6"
                />

                <stop
                  offset="49.8%"
                  stopColor="#2563eb"
                  stopOpacity="0.4"
                />
                <stop
                  offset="66.4%"
                  stopColor="#2563eb"
                  stopOpacity="0.4"
                />

                <stop
                  offset="66.4%"
                  stopColor="#2563eb"
                  stopOpacity="0.2"
                />
                <stop
                  offset="83%"
                  stopColor="#2563eb"
                  stopOpacity="0.2"
                />

                <stop
                  offset="83%"
                  stopColor="#2563eb"
                  stopOpacity="0.1"
                />
                <stop
                  offset="100%"
                  stopColor="#2563eb"
                  stopOpacity="0.1"
                />
              </linearGradient>
            </defs>

            <Bar
              dataKey="thisMonth"
              radius={[8, 8, 0, 0]}
              barSize={30}
              fill="url(#barGradient)"
            />

            <defs>
              <linearGradient
                id="barGradientH"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#2563eb"
                  stopOpacity="0.5"
                />
                <stop
                  offset="20%"
                  stopColor="#2563eb"
                  stopOpacity="0.5"
                />
                <stop
                  offset="40%"
                  stopColor="#2563eb"
                  stopOpacity="0.5"
                />
                <stop
                  offset="60%"
                  stopColor="#2563eb"
                  stopOpacity="0.4"
                />
                <stop
                  offset="80%"
                  stopColor="#2563eb"
                  stopOpacity="0.2"
                />
                <stop
                  offset="100%"
                  stopColor="#2563eb"
                  stopOpacity="0.1"
                />
              </linearGradient>
            </defs>

            <Area
              dataKey="lastMonth"
              type="natural"
              fill="url(#barGradientH)"
              fillOpacity={0.4}
              stroke="var(--color-lastMonth)"
              strokeWidth={2}
              dot={({ cx, cy, index }) => (
                <circle
                  key={`dot-${index}`}
                  cx={cx}
                  cy={cy}
                  r={4}
                  fill="#2563eb"
                  stroke="#fff"
                  strokeWidth={2}
                />
              )}
            />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
