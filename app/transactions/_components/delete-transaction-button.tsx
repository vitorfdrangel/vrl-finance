"use client";

import { Button } from "@/app/_components/ui/button";
import { Transaction } from "@prisma/client";
import { TrashIcon } from "lucide-react";
import { deleteTransaction } from "../_actions/delete-transaction";

interface TransactionProps {
  transaction: Transaction;
}

const DeleteTransactionButton = ({ transaction }: TransactionProps) => {
  const id = transaction.id;

  return (
    <>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => deleteTransaction(id)}
      >
        <TrashIcon className="text-muted-foreground" />
      </Button>
    </>
  );
};

export default DeleteTransactionButton;
