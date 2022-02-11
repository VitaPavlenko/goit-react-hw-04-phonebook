import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactList/ContactList';
import { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
export default function App() {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  const contact = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contact')) || contact;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contact');
  //   const parsedContacts = JSON.parse(contacts);
  //   console.log(parsedContacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState.contacts);
  //   console.log(this.state.contacts);
  //   if (prevState.contacts !== this.state.contacts) {
  //     console.log('ok');
  //     localStorage.setItem('contact', JSON.stringify(this.state.contacts));
  //   }
  // }

  const addContact = newContact => {
    const searchContactByName = contacts
      .map(contact => contact.name)
      .includes(newContact.name);

    console.log(searchContactByName);

    if (searchContactByName) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    // const contact = { ...newContact, id: nanoid() };

    setContacts([...contacts, newContact]);
  };

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const deletaClick = nameId =>
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== nameId)
    );

  // const { contacts, name, number, filter } = this.state;

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <ContactList
        contact={contacts}
        filter={filter}
        deletaClick={deletaClick}
      />
    </div>
  );
}

// export default App;
