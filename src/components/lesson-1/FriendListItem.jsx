const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
