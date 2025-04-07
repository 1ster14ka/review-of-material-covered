import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        // console.log(friend);

        return (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
      {/* <li>
        <FriendListItem />
      </li> */}
    </ul>
  );
};

export default FriendList;
