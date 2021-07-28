import router from "next/router";
import React, { useState, useContext } from "react";
import styles from "./question.module.css";
import QuizContext from "../../store/quiz-context";
import { IQuestion } from "../../services/interface";

const decoder = text => {
	const parser = new DOMParser();
	const decodedString = parser.parseFromString(
		`<!doctype html><body>${text}`,
		"text/html"
	).body.textContent;
	return decodedString;
};

interface IQuestionProps {
	currQues: number;
	setCurrQues: (a:number) => void;
	questions: IQuestion[];
	options: string[];
	correct: string;
}

function Question({
	currQues,
	setCurrQues,
	questions,
	options,
	correct,
}: IQuestionProps) {
	const ctx = useContext(QuizContext);
	const [selected, setSelected] = useState("");
	const [error, setError] = useState("");

	const handleSelect = i => {
		if ((selected === i && selected === correct) || i == correct)
			return "select";
		else return "wrong";
	};

	const handleCheck = i => {
		setSelected(i);
		if (i === correct) ctx.updateScore();
		setError("");
	};

	const handleNext = () => {
		if (currQues >= 14) router.push("/result");
		else if (selected) {
			setCurrQues(currQues + 1);
			setSelected("");
		} else setError("Please select a option");
	};

	const handleQuit = () => {
		ctx.resetDetails();
		router.push("/");
	};

	return (
		<div className={styles.question}>
			<h1>Question {currQues + 1}</h1>
			<div className={styles.singleQuestion}>
				<h2>{decoder(questions[currQues].question)}</h2>
				<div className={styles.optionsWrapper}>
					{error && <p className={styles.error}>{error}</p>}
					<div className={styles.options}>
						{options &&
							options.map(option => (
								<button
									className={`${styles.singleOption}  ${
										selected && styles[handleSelect(option)]
									}`}
									key={option}
									onClick={() => handleCheck(option)}
									disabled={selected ? true : false}>
									{decoder(option)}
								</button>
							))}
					</div>
				</div>
				<div className={styles.controls}>
					<button onClick={handleQuit}>Quit</button>
					<button onClick={handleNext}>
						{currQues >= 14 ? "Submit" : "Next Question"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Question;
