import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectContacts } from "../fearures/contact";
import ContactList from "../components/ContactList";

const ContactsPage: React.FC = () => {
  const navigate = useNavigate();

  //use useSelector to get current contact list data
  const contacts = useSelector(selectContacts);

  return (
    <div className="sm:w-screen lg:w-full flex flex-col justify-start items-center gap-4 lg:p-6">
      <div>
        <button
          className="bg-blue-400 p-2 rounded w-52"
          type="button"
          onClick={() => navigate("/contact/create")}
        >
          Create Contact
        </button>
      </div>
      {contacts.length === 0 && (
        <div className="text-3xl border">
          <p>No contact found please create from create contact button.</p>
        </div>
      )}
      {contacts.length > 0 && <ContactList contacts={contacts} />}
    </div>
  );
};

export default ContactsPage;
