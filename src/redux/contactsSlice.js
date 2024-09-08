import { createSlice } from "@reduxjs/toolkit";
import contacts from "../JSON/contacts.json";

const initialState = {
  contacts,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  selectors: {
    selectContacts: (state) => state.contacts,
  },

  reducers: {
    addNewContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload
      );
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const { selectContacts } = contactsSlice.selectors;
