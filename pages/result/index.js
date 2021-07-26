import Link from "next/link";
import { useContext } from "react";
import classes from "../../styles/result.module.css";
import QuizContext from "../../store/quiz-context";
import { useRouter } from "next/router";
const ResultPage = () => {
  const ctx = useContext(QuizContext);
  const router =useRouter();
  if (process.browser){
		if(ctx.userName.length === 0)
		{
			router.push('/')
		}
		}
  return (
    <div className={classes.result}>
      <h2 className="title">Your final score is : {ctx.score}</h2>
      <Link href="/" passHref={true}>
        <button className={classes.button}>Start Again</button>
      </Link>
    </div>
  );
};

export default ResultPage;
