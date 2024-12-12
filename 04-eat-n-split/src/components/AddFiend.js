import { useState } from "react";

export default function AddFiend({ setAddFriend, setOpenToAddFriend }) {
  const id = Math.round(Math.random() * 1000000);
  const genImg = `https://i.pravatar.cc/48?u=${id}`;
  const [image, setImage] = useState(genImg);
  const [name, setName] = useState("");

  function handleForm(e) {
    e.preventDefault();
    if (image.length === 0 || name.length === 0) return;
    setAddFriend(
      (friend) => (friend = [...friend, { id, name, image, balance: 0 }])
    );
    setName("");
    setImage("");
    setOpenToAddFriend(false);
  }
  return (
    <form className="form-add-friend">
      <label>👨‍🎤Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🎞 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button type="submit" className="button" onClick={handleForm}>
        Add
      </button>
    </form>
  );
}
