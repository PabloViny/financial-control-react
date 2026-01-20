import { useTransactions } from "../../hooks/useTransactions";
import styles from "./TransactionList.module.css";

export const TransactionList = () => {
  const { transactions, removeTransaction } = useTransactions();

  if (!transactions.length) {
    return <p className={styles.empty}>Nenhuma transação cadastrada</p>;
  }

  return (
    <section className={styles.list}>
      <header className={styles.header}>
        <span>Descrição</span>
        <span>Valor</span>
      </header>

      {transactions.map((transaction) => (
        <div key={transaction.id} className={styles.item}>
          <span className={styles.description}>{transaction.description}</span>

          <div className={styles.valueWrapper}>
            <span
              className={`${styles.value} ${
                transaction.amount > 0 ? styles.income : styles.expense
              }`}
            >
              {transaction.amount.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>

            <button
              className={styles.remove}
              onClick={() => removeTransaction(transaction.id)}
              aria-label="Remover transação"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
