import router from "next/router";
import React, { useState, useContext } from "react";
import styles from "./question.module.css";
import QuizContext from "../../store/quiz-context";

function Question({
	currQues,
	setCurrQues,
	questions,
	options,
	correct,
	setQuestions,
}) {

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
		setError(false);
	};

	const handleNext = () => {
		if (currQues >= 14) router.push('/result');
		else if (selected) {
			setCurrQues(currQues + 1);
			setSelected();
		} else setError("Please select a option");
	};

	const handleQuit = () => {
		router.push("/");
	};

	// console.log(options);
	return (
		<div className={styles.question}>
			<h1>Question {currQues + 1}</h1>
			<div className={styles.singleQuestion}>
				<h2>{questions[currQues].question}</h2>
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
									disabled={selected}>
									{option}
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
