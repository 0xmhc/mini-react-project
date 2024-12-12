import { useState } from "react";
export default function Bill({ curOpen, setCurOpen, addFriend, setAddFriend }) {
  const friend = addFriend.find((friend) => curOpen === friend.id);
  const [bill, setBill] = useState(null);
  const [expense, setExpense] = useState(null);
  const [expenseFriend, setExpenseFriend] = useState(null);
  const [whoPay, setWhoPay] = useState(0);
  function splitBill(e) {
    e.preventDefault();
    if (bill == null || expense == null || expenseFriend == null) return;
    let findFriendBalance = addFriend.find(
      (per) => per.id == friend.id
    ).balance;
    if (whoPay == 0) {
      findFriendBalance = -expenseFriend;
      setAddFriend((fr) =>
        fr.map((person) =>
          person.id == friend.id
            ? { ...person, balance: person.balance - findFriendBalance }
            : person
        )
      );
    } else {
      findFriendBalance = expenseFriend;
      setAddFriend((fr) =>
        fr.map((person) =>
          person.id == friend.id
            ? { ...person, balance: person.balance - findFriendBalance }
            : person
        )
      );
    }
    setBill(null);
    setExpense(null);
    setExpenseFriend(null);
    setWhoPay(0);
    setCurOpen(null);
  }
  return (
    <div className="sidebar">
      <ul>
        <form className="form-split-bill" onSubmit={splitBill}>
          <h2>Split A bill With {friend.name}</h2>
          <label>💸Bill value</label>
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
          <label>🧔Your expense</label>
          <input
            type="number"
            value={expense}
            onChange={(e) => {
              setExpense(e.target.value);
              setExpenseFriend((cur) => (cur = bill - e.target.value));
            }}
          />
          <label>👩‍🎨👨‍🎤{friend.name}'s expense:</label>
          <input
            type="number"
            disabled
            value={Number(expenseFriend)}
            onChange={(e) => setExpenseFriend(e.target.value)}
          />
          <label>🤑Who is paying the bill?</label>
          <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
            <option value={0}>You</option>
            <option value={friend.id}>{friend.name}</option>
          </select>
          <button className="button" type="submit">
            Split Bill
          </button>
        </form>
      </ul>
    </div>
  );
}
