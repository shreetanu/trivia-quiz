import Link from "next/link";
import { useContext } from "react";
import classes from "../../styles/result.module.css";
import QuizContext from "../../store/quiz-context";
const ResultPage = () => {
  const ctx = useContext(QuizContext);
  return (
    <div className={classes.result}>
      <h2 className="title">Your final score is : {ctx.score}</h2>
      <Link href="/">
        <button className={classes.button}>Let's Start Again</button>
      </Link>
    </div>
  );
};

export default ResultPage;
