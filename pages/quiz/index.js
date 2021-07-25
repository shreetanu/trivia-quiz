import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import classes from "../../styles/quiz.module.css";
import { useRouter } from "next/router";

const QuizPage = () => {
	const [options, setOptions] = useState();
	const [currQuestion, setCurrQuestion] = useState(0);
	const [questions, setQuestion] = useState([]);

	const router = useRouter();
	const { type } = router.query;
	useEffect(() => {
		const api =
			"https://opentdb.com/api.php?amount=15&category=18&difficulty=" +
			type +
			"&type=multiple";
		const fetchData = async () => {
			const { data } = await axios.get(api);
			setQuestion(data.results);
			console.log(questions);
			setOptions(
				questions.length &&
					handleShuffle([
						questions[currQuestion]?.correct_answer,
						...questions[currQuestion]?.incorrect_answers,
					])
			);
		};
		fetchData();
	}, [questions, options, type, currQuestion]);

	// console.log(questions);

	const handleShuffle = choices => {
		return choices.sort(() => Math.random() - 0.5);
	};

	return (
		<div className={classes.quiz}>
			<h2 className={classes.title}>Welcome Mohit!</h2>

			{questions.length !== 0 ? (
				<Fragment>
					<div className={classes.info}>
						<div>Quizs</div>
						<div>Score : 100</div>
					</div>
					{/* <Question
            currQues={currQuestion}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            setQuestions={setQuestions}
          /> */}
				</Fragment>
			) : (
				<div>Loading!!!</div>
			)}
		</div>
	);
};

export default QuizPage;
