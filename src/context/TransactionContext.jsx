import { createContext, useEffect, useState } from "react";
import { loadTransactions, saveTransactions } from "../services/storage";

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    return loadTransactions();
  });

  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  function addTransaction(transaction) {
    setTransactions((prev) => [...prev, transaction]);
  }

  function removeTransaction(id) {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }

  const amounts = transactions
    .map((t) => Number(t.amount))
    .filter((v) => !Number.isNaN(v));

  const income = amounts.filter((v) => v > 0).reduce((acc, v) => acc + v, 0);

  const expense = amounts.filter((v) => v < 0).reduce((acc, v) => acc + v, 0);

  const balance = income + expense;

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        addTransaction,
        removeTransaction,
        income,
        expense,
        balance,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
