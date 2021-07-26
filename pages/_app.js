import "../styles/globals.css";
import { QuizContextProvider } from "../store/quiz-context";

function MyApp({ Component, pageProps }) {
	return <QuizContextProvider><Component {...pageProps} /></QuizContextProvider>;
}

export default MyApp;
