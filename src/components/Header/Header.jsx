import styles from "./Header.module.css"

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Financial Control</h1>
      <p>
        Aqui você consegue registrar seus gastos e lucros mensalmente para um
        acompanhamento real
      </p>
    </div>
  );
};
