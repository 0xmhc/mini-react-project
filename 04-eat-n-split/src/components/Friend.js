export default function Friend({
  id,
  name,
  image,
  balance,
  curOpen,
  setCurOpen,
}) {
  let isOpen = curOpen === id;
  function handleToggle() {
    setCurOpen(isOpen ? null : id);
  }

  return (
    <li>
      <img src={image} alt="clarck" />
      <h3>{name}</h3>
      <p className={balance > 0 ? "green" : balance < 0 ? "red" : null}>
        {balance > 0
          ? `${name} owes you ${balance}$`
          : balance < 0
          ? `You owe ${name} ${Math.abs(balance)}$`
          : `You and ${name} are even`}
      </p>
      <button className="button" onClick={handleToggle}>
        {isOpen ? "Close" : "Select"}
      </button>
    </li>
  );
}
