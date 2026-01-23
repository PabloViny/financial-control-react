import { useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import styles from "./TransactionForm.module.css";

export const TransactionForm = () => {
  const { addTransaction } = useTransactions();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [colorTransaction, setColorTransaction] = useState("income");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description || !amount) return;

    const numericValue = Number(amount);
    const finalValue =
      colorTransaction === "expense" ? -numericValue : numericValue;

    addTransaction({
      id: crypto.randomUUID(),
      description,
      amount: finalValue,
    });

    setDescription("");
    setAmount("");
  }

  const handleAmountChange = (e) => {
    const value = e.target.value;

    // Permite apenas números e um único ponto decimal
    if (!/^\d*\.?\d*$/.test(value)) return;
    setAmount(value);
  };

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

        <div className={styles.fieldValue}>
          <input
            className={styles.input}
            type="text"
            inputMode="decimal"
            placeholder="Valor"
            value={amount}
            onChange={handleAmountChange}
          />
          <button
            type="button"
            className={`${styles.toggleButton} ${styles[colorTransaction]}`}
            onClick={() =>
              setColorTransaction((prev) =>
                prev === "income" ? "expense" : "income",
              )
            }
          >
            <span className={styles.incomeLabel}>⬆ Entrada</span>
            <span className={styles.expenseLabel}>⬇ Saída</span>
          </button>
        </div>

        <button className={styles.button} type="submit">
          Adicionar
        </button>
      </div>

      <span className={styles.hint}>
        Selecione Entrada ou Saída para definir o valor
      </span>
    </form>
  );
};
