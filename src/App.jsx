import "./App.css";
import Profile from "./components/Profile/Profile";
import friends from "./components/JSON/fiends.json";
import userData from "./components/JSON/userData.json";
import FriendList from "./components/Friends/FriendsList";
import transactions from "./components/JSON/objects.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
