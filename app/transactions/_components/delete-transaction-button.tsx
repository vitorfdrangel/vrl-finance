"use client";

import { Button } from "@/app/_components/ui/button";
import { TrashIcon } from "lucide-react";
import { deleteTransaction } from "../_actions/delete-transaction";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { deleteTransactionSchema } from "../_actions/delete-transaction/schema";
import { toast } from "sonner";

interface DeleteTransactionProps {
  transactionId: string;
}

const DeleteTransactionButton = ({ transactionId }: DeleteTransactionProps) => {
  deleteTransactionSchema.parse({ transactionId });

  const handleConfirmDelete = async () => {
    try {
      await deleteTransaction({ transactionId });

      toast.success("Transação deletada com sucesso!");
    } catch (error) {
      console.log(error);

      toast.error("Erro ao deletar transação!");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <TrashIcon className="text-muted-foreground" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tem certeza que deseja deletar essa transação?
          </AlertDialogTitle>

          <AlertDialogDescription>
            Essa ação não poderá ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>

          <AlertDialogAction onClick={handleConfirmDelete}>
            Deletar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTransactionButton;
