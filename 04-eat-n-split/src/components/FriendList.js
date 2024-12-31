import { useState } from "react";
import Friend from "./Friend";
import AddFiend from "./AddFiend";

export default function FriendList({
  addFriend,
  setAddFriend,
  curOpen,
  setCurOpen,
}) {
  const [openToAddFriend, setOpenToAddFriend] = useState(false);

  function handleForm() {
    setOpenToAddFriend((cur) => !cur);
  }
  return (
    <div className="sidebar">
      <ul>
        {addFriend.map((friend) => (
          <Friend
            key={friend.id}
            name={friend.name}
            image={friend.image}
            balance={friend.balance}
            id={friend.id}
            curOpen={curOpen}
            setCurOpen={setCurOpen}
          />
        ))}
      </ul>
      {openToAddFriend ? (
        <>
          <AddFiend
            setAddFriend={setAddFriend}
            setOpenToAddFriend={setOpenToAddFriend}
          />
          <button className="button" onClick={handleForm}>
            Close
          </button>
        </>
      ) : (
        <button className="button" onClick={handleForm}>
          Add friend
        </button>
      )}
    </div>
  );
}
