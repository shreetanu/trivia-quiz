import "../styles/globals.css";
import { QuizContextProvider } from "../store/quiz-context";
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import type { AppProps} from 'next/app'
function MyApp({ Component, pageProps }:AppProps) {

	const queryClient = new QueryClient();
	return <QueryClientProvider client={queryClient}>
			<QuizContextProvider>
				<Component {...pageProps} />
			</QuizContextProvider>
			<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>;
}

export default MyApp;




