import { TransactionType } from "@prisma/client";

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  PIX: "Pix",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto",
  OTHER: "Outros",
};

export const TRANSACTION_TYPE_OPTIONS = [
  { value: TransactionType.EXPENSE, label: "Despesa" },
  { value: TransactionType.DEPOSIT, label: "Depósito" },
  { value: TransactionType.INVESTMENT, label: "Investimento" },
];
