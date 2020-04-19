import React from 'react';

const СontactForm = ({ onSubmit, state, handleChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="number"
            name="number"
            value={state.number}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
export default СontactForm;
