import "./App.css";
import Profile from "./lesson-1/Profile.jsx";
import userData from "../../userData.json";
import friends from "../../friends.json";
import FriendList from "./lesson-1/FriendList.jsx";
import transactions from "../../transactions.json";
import TransactionHistory from "./lesson-1/TransactionHistory.jsx";

function App() {
  return (
    <div>
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
