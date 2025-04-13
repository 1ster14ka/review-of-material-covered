const Contact = ({ contact, onDel }) => {
  return (
    <div>
      <ul>
        {contact.map((item, index) => {
          return (
            <li key={index}>
              <p>{item.name}</p>
              <p>{item.number}</p>
              <button onClick={() => onDel(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contact;
