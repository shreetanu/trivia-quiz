import Link from "next/link";
import { Fragment } from "react";
import classes from "../../styles/result.module.css";

const ResultPage = () => {
  return (
    <div className={classes.result}>
      <h2 className="title">Your final score is : {2}</h2>
      <Link href="/">
        <button className={classes.button}>Let's Start Again</button>
      </Link>
    </div>
  );
};

export default ResultPage;
