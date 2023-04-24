import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default App;

// import React, { useState, useEffect } from "react";
// import TransactionsTable from "./components/TransactionsTable";
// import AddTransactionForm from "./components/AddTransactionForm";
// import SearchBar from "./components/SearchBar";

// function App() {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     // fetch data from local server running JSON DB server
//     // and store it in state
//   }, []);

//   const handleAddTransaction = (newTransaction) => {
//     // add new transaction to state
//   };

//   const handleDeleteTransaction = (transactionId) => {
//     // remove transaction from state
//   };

//   const handleSearchTransactions = (searchTerm) => {
//     // filter transactions by search term
//   };

//   const handleSortTransactions = (sortBy) => {
//     // sort transactions by category or description
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>Bank Transactions</h1>
//         <img src="/logo.png" alt="Logo" />
//       </header>
//       <main>
//         <TransactionsTable
//           transactions={transactions}
//           onDeleteTransaction={handleDeleteTransaction}
//           onSortTransactions={handleSortTransactions}
//         />
//         <AddTransactionForm onAddTransaction={handleAddTransaction} />
//       </main>
//       <aside>
//         <SearchBar onSearchTransactions={handleSearchTransactions} />
//       </aside>
//     </div>
//   );
// }

export default App;


