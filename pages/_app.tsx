import "../styles/globals.css";
import { QuizContextProvider } from "../store/quiz-context";
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import type { AppProps} from 'next/app'
import Header from '../components/Header'


function MyApp({ Component, pageProps }:AppProps) {

	const queryClient = new QueryClient();
	return <QueryClientProvider client={queryClient}>
			<Header />
			<QuizContextProvider>
				<Component {...pageProps} />
			</QuizContextProvider>
			</QueryClientProvider>;
}
export default MyApp;


