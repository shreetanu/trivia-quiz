import "../styles/globals.css";
import { QuizContextProvider } from "../store/quiz-context";
import type { AppProps} from 'next/app'


function MyApp({ Component, pageProps }:AppProps) {
	return <QuizContextProvider><Component {...pageProps} /></QuizContextProvider>;
}

export default MyApp;

