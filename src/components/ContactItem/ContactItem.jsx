import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./ContactItem.module.css";

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <h3>{contact.name}</h3>
      <p>{contact.number}</p>
      <button onClick={() => dispatch(deleteContact(contact.id))} type="button">
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
