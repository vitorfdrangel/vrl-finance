"use client";

import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { PencilIcon } from "lucide-react";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Transaction } from "@prisma/client";

interface TransactionProps {
  transaction: Transaction;
}

const EditTransactionButton = ({ transaction }: TransactionProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon className="text-muted-foreground" />
      </Button>

      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{ ...transaction, amount: Number(transaction.amount) }}
        transactionId={transaction.id}
      />
    </>
  );
};

export default EditTransactionButton;
