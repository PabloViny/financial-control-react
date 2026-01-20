export const TransactionItem = ({transaction}) => {
  return (
    <li key={transaction.id}>
      {transaction.description}
      {transaction.amount}
      <button>X</button>
    </li>
  );
};
