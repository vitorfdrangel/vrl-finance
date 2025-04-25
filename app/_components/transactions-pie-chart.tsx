"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "../_data/get-dashboard/types";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import PercentageItem from "../(home)/_components/percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFFFFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#E93030",
  },
} satisfies ChartConfig;

interface TransactionPieChartProps {
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  typesPercentage: TransactionPercentagePerType;
}

const TransactionPieChart = ({
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  typesPercentage,
}: TransactionPieChartProps) => {
  const chartData = [
    { type: TransactionType.DEPOSIT, amount: depositsTotal, fill: "#55B02E" },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF",
    },
    { type: TransactionType.EXPENSE, amount: expensesTotal, fill: "#E93030" },
  ];

  return (
    <Card className="flex flex-col p-10">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>

        <div className="space-y-2">
          <PercentageItem
            title="Receita"
            icon={<TrendingUpIcon size={16} color="#55B02E" />}
            value={typesPercentage[TransactionType.DEPOSIT]}
          />

          <PercentageItem
            title="Despesas"
            icon={<TrendingDownIcon size={16} color="#E93030" />}
            value={typesPercentage[TransactionType.EXPENSE]}
          />

          <PercentageItem
            title="Investido"
            icon={<PiggyBankIcon size={16} />}
            value={typesPercentage[TransactionType.INVESTMENT]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionPieChart;
