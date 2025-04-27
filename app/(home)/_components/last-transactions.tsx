import { Button } from "@/app/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/app/_constants/transactions";
import formatCurrency from "@/app/_utils/currency";
import { Transaction, TransactionType } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface LastTransactionsProps {
  lastTransactions: Transaction[];
}
const LastTransactions = ({ lastTransactions }: LastTransactionsProps) => {
  const getAmountColor = (transactionType: TransactionType) => {
    switch (transactionType) {
      case TransactionType.DEPOSIT:
        return "text-primary";

      case TransactionType.EXPENSE:
        return "text-red-500";

      default:
        return "text-white";
    }
  };

  return (
    <ScrollArea className="h-full rounded-md border">
      <CardHeader>
        <div className="flex items-center justify-between border-b pb-6">
          <CardTitle className="font-bold">Últimas Transações</CardTitle>

          <Button
            variant={"outline"}
            className="rounded-full font-bold"
            asChild
          >
            <Link href="/transactions">Ver mais</Link>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {lastTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between rounded-md"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-white/[3%] p-3">
                <Image
                  src={`/${TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentMethod]}`}
                  width={20}
                  height={20}
                  alt={`${transaction.paymentMethod} icon`}
                />
              </div>

              <div className="text-start">
                <p className="font-bold">{transaction.name}</p>

                <p className="text-sm text-muted-foreground/50">
                  {new Date(transaction.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <p
              className={`text-sm font-bold ${getAmountColor(transaction.type)}`}
            >
              {transaction.type === TransactionType.DEPOSIT ? "+" : "-"}
              {formatCurrency(Number(transaction.amount))}
            </p>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};

export default LastTransactions;
