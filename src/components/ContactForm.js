import React, { useState } from "react";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const status = false;
    const newContact = { id, name, email, phone, status };
    addContact(newContact);
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Contacto</h2>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Correo:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="phone">Telefono:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default ContactForm;
