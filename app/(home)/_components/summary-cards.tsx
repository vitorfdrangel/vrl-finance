import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCardsProps {
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  balance: number;
}

const SummaryCards = async ({
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  balance,
}: SummaryCardsProps) => {
  return (
    <div className="space-y-6">
      <SummaryCard
        title={"Saldo"}
        icon={<WalletIcon size={16} />}
        amount={balance}
        size="large"
      />

      <div className="grid grid-cols-[1.4fr,1fr,1fr] gap-6">
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

        <SummaryCard
          title={"Investido"}
          icon={<PiggyBankIcon size={16} />}
          amount={investmentsTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
