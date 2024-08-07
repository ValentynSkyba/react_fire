import { useEffect, useState } from "react";

import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactData from "./JSON/contacts.json";
import { toast } from "react-toastify";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));
    if (savedContacts?.length) {
      return savedContacts;
    }
    return contactData;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

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

  const sortData = () => {
    setContacts((prev) =>
      [...prev].sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const addContact = (data) => {
    const isExist = contacts.some(
      (item) => item.name === data.name && item.number === data.number
    );
    if (isExist) {
      toast.error("Contact already exists");
      return;
    }
    setContacts((prev) => [data, ...prev]);
    sortData();
    toast.success("Contact added");
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox filter={filter} onFilter={setFilter} />
        <ContactList
          filter={filter}
          contacts={filteredData}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
