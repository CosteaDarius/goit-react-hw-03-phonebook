import React, { useState } from "react";
import { nanoid } from "nanoid";

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return;

    addContact({ id: nanoid(), name, number });

    setName("");
    setNumber("");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Only letters, apostrophe, dash and spaces"
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
