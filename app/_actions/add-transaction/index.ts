"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { upsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface UpsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (params: UpsertTransactionParams) => {
  upsertTransactionSchema.parse(params);

  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  if (params.id) {
    await db.transaction.update({
      where: { id: params.id },
      data: { ...params, userID: userId },
    });
  } else {
    await db.transaction.create({
      data: { ...params, userID: userId },
    });
  }

  revalidatePath("/transactions");
};
