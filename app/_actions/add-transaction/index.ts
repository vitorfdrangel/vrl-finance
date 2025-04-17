"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
import { addTransactionSchema } from "./schema";

export const addTransaction = async (
  params: Omit<Prisma.TransactionCreateInput, "userID">,
) => {
  addTransactionSchema.parse(params);

  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  await db.transaction.create({
    data: { ...params, userID: userId },
  });
};
