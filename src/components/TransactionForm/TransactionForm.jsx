import { useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import styles from "./TransactionForm.module.css";

export const TransactionForm = () => {
  const { addTransaction } = useTransactions();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description || !amount) return;

    addTransaction({
      id: crypto.randomUUID(),
      description,
      amount: Number(amount),
    });

    setDescription("");
    setAmount("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Nova transação</h2>

      <div className={styles.fields}>
        <input
          className={styles.input}
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className={styles.input}
          type="number"
          placeholder="Valor (use negativo para saída)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className={styles.button} type="submit">
          Adicionar
        </button>
      </div>

      <span className={styles.hint}>
        Use valores negativos para despesas
      </span>
    </form>
  );
};
