import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.mudule.css';

const Filter = ({ state, handleChange }) => {
  return (
    <>
      <label className={styles.form}>
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
Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
export default Filter;
