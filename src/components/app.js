import React, { Component } from 'react';
import СontactForm from './СontactForm/СontactForm';
import Wrapper from './Wrapper/Wrapper';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

import shortid from 'shortid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (
      this.state.contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          this.state.name.toLocaleLowerCase(),
      )
    ) {
      alert(`${this.state.name} is already exist`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            {
              name: this.state.name,
              number: this.state.number,
              id: shortid.generate(),
            },
          ],
          name: '',
          number: '',
        };
      });
    }
  };
  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    return (
      <>
        <Wrapper tittle="Phonebook">
          <СontactForm
            onSubmit={this.onSubmit}
            state={this.state}
            handleChange={this.handleChange}
          />
        </Wrapper>
        <Wrapper tittle="Contacts">
          <Filter state={this.state} handleChange={this.handleChange} />
          <ContactsList state={this.state} deleteContact={this.deleteContact} />
        </Wrapper>
      </>
    );
  }
}
