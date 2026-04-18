import confetti from "canvas-confetti";

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  function handleAnswer(index) {
    dispatch({ type: "newAnswer", payload: index });

    if (index === question.correctOption) {
      confetti({ particleCount: 100, spread: 60, origin: { y: 0.8 } });
    }
  }

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""} `}
          key={option}
          disabled={hasAnswered}
          onClick={() => handleAnswer(index)}>
          <span className="tick-emoji">
            {hasAnswered
              ? index === question.correctOption
                ? "☑️"
                : index === answer
                  ? "❌"
                  : ""
              : ""}
          </span>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
