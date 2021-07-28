import "../styles/globals.css";
import { QuizContextProvider } from "../store/quiz-context";
import React from "react";

interface props{
	Component :any
	pageProps: any
}

function MyApp({ Component, pageProps }:props) {
	return <QuizContextProvider><Component {...pageProps} /></QuizContextProvider>;
}

export default MyApp;
