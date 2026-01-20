import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionContext";

export const useTransactions = () => {
  const context = useContext(TransactionsContext);

  if (!context) {
    throw new Error(
      "useTransactions must be used within a TransactionsContext",
    );
  }

  return {
    transactions: context.transactions ?? [],
    income: context.income ?? 0,
    expense: context.expense ?? 0,
    balance: context.balance ?? 0,
    addTransaction: context.addTransaction,
    removeTransaction: context.removeTransaction,
  };
};
