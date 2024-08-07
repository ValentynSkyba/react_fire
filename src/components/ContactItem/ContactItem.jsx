import React from "react";
import s from "./ContactItem.module.css";

const ContactItem = ({ item, onDelete }) => {
  const { id, name, number } = item;
  return (
    <li>
      <h3>{name}</h3>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
