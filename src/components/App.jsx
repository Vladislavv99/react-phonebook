import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { nanoid } from "nanoid";
import Filter from "./Filter/Filter";


export const App = () => {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {

    const searchSameName = contacts
      .map(contact => contact.name.toLocaleLowerCase()).includes(name.toLocaleLowerCase())

    if (searchSameName) {
      alert(`${name} is already in contacts`)
    } else if (name.length === 0) {
      alert(`Name must be filled`)
    } else {
      const contact = {
        id: nanoid(),
        name,
        number
      }
      setContacts(prevState => [...prevState, contact]);
    }
  }

  const changeFilter = e => {
    const { value } = e.target;
    setFilter(value)
  }

  const filteredContacts = () => {
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
  }

  const removeContact = (contactId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId))
  }

  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm onAddContact={addContact} />
      <h1>Contacts</h1>
      {contacts.length > 1 && <Filter value={filter} onChangeFilter={changeFilter}/>}
      <ContactList contacts={filteredContacts()} onRemoveContact={removeContact} />
    </div>  
  );
};
