import Link from "next/link";
import { useContext } from "react";
import classes from "../../styles/result.module.css";
import QuizContext from "../../store/quiz-context";
import { useRouter } from "next/router";
import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';
import RotateRightIcon from '@material-ui/icons/RotateRight'


const ResultPage = () => {
	const ctx = useContext(QuizContext);
	const router = useRouter();
	if (process.browser) {
		if (ctx.userName.length === 0) {
			router.push("/");
		}
	}
	return (
		<div className={classes.result}>
			<h1 className='title'>Your final score is : {ctx.score}</h1>
			<Link href='/' passHref={true}>
			<Button
         variant="contained"
        color="primary"
		size="large"
        startIcon={<RotateRightIcon />}
		 onClick = {()=> ctx.resetDetails()}
      >
        Start Again
      </Button>
			</Link>
		</div>
	);
};

export default ResultPage;
