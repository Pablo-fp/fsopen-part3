<<<<<<< HEAD
import React from "react";

const Filter = ({ searchName, handleSearchChange }) => {
  return (
    <div>
      filter shown with: &nbsp;
      <input
        type="text"
        value={searchName}
        onChange={handleSearchChange}
        placeholder="Search countries"
=======
const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      filter shown with
      <input
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
>>>>>>> 3716055c2e1ef5b4adcd7ff7c58a4f98d4b9b912
      />
    </div>
  );
};

export default Filter;
