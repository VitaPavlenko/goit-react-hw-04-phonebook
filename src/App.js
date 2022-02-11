import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactList/ContactList';
import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contact');
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.contacts);
    console.log(this.state.contacts);
    if (prevState.contacts !== this.state.contacts) {
      console.log('ok');
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const searchContactByName = this.state.contacts
      .map(contact => contact.name)
      .includes(newContact.name);

    if (searchContactByName) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deletaClick = nameId => {
    console.log('ok');
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== nameId),
    }));
  };

  render() {
    // const { contacts, name, number, filter } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deletaClick={this.deletaClick}
        />
      </div>
    );
  }
}

export default App;
