import React, { Component } from 'react';
import Contacts from '../Contacts/Contacts';
import shortid from 'shortid';
import Wrapper from 'components/Wrapper/Wrapper';

export default class AddContactForm extends Component {
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
    console.log(this.state);
  };
  onSubmit = e => {
    e.preventDefault();

    this.state.contacts.push({
      name: this.state.name,
      number: this.state.number,
      id: shortid.generate(),
    });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <Wrapper tittle="Phonebook">
          <form onSubmit={this.onSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Number
              <input
                type="number"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </Wrapper>
        <Wrapper tittle="Contacts">
          <label>
            Find contacts by name
            <input
              type="text"
              name="filter"
              value={this.state.filter}
              onChange={this.handleChange}
            />
          </label>
          <Contacts
            contact={this.state.contacts
              .filter(name => {
                return name.name
                  .toLocaleLowerCase()
                  .includes(this.state.filter);
              })
              .map(el => (
                <li key={el.id}>
                  {el.name}: {el.number}
                </li>
              ))}
          />
        </Wrapper>
      </>
    );
  }
}
