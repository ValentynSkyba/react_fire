import s from "./ContactList.module.css";
import ContactItem from "../ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  // if (!contacts.length && filter) {
  //   return <p>Serch query not found</p>;
  // } else if (!contacts.length) {
  //   return <p>No contacts</p>;
  // }
  const contacts = useSelector(selectContacts);
  const searchStr = useSelector(selectFilter);

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  // );

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchStr.toLowerCase())
  );
  console.log(filteredContacts);

  if (!filteredContacts.length && searchStr) {
    return <p>Serch query not found</p>;
  } else if (!filteredContacts.length) {
    return <p>No contacts</p>;
  }

  return (
    <div>
      <ul>
        {filteredContacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
