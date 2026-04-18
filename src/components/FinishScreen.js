import { useEffect } from "react";
import confetti from "canvas-confetti";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "☺️";
  if (percentage > 0 && percentage < 50) emoji = "😐";
  if (percentage === 0) emoji = "🤦";

  useEffect(() => {
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 } });
  }, []);

  return (
    <>
      <div className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </div>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}>
        {" "}
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
