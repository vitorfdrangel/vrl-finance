import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

export const TransactionTypeBadge = ({
  transaction,
}: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        <p>Depósito</p>
      </Badge>
    );
  }

  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger/10 font-bold text-danger hover:bg-danger/10">
        <CircleIcon className="mr-2 fill-danger" size={10} />
        <p>Despesa</p>
      </Badge>
    );
  }

  return (
    <Badge className="bg-white/10 font-bold text-white hover:bg-white/10">
      <CircleIcon className="mr-2 fill-white" size={10} />
      <p>Investimento</p>
    </Badge>
  );
};
