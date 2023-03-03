import React from "react";

function ContactItem({ contact, removeContact, toggleStatus }) {
  return (
    <div className="contact">
      <div className="info">
        <h3>{contact.name}</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <div className="status">
        <button onClick={() => toggleStatus(contact.id)}>{contact.status ? "Conectado" : "Desconectado"}</button>
        <button onClick={() => removeContact(contact.id)}>Eliminar</button>
      </div>
    </div>
  );
}

export default ContactItem;
