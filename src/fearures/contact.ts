import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; 

//define interface for contact
interface Contact {
  firstName: string;
  lastName: string;
  status: string;
  id: string;
}

//define interface for contact list
interface ContactState {
  contacts: Contact[];
}

//intial state of contact list
const initialState: ContactState = {
  contacts: [],
};

//contact list slice
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id, ...updatedContact } = action.payload;
      const existingContact = state.contacts.find((contact) => contact.id === id);
      if (existingContact) {
        Object.assign(existingContact, updatedContact);
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
  },
});

//export actions
export const { addContact, editContact, deleteContact } = contactSlice.actions;

//export contacts state
export const selectContacts = (state: RootState) => state.contacts.contacts;

//export contact reducer
export default contactSlice.reducer;
