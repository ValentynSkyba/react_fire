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

  const getFilteredContacts = () => {
    return contacts.filter(
      (item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.number.includes(filter)
    );
  };

  const filteredData = getFilteredContacts();

  const addContact = (data) => {
    console.log(data);
    setContacts((prev) => [data, ...prev]);
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox filter={filter} onFilter={setFilter} />
        <ContactList contacts={filteredData} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
