import React, { useState } from "react";

function SearchBar({ onSearchTransactions }) {
  const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = () => {
//     onSearchTransactions(searchTerm);
//   };

  return (
    <div className="search-bar">
      <h2>Search Transactions</h2>
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
