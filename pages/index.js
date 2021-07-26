import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import ErrorMessage from "../components/ErrorMessage";
import classes from "../styles/index.module.css";
import Header from "../components/Header";
import Image from "next/image";
import QuizContext from "../store/quiz-context";

function HomePage() {
	const ctx = useContext(QuizContext);
	const [difficulty, setDifficulty] = useState("");
	const [error, setError] = useState(false);

	useEffect(() => {
		ctx.resetDetails();
	}, [ctx])

	const handleChange = text => {
		if (text) {
			ctx.updateUserName(text);
		} else {
			ctx.updateUserName("");
		}
	};
	const router = useRouter();
	let api = "";
	const handleSubmit = () => {
		if (!difficulty || !ctx.userName || difficulty === "select") {
			setError(true);
			return;
		} else {
			setError(false);
			//for test
			router.push({
				pathname: "/quiz",
				query: { type: difficulty },
			});
		}
	};
	return (
		<div className={classes.content}>
			<div className={classes.settings}>
				<div className={classes.settings__select}>
					<Header></Header>
					{error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
					<input
						placeholder='User Name'
						type='text'
						style={{ marginBottom: 25 }}
						className={classes.elements}
						id='name'
						value={ctx.userName}
						onChange={event => handleChange(event.target.value)}
					/>

					<select
						value={difficulty}
						className={classes.elements}
						style={{ marginBottom: 30 }}
						onChange={e => setDifficulty(e.target.value)}>
						<option key='select' value='select'>
							Difficulty Level
						</option>
						<option key='Easy' value='easy'>
							Easy
						</option>
						<option key='Medium' value='medium'>
							Medium
						</option>
						<option key='Hard' value='hard'>
							Hard
						</option>
					</select>

					<button className={classes.button} onClick={handleSubmit}>
						Start Quiz
					</button>
				</div>
			</div>
			<div className={classes.banner}>
				<Image
					src='/quiz.svg'
					width={720}
					height={480}
					alt='Person alongside board'
				/>
			</div>
		</div>
	);
}
export default HomePage;
