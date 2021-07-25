import React, { useState } from "react";
import styles from "./question.module.css";

function Question({
	currQues,
	setCurrQues,
	questions,
	options,
	correct,
	setScore,
	setQuestions,
}) {
	const [selected, setSelected] = useState("");
	const [error, setError] = useState("");

	const handleSelect = i => {
		if ((selected === i && selected === correct) || i == correct)
			return "select";
		else return "wrong";
	};

	const handleCheck = i => {
		setSelected(i);
		if (i === correct) setScore(score + 1);
		setError(false);
	};

	const handleNext = () => {
		if (currQues > 8) currQues;
		else if (selected) {
			setCurrQues(currQues + 1);
			setSelected();
		} else setError("Please select a option");
	};

	const handleQuit = () => {
		setCurrQues(0);
		setQuestions();
	};
	return (
		<div className={styles.question}>
			<h1>Question {currQues + 1}</h1>
			<div className={styles.singleQuestion}>
				<h2>{questions[currQues].question}</h2>
				<div className={styles.options}>
					{error && <p>{error}</p>}
					{options &&
						options.map(i => {
							<button
								className={`${styles.singleOption}  ${selected && styles[handleSelect(i)]}`}
								key={i}
								onClick={() => handleCheck(i)}
								disabled={selected}>
								{i}
							</button>;
						})}
				</div>
				<div className={styles.control}>
					<button onClick={handleQuit}>Quit</button>
					<button onClick={handleNext}>
						{currQues > 20 ? "Submit" : "Next Question"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Question;
