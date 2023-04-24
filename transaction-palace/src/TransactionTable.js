import React, { useState, useEffect } from 'react';

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('/http://localhost:8001/Transactions')
      .then(response => response.json())
      .then(data => setTransactions(data.transactions))
      .catch(error => console.log(error));
  }, []);

  return (
    
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions && transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
