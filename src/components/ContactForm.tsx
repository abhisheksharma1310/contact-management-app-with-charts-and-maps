import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../features/contact";
import { addContact, editContact } from "../features/contact";

const ContactForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { contactId } = useParams();
  const path = location.pathname.split("/");
  const edit = path[2] === "edit" ? true : false;

  //get current contacts state data
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  //state for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    status: "",
    id: new Date().getTime().toString(),
  });

  //state for form submission success 
  const [success, setSuccess] = useState(false);
  

  //find contact detail by its id
  useEffect(() => {
    const findContact = () => {
      const contactDetail = contacts.find((contact) => contact.id === contactId);
      if(contactDetail) {
        setFormData(contactDetail);
      }
    }

    if(edit) findContact();

  }, [contactId, edit, contacts])

  //handle form input change
  const handleForm = (event: any) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //Handle form submit
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (edit) {
      dispatch(editContact(formData));
    } else {
      dispatch(addContact(formData));
    }
    setSuccess(true);
    redirectToHome();
  };

  //Redirect to Contact Page
  const redirectToHome = () => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="flex flex-col justify-start items-center gap-8 p-4">
      <h1 className="text-2xl">{edit ? "Edit Contact" : "Create Contact"}</h1>
      <form onSubmit={handleFormSubmit} method="post">
        <div className="border text-xl grid grid-cols-1 gap-4 m-1 p-4">
          <label htmlFor="firstName">
            First Name{" "}
            <input
              className="border-2 p-2"
              type="text"
              id="firstName"
              placeholder="Enter first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleForm}
              required
              minLength={3}
              maxLength={20}
            />
          </label>
          <label htmlFor="lastName">
            Last Name{" "}
            <input
              className="border-2 p-2"
              type="text"
              id="lastName"
              placeholder="Enter last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleForm}
              required
              minLength={3}
              maxLength={20}
            />
          </label>
          <div className="grid grid-cols-3">
            <label className="col-span-1">Status</label>
            <div className="col-span-2 flex flex-col justify-start items-start">
              <label htmlFor="status-active">
                <input
                  type="radio"
                  id="status-active"
                  name="status"
                  value="active"
                  checked={formData.status === "active" ? true : false}
                  onChange={handleForm}
                  required
                />
                <span> Active</span>
              </label>
              <label htmlFor="status-inactive">
                <input
                  type="radio"
                  id="status-inactive"
                  name="status"
                  value="inactive"
                  checked={formData.status === "inactive" ? true : false}
                  onChange={handleForm}
                  required
                />
                <span> Inactive</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-blue-400 p-2 rounded" type="submit">
            {edit ? "Update Contact" : "Save Contact"}
          </button>
        </div>
      </form>
      {success && (
        <>
          <h1>
            {edit
              ? "Contact details updated, go to contact page to check it."
              : "New contact detail added, go to contact page to check it."}
          </h1>
          <h2>You are redirecting to home page...</h2>
        </>
      )}
    </div>
  );
};

export default ContactForm;
