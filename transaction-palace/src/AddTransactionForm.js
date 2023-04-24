import React, { useState } from "react";

function AddTransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {

      category,
      amount,
      date: new Date().toLocaleDateString(),
    };
    onAddTransaction(newTransaction);
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <div className="add-transaction-form">
      <h2>Add a New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            required
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
