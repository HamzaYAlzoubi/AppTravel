"use client"

import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useState } from "react"

export const description = "A multiple bar chart"

const chartData = [
    { month: "Beach", Trip: 50 },
    { month: "Cultural", Trip: 20 },
    { month: "City", Trip: 28 },
    { month: "Nature", Trip: 20 },
    { month: "Culinary", Trip: 40 },
    { month: "Relax", Trip: 20 },
    { month: "Adventure", Trip: 33 }
];


const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    }
} satisfies ChartConfig


export function ChartBarMultiple() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="gap-10 flex flex-col lg:flex-row justify-between">
            <Card className="lg:w-[50%]">
                <CardHeader>
                    <CardTitle className="text-[20px]">Trip Trends</CardTitle>
                    <hr className="mt-4 mb-4"/>
                </CardHeader>

                <CardContent>

                    <ChartContainer config={chartConfig}>


                        <BarChart accessibilityLayer data={chartData}>

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
                                radius={4}
                                barSize={30}
                                fill="#ccc"
                                onMouseEnter={(_, index) => {

                                    setActiveIndex(index)
                                }}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                {
                                    chartData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={
                                                activeIndex === index
                                                    ? 'blue'
                                                    : '#ccc'
                                            }
                                        />
                                    ))
                                }
                            </Bar>


                        </BarChart>

                    </ChartContainer>
                </CardContent>

            </Card>
            
            <Card className="lg:w-[50%]">
                <CardHeader>
                    <CardTitle className="text-[20px]">Trip Trends</CardTitle>
                    <hr className="mt-4 mb-4"/>
                </CardHeader>

                <CardContent>

                    <ChartContainer config={chartConfig}>


                        <BarChart accessibilityLayer data={chartData}>

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
                                radius={4}
                                barSize={30}
                                fill="#ccc"
                                onMouseEnter={(_, index) => {

                                    setActiveIndex(index)
                                }}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                {
                                    chartData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={
                                                activeIndex === index
                                                    ? 'blue'
                                                    : '#ccc'
                                            }
                                        />
                                    ))
                                }
                            </Bar>


                        </BarChart>

                    </ChartContainer>
                </CardContent>

            </Card>

        </div>
    )
}
