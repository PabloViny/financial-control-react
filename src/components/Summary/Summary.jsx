import styles from "./Summary.module.css"
import { useTransactions } from "../../hooks/useTransactions";

export const Summary = () => {
  const { income, expense, balance } = useTransactions();

  const formatCurrency = (value = 0) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <section className={styles.summary}>
      <div className={`${styles.card} ${styles.income}`}>
        <p>Entradas</p>
        <strong>{formatCurrency(income)}</strong>
      </div>

      <div className={`${styles.card} ${styles.expense}`}>
        <p>Saídas</p>
        <strong>{formatCurrency(Math.abs(expense))}</strong>
      </div>

      <div className={`${styles.card} ${styles.balance}`}>
        <p>Saldo</p>
        <strong>{formatCurrency(balance)}</strong>
      </div>
    </section>
  );
};
