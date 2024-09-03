"use client";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export const description = "A radar chart with dots";
const chartData = [
  { month: "Communicativeness", desktop: 186 },
  { month: "Security", desktop: 305 },
  { month: "Free time", desktop: 200 },
  { month: "Practice", desktop: 273 },
  { month: "Quality", desktop: 305 },
  { month: "Teamwork", desktop: 265 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const Skills = () => {
  return (
    <Card className="m-4">
      <CardHeader className="items-center"></CardHeader>
      <CardContent className="pb-0">
        <ChartContainer config={chartConfig} className="mx-auto">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
