import "./App.css";
import Profile from "./lesson-1/Profile.jsx";
import userData from "../../userData.json";
import friends from "../../friends.json";
import FriendList from "./lesson-1/FriendList.jsx";
import transactions from "../../transactions.json";
import TransactionHistory from "./lesson-1/TransactionHistory.jsx";
import { useState } from "react";
import { useEffect } from "react";
import Descriptions from "./lesson-2/Descriptions.jsx";
import Options from "./lesson-2/Options.jsx";
import FeedBack from "./lesson-2/FeedBack.jsx";
import Notification from "./lesson-2/Notification.jsx";
import Form from "./lesson-3/Form.jsx";
import SearchBar from "./lesson-3/SearchBar.jsx";
import ContactForm from "./lesson-3/ContactForm.jsx";
import SearchBox from "./lesson-3/SearchBox.jsx";
import ContactList from "./lesson-3/ContactList.jsx";

function App() {
  //  LESSON-2
  const [items, setItems] = useState(() => {
    const savedLocal = window.localStorage.getItem("feed-back");

    if (savedLocal !== null) {
      return JSON.parse(savedLocal);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feed-back", JSON.stringify(items));
  }, [items]);

  // LESSON-1

  const totalFeedback = items.good + items.neutral + items.bad;

  const result = Math.round((items.good / totalFeedback) * 100);

  function updateFeedback(feedbackType) {
    switch (feedbackType) {
      case "good":
        setItems({
          ...items,
          good: items.good + 1,
        });
        break;

      case "neutral":
        setItems({
          ...items,
          neutral: items.neutral + 1,
        });
        break;
      case "bad":
        setItems({
          ...items,
          bad: items.bad + 1,
        });
        break;
    }
  }

  // LESSON-3
  // const [lang, setLang] = useState("uk");

  // function hadleLogin(userDate) {
  //   console.log(userDate);
  // }

  const [contacts, setContacts] = useState([]);

  const [filter, setFilter] = useState("");

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  function addContact(newContact) {
    setContacts((prev) => {
      return [...prev, newContact];
    });
  }

  function deleteContact(contactId) {
    setContacts((prev) => {
      return prev.filter((item) => item.id !== contactId);
    });
  }

  return (
    <div>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contact={filterContacts} onDel={deleteContact} />
      {/* <SearchBar value={lang} onSelect={setLang} /> */}

      {/* <Form onLogin={hadleLogin} /> */}
      <Descriptions />
      <Options
        resetFeedBack={setItems}
        updateFeedBacks={updateFeedback}
        reset={totalFeedback}
      />
      {totalFeedback ? (
        <FeedBack feedBacks={items} total={totalFeedback} positive={result} />
      ) : (
        <Notification />
      )}

      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
