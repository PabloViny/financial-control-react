import { Header } from "../Header/Header";
import { Summary } from "../Summary/Summary";
import { TransactionForm } from "../TransactionForm/TransactionForm";
import { TransactionList } from "../TransactionList/TransactionList";

export const Home = () => {
  return (
    <div className="">
      <Header />
      <Summary />

      <TransactionForm />
      <TransactionList />
    </div>
  );
};
