"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import Groq from "groq-sdk";
import { GenerateAiReportSchema, generateAiReportSchema } from "./schema";
import { getUserPlan } from "@/app/_data/get-user-plan";

export const generateAiReport = async ({ month }: GenerateAiReportSchema) => {
  generateAiReportSchema.parse({ month });

  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const hasPremiumPlan = await getUserPlan();
  if (!hasPremiumPlan) {
    throw new Error("User does not have a premium plan");
  }

  const transactions = await db.transaction.findMany({
    where: {
      userID: userId,
      date: {
        gte: new Date(`2025-${month}-01`),
        lt: new Date(`2025-${month}-31`),
      },
    },
  });

  const content = `Gere um relatório com insights sobre as minhas finanças, com dicas e orientações de como melhorar minha vida financeira. As transações estão divididas por ponto e vírgula. A estrutura de cada uma é {DATA}-{TIPO}-{VALOR}-{CATEGORIA}. São elas: ${transactions.map((transaction) => `${transaction.date.toLocaleDateString("pt-BR")}-${transaction.type}-${transaction.amount}-${transaction.category}`).join(";")}. Não gere introdução. `;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "Você é um especialista em organização financeira. Você ajuda as pessoas a organizarem melhor suas finanças",
      },
      {
        role: "user",
        content,
      },
    ],
  });

  return completion.choices[0].message.content;
};
