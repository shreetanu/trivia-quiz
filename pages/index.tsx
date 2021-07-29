import { useState, useContext } from "react";
import { useRouter } from "next/router";
import ErrorMessage from "../components/ErrorMessage";
import React from 'react';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Image from "next/image";
import QuizContext from "../store/quiz-context";
import classes from '../styles/index.module.css'
import RotateRightIcon from '@material-ui/icons/RotateRight'


function HomePage() {
	interface State {
		password: string;
		showPassword: boolean;
	}

	const ctx = useContext(QuizContext);
	const [difficulty, setDifficulty] = useState("");
	const [error, setError] = useState(false);
	const handleChange = (text: string) => {

		if (text) {
			ctx.updateUserName(text);
		} else {
			ctx.updateUserName("");
		}
	};
	const router = useRouter();
	const [values, setValues] = React.useState<State>({
		password: '',
		showPassword: false,
	});
	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};
	const handleChangepass = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value });
	};
	const handleReset=()=>{
		setDifficulty("");
		setValues({
			password:'',
			showPassword: false,

		});
		ctx.updateUserName("");

	}
	const handleSubmit = () => {
		if (!difficulty || !ctx.userName || difficulty === "select" || !values.password) {
			setError(true);
			return;
		} else {

			setError(false);
			//for test
			if( values.password!== "Trivia")
			{

			}
			else{
			router.push({
				pathname: "/quiz",
				query: { type: difficulty },
			});
		}}
	};
	return (
		<>

		<div className={classes.content}>
			<div className={classes.settings}>
				<div className={classes.settings__select}>
					{error && <ErrorMessage> Please Fill all the fields</ErrorMessage>}
					<Input
						placeholder='User Name'
						id='name'
						value={ctx.userName}
						onChange={event => handleChange(event.target.value)}
						startAdornment={
							<InputAdornment position="start">
								<PersonOutlineIcon />
							</InputAdornment>
						}
					/>

					<Input
						id="standard-adornment-password"
						placeholder={"Password"}
						type={values.showPassword ? 'text' : 'password'}
						value={values.password}
						onChange={handleChangepass('password')}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}

								>
									{values.showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
					/>



					<NativeSelect
						/*className={classes.selectEmpty}*/
						value={difficulty}
						onChange={(event) => setDifficulty(event.target.value)}
						inputProps={{ 'aria-label': 'age' }}>
						<ShowChartIcon/>
						<option value="" disabled>
							Difficulty
						</option>
						<option key='Easy' value='easy'>Easy</option>
						<option key='Medium' value='medium'>Medium</option>
						<option key='Hard' value='hard'>Hard</option>
					</NativeSelect>
<div style={{display:'flex' , justifyContent:'space-between'}} >
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={handleSubmit}
						endIcon={<KeyboardArrowRightIcon/>}
					>
						Start Quiz
					</Button>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={handleReset}
					>
						<RotateRightIcon/>
					</Button>
</div>
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

		</>
	);
}
export default HomePage;
