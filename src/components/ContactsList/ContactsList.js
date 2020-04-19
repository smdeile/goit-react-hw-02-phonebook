import React from 'react';
import DeleteContact from './DeleteContact';
import PropTypes from 'prop-types';

const ContactsList = ({ state, deleteContact }) => (
  <ul>
    {state.contacts
      .filter(name => {
        return name.name.toLocaleLowerCase().includes(state.filter);
      })
      .map(el => (
        <li key={el.id}>
          {el.name}: {el.number}
          <DeleteContact deleteContact={deleteContact} id={el.id} />
        </li>
      ))}
  </ul>
);
ContactsList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
export default ContactsList;
