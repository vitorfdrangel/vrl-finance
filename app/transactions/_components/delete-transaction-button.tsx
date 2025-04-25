"use client";

import { Button } from "@/app/_components/ui/button";
import { TrashIcon } from "lucide-react";
import { deleteTransaction } from "../_actions/delete-transaction";

interface DeleteTransactionProps {
  transactionId: string;
}

const DeleteTransactionButton = ({ transactionId }: DeleteTransactionProps) => {
  return (
    <>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => deleteTransaction(transactionId)}
      >
        <TrashIcon className="text-muted-foreground" />
      </Button>
    </>
  );
};

export default DeleteTransactionButton;
