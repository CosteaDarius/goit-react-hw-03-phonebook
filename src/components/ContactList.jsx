import React from "react";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => deleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
