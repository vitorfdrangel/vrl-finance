import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { TransactionColumns } from "./_columns";
import UpsertTransactionButton from "../_components/add-transaction-button";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <UpsertTransactionButton />
      </div>
      <DataTable
        columns={TransactionColumns}
        data={JSON.parse(JSON.stringify(transactions))}
      />
    </div>
  );
};

export default TransactionsPage;
