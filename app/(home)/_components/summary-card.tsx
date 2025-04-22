import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  title: string;
  icon: ReactNode;
  amount: number;
  size?: "small" | "large";
}

const SummaryCard = ({
  title,
  icon,
  amount,
  size = "small",
}: SummaryCardProps) => {
  return (
    <>
      <Card>
        <CardHeader className="flex-row items-baseline gap-4">
          {icon}
          <p
            className={`${size === "small" ? "text-muted-foreground" : "text-white opacity-70"}`}
          >
            {title}
          </p>
        </CardHeader>

        <CardContent className="flex items-center justify-between">
          <p
            className={`${size === "small" ? "text-2xl" : "text-4xl"} font-bold`}
          >
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(amount)}
          </p>

          {size === "large" && <AddTransactionButton />}
        </CardContent>
      </Card>
    </>
  );
};

export default SummaryCard;
