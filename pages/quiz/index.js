import axios from "axios";
import { Fragment, useState, useEffect, useContext } from "react";
import classes from "../../styles/quiz.module.css";
import Question from "../../components/question/question";
import { useRouter } from "next/router";
import QuizContext from "../../store/quiz-context";

const QuizPage = () => {
	const ctx = useContext(QuizContext);
	const [options, setOptions] = useState();
	const [currQuestion, setCurrQuestion] = useState(0);
	const [questions, setQuestions] = useState([]);

	const router = useRouter();
	const { type } = router.query;

	useEffect(() => {
		const api =
			"https://opentdb.com/api.php?amount=15&category=18&difficulty=" +
			type +
			"&type=multiple";
		const fetchData = async () => {
			const { data } = await axios.get(api);
			setQuestions(data.results);
			// console.log(questions);
		};
		fetchData();
	}, [type]);

	useEffect(() => {
		setOptions(
			questions.length &&
				handleShuffle([
					questions[currQuestion]?.correct_answer,
					...questions[currQuestion]?.incorrect_answers,
				])
		);
	}, [questions, currQuestion]);

	// console.log(questions);

	const handleShuffle = choices => {
		return choices.sort(() => Math.random() - 0.5);
	};

	return (
		<div className={classes.quiz}>
			<h2 className={classes.title}>Welcome {ctx.userName}!</h2>

			{questions.length !== 0 ? (
				<Fragment>
					<div className={classes.info}>
						<div>Quiz</div>
						<div>Score : {ctx.score}</div>
					</div>
					<Question
						currQues={currQuestion}
						setCurrQues={setCurrQuestion}
						questions={questions}
						options={options}
						correct={questions[currQuestion]?.correct_answer}
						setQuestions={setQuestions}
					/>
				</Fragment>
			) : (
				<div>Loading!!!</div>
			)}
		</div>
	);
};

export default QuizPage;
