import { useState } from "react";

import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactData from "./JSON/contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactData);
  const [filter, setFilter] = useState("");

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList contacts={contacts} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
