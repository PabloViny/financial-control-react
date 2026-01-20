import "./App.css";

import { Home } from "./components/Home/Home";
import { TransactionsProvider } from "./context/TransactionContext";

function App() {
  return (
    <div className="app">
      <TransactionsProvider>
        <Home />
      </TransactionsProvider>
    </div>
  );
}

export default App;
