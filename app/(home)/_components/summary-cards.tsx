import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import { db } from "@/app/_lib/prisma";

interface SummaryCardsProps {
  month: string;
}

const SummaryCards = async ({ month }: SummaryCardsProps) => {
  const where = {
    date: {
      gte: new Date(`2025-${month}-01`),
      lt: new Date(`2025-${month}-31`),
    },
  };

  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: {
          amount: true,
        },
      })
    )._sum.amount || 0,
  );

  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: {
          amount: true,
        },
      })
    )._sum.amount || 0,
  );

  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: {
          amount: true,
        },
      })
    )._sum.amount || 0,
  );

  const balance = depositsTotal - expensesTotal - investmentsTotal || 0;

  return (
    <div className="space-y-6">
      <SummaryCard
        title={"Saldo"}
        icon={<WalletIcon size={16} />}
        amount={balance}
        size="large"
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          title={"Investido"}
          icon={<PiggyBankIcon size={16} />}
          amount={investmentsTotal}
        />

        <SummaryCard
          title={"Receita"}
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          amount={depositsTotal}
        />

        <SummaryCard
          title={"Despesas"}
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
