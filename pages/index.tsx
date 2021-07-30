import { useState, useContext, useReducer } from "react";
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

const initialState = {error: false, message: ""};

function reducer(state, action) {
	switch (action.type) {
		case 'username error':
			return {error: true, message: "Please Fill Your User Name"};
		case 'password error':
			return {error: true, message: "Please Fill Your Password"};
		case 'difficulty error':
			return {error: true, message: "Please Select Difficulty Level"};
		case 'wrong password error':
			return {error: true, message: "The Password you have entered is wrong"};
		case 'no error':
			return {error: false, message: ""};
	}
}

function HomePage() {
	interface State {
		password: string;
		showPassword: boolean;
	}

	const ctx = useContext(QuizContext);
	const [difficulty, setDifficulty] = useState("");

	const [state, dispatch] = useReducer(reducer, initialState);
	//const [error, setError] = useState(false);
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
		if (!ctx.userName)
			dispatch({type: 'username error'});
		else if(!values.password)
			dispatch({type: 'password error'})
		else if(!difficulty)
			dispatch({type: 'difficulty error'})
		else if(values.password!== "Trivia")
			dispatch({type: 'wrong password error'});
		else {
			dispatch({type: 'no error'});
			router.push({
				pathname: "/quiz",
				query: { type: difficulty },
			});
		}
	};
	return (
		<>
		<div className={classes.content}>
			<div className={classes.settings}>
				<div className={classes.settings__select}>
					{state.error && <ErrorMessage>{state.message}</ErrorMessage>}
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
						{/*<ShowChartIcon/>*/}
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
							color="secondary"
							className={classes.button}
							onClick={handleReset}
							endIcon={<RotateRightIcon/>}
						>
							Reset
						</Button>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={handleSubmit}
						endIcon={<KeyboardArrowRightIcon/>}
					>
						Start Quiz
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
