// import React, { useState, useEffect } from 'react';

// const TransactionsTable = () => {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     fetch('/db.json')
//       .then(response => response.json())
//       .then(data => setTransactions(data.transactions))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Date</th>
//           <th>Description</th>
//           <th>Amount</th>
//         </tr>
//       </thead>
//       <tbody>
//         {transactions && transactions.map((transaction, index) => (
//           <tr key={index}>
//             <td>{transaction.date}</td>
//             <td>{transaction.description}</td>
//             <td>{transaction.amount}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default TransactionsTable;

import React, { useState, useEffect } from 'react';
function TransactionsTable() {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [newTransaction, setNewTransaction] = useState({
        id: '',
        date: '',
        description: '',
        amount: ''
    });
    useEffect(() => {
        fetch('http://localhost:8001/transactions')
        .then((r) => r.json())
        .then((transactions) => setTransactions(transactions));
    }, []);
  function handleSubmit(e) {
    e.preventDefault();
    setTransactions([...transactions, newTransaction]);
    setNewTransaction({
      id: '',
      date: '',
      description: '',
      amount: ''
    });
    fetch('http://localhost:8001/transactions', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(transactions),
    })
    .then((r) => r.json())
    .then((transactions) => setNewTransaction(transactions));
    }
  const handle= (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return (
    <div className="App">
      <h1>Bank Transactions</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={newTransaction.id} onChange={(e) => setNewTransaction({...newTransaction, id: e.target.value})} />
        </label>
        <label>
          Date:
          <input type="text" value={newTransaction.date} onChange={(e) => setNewTransaction({...newTransaction, date: e.target.value})} />
        </label>
        <label>
          Description:
          <input type="text" value={newTransaction.description} onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})} />
        </label>
        <label>
          Amount:
          <input type="text" value={newTransaction.amount} onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})} />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}
export default TransactionsTable;














