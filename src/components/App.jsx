import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";


export const App = () => {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');



  const removeContact = (contactId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId))
  }

  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      {contacts.length > 0 && <ContactList contacts={contacts} onRemoveContact={removeContact} />}
    </div>  
  );
};
