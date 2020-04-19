import React from 'react';

const DeleteContact = ({ deleteContact, id }) => (
  <button id={id} onClick={deleteContact}>
    Delete contact
  </button>
);

export default DeleteContact;
