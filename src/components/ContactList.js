import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, removeContact, toggleStatus }) {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} removeContact={removeContact} toggleStatus={toggleStatus} />
      ))}
    </div>
  );
}

export default ContactList;
