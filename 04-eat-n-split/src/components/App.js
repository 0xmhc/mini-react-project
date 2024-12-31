import FriendList from "./FriendList";
import Bill from "./Bill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [curOpen, setCurOpen] = useState(null);
  const [addFriend, setAddFriend] = useState(initialFriends);
  return (
    <div className="app">
      <FriendList
        addFriend={addFriend}
        curOpen={curOpen}
        setCurOpen={setCurOpen}
        setAddFriend={setAddFriend}
      />
      {curOpen > 0 && (
        <Bill
          key={curOpen}
          addFriend={addFriend}
          setAddFriend={setAddFriend}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        />
      )}
    </div>
  );
}
