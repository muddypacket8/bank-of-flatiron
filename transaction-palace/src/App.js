import AddTransactionForm from "./AddTransactionForm";
import "./App.css";
import SearchBar from "./SearchBar";
import TransactionsTable from "./TransactionTable";

function App() {
  return (
    
    <div className="App">
      <TransactionsTable/>
      <SearchBar/>
      <AddTransactionForm/>
    </div>
  )

}
export default App ;
