/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData: any[] = [
  /* your data as-is */
];

const chartConfig = {
  visitors: { label: "Visitors" },
  desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
  mobile: { label: "Mobile", color: "hsl(var(--chart-2))" },
} satisfies ChartConfig;

interface ChartPartProps {
  // timeRange removed
}

export function ChartPart() {
  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0! border-b !py-0 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardDescription>Statics Analytics</CardDescription>
          <CardTitle className="text-3xl font-bold">Revenues</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-2! pt-4! sm:px-6! sm:pt-6!">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="#1EE9B6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#D96FF8" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="strokeMobile" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1EE9B6" />
                <stop offset="100%" stopColor="#D96FF8" />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="linear"
              fill="url(#fillMobile)"
              stroke="url(#strokeMobile)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
