import { useEffect, useState } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Choose() {
  const { dispatch } = useQuiz();
  const [nmbrQuestions, setNmbrQuestions] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  useEffect(() => {
    const inputElement = document.querySelector(".start input");
    console.log(inputElement);
    inputElement.focus();
  }, []);
  function submit(nbr) {
    if (nbr === "" || Number(nbr) < 1 || Number(nbr) > 15)
      return setErrorInput(true);
    return dispatch({
      type: "choosenmbrOfData",
      payload: Number(nbr),
    });
  }
  return (
    <div className="start">
      <h2>Welcome To React Quiz</h2>
      <h3>Choose Questions between 1 and 15?</h3>
      <input
        type="text"
        placeholder="Enter Number between 1 and 15"
        value={nmbrQuestions}
        onChange={(e) => {
          setNmbrQuestions(e.target.value);
          setErrorInput(false);
        }}
      />
      {errorInput === true && (
        <span className="errorInput">
          You are Choose {nmbrQuestions} Please choose number between 1 and 15
        </span>
      )}
      <button className="btn btn-ui" onClick={() => submit(nmbrQuestions)}>
        Choose
      </button>
    </div>
  );
}

export default Choose;
