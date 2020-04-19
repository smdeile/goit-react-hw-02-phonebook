import React from 'react';
import DeleteContact from './DeleteContact';

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

export default ContactsList;
