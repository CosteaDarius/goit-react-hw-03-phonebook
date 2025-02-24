import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <label>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filter;
