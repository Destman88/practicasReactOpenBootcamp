import React, {useState} from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const toggleStatus = (id) => {
    setContacts(
      contacts.map((contact) => {
        if (contact.id === id) {
          return { ...contact, status: !contact.status };
        } else {
          return contact;
        }
      })
    );
  };

  return (
    <div className="App">
      <h1>Contactos</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} removeContact={removeContact} toggleStatus={toggleStatus} />
      
    </div>
  );
}

export default App;
