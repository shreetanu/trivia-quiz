import axios from "axios";
import { Fragment, useState, useEffect, useContext } from "react";
import classes from "../../styles/quiz.module.css";
import Question from "../../components/question/question";
import { useRouter } from "next/router";
import QuizContext from "../../store/quiz-context";
import Header from "../../components/Header";
import { IQuestion } from "../../services/interface";
import {useQuery} from "react-query";
import {getQuestions} from "../../services/trivia";

const QuizPage = () => {
	
	const ctx = useContext(QuizContext);

	const [options, setOptions] = useState();
	const [currQuestion, setCurrQuestion] = useState(0);

	const router = useRouter();
	if (process.browser){
		if(ctx.userName.length === 0)
		{
			router.replace('/')
		}
		}
	
	const { type } = router.query;

	const {data: questions=[], isLoading, isFetching} = useQuery("questions", ()=>getQuestions(type as string))

	useEffect(() => {
		setOptions(
			questions.length &&
				handleShuffle([
					questions[currQuestion].correct_answer,
					...questions[currQuestion].incorrect_answers,
				])
		);
	}, [questions, currQuestion]);

	// console.log(questions);

	const handleShuffle = (choices :string[]) => {
		return choices.sort(() => Math.random() - 0.5);
	};

	if(isLoading){
		return <h4>Loading</h4>;
	}

	return (

		<div className={classes.quiz}>
			<h2 className={classes.title}>Welcome {ctx.userName}!</h2>

			{questions.length !== 0 ? (
				<Fragment>
					<div className={classes.info}>
						
						<h3 style={{width:'100%' , textAlign: "center", padding:'0', margin: '0'}}>Score : {ctx.score}</h3>
					</div>
					<Question
						currQues={currQuestion}
						setCurrQues={setCurrQuestion}
						questions={questions}
						options={options}
						correct={questions[currQuestion]?.correct_answer}
					/>
				</Fragment>
			) : (
				<div>Loading!!!</div>
			)}
		</div>
	);
};

export default QuizPage;
