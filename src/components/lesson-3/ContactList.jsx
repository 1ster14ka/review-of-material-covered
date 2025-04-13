import Contact from "./Contact";

const ContactList = ({ contact, onDel }) => {
  return (
    <div>
      {contact.length !== 0 && <Contact contact={contact} onDel={onDel} />}
    </div>
  );
};

export default ContactList;
