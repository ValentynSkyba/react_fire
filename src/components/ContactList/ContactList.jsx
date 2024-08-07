import React from "react";
import s from "./ContactList.module.css";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ contacts = [], onDelete }) => {
  if (contacts.length === 0) return <p>No contacts</p>;
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            item={contact}
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
