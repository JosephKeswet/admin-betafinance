"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Line } from "recharts";

import {
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked area chart";

const chartData = [
  { month: "1st", value: 100000 },
  { month: "2nd", value: 190000 },
  { month: "3rd", value: 200000 },
  { month: "4th", value: 100000 },
  { month: "5th", value: 150000 },
  { month: "6th", value: 60000 },
  { month: "7th", value: 90000 },
  { month: "8th", value: 70000 },
  { month: "9th", value: 80000 },
  { month: "10th", value: 80000 },
  { month: "11th", value: 90000 },
  { month: "12th", value: 98000 },
  { month: "13th", value: 70000 },
  { month: "14th", value: 50000 },
  { month: "15th", value: 98000 },
  { month: "16th", value: 120000 },
  { month: "17th", value: 140000 },
  { month: "18th", value: 220000 },
  { month: "19th", value: 230000 },
  { month: "20th", value: 240000 },
  { month: "21th", value: 220000 },
  { month: "22th", value: 210000 },
  { month: "23th", value: 180000 },
  { month: "24th", value: 170000 },
  { month: "25th", value: 160000 },
  { month: "26th", value: 190000 },
  { month: "27th", value: 240000 },
  { month: "28th", value: 60000 },
  { month: "29th", value: 170000 },
  { month: "30th", value: 299999 },
];

const chartConfig = {
  value: {
    label: "Visitors",
    color: "hsl(var(--chart-1))",
  },
}

export function Chart() {
  return (
    <div className='h-[300px] w-full border-[1px] rounded'>
      <CardHeader className="border-b-[1px] border-gray-300">
        <CardDescription className='font-bold text-lg p-2 pl-4 text-black'>Loan collection summary</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className='h-[250px] w-full'>
          <AreaChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} stroke='#555' strokeDasharray="2 2" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={true}
              tickFormatter={(value) => value.slice(0, 3)}
            />
             <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--chart-2)" }}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />

            <Area
              dataKey="value"
              type="natural"
              fill="#60a5fa"
              fillOpacity={0.1}
              stroke="#60a5fa"
            />
            <Line
              type="natural"
              dataKey="value"
              stroke="#fca5a5"
              strokeWidth={16}
              dot={{ r: 10, fill: "#fca5a5" }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
}
