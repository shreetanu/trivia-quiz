import router from "next/router";
import React, { useState, useContext } from "react";
import styles from "./question.module.css";
import QuizContext from "../../store/quiz-context";
import { IQuestion } from "../../services/interface";
import { Box, Button, Container, Typography } from "@material-ui/core";
import ErrorMessage from "../ErrorMessage";

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
	setCurrQues: (a: number) => void;
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

	const handleSelect = (i: string) => {
		if ((selected === i && selected === correct) || i === correct)
			return "select";
		else if (selected === i && selected !== correct) return "wrong";
	};

	const handleCheck = (i: React.SetStateAction<string>) => {
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
		<Container fixed>
			<Typography style={{ textAlign: 'center' }} variant='h2'>Question {currQues + 1}</Typography>
			<Box className={styles.singleQuestion}>
				<Typography variant='h5'>
					{decoder(questions[currQues].question)}
				</Typography>
				<Box className={styles.optionsWrapper}>
					{error && <ErrorMessage>{error}</ErrorMessage>}
					<Box className={styles.options}>
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
					</Box>
				</Box>
				<Box className={styles.controls}>
					<Button
						variant='outlined'
						color='secondary'
						size='large'
						onClick={handleQuit}>
						Quit
					</Button>
					<Button
						variant='contained'
						color='primary'
						size='large'
						onClick={handleNext}>
						{currQues >= 14 ? "Submit" : "Next Question"}
					</Button>
				</Box>
			</Box>
		</Container>
	);
}

export default Question;
