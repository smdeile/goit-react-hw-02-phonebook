import React from 'react';
import PropTypes from 'prop-types';

const DeleteContact = ({ deleteContact, id }) => (
  <button id={id} onClick={deleteContact}>
    Delete contact
  </button>
);
DeleteContact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default DeleteContact;
