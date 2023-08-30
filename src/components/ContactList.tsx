import ContactActionButton from "./ContactActionButton";

//define interface for contact
interface Contact {
  firstName: string;
  lastName: string;
  status: string;
  id: string;
}

//define interface for contact list
interface ContactS {
  contacts: Contact[];
}

const ContactList = ({ contacts }: ContactS) => {
  return (
    <div className="lg:w-full flex flex-col justify-start items-stretch border">
      <table className="w-full">
        <thead>
          <tr>
            <th className="border p-4">Status</th>
            <th className="border p-4">First Name</th>
            <th className="border p-4">Last Name</th>
            <th className="border p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact) => {
            return (
              <tr key={contact?.id}>
                <td className="border p-4">{contact?.status}</td>
                <td className="border p-4">{contact?.firstName}</td>
                <td className="border p-4">{contact?.lastName}</td>
                <td className="border p-4">
                  <ContactActionButton id={contact?.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
