import { selectActiveOptions } from "@/store/selectors";
import { useSelector } from "react-redux";
import { musicAnswers, snackAnswers, drinkAnswers } from "./answersList";

export const ActivityAnswers = () => {
  const activeOptions = useSelector(selectActiveOptions);

  return (
    <div>
      {activeOptions.map((option) => {
        return <div key={option}>{option}</div>;
      })}
    </div>
  );
};
