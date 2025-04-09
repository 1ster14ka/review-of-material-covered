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

function App() {
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

  return (
    <div>
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
