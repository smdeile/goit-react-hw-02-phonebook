import React from 'react';

const Filter = ({ state, handleChange }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={state.filter}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default Filter;
