import FriendListItem from "./FriendListItem";
import s from "./FriendsList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map((el) => {
        return (
          <FriendListItem
            src={el.avatar}
            name={el.name}
            status={el.isOnline}
            key={el.id}
          />
        );
      })}
    </ul>
  );
}

export default FriendList;
