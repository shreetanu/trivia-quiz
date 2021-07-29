import "../styles/globals.css";
import { QuizContextProvider } from "../store/quiz-context";
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import type { AppProps} from 'next/app'
import React from "react";
import Footer from "../components/Footer";
import Header from '../components/Header'

function MyApp({ Component, pageProps }:AppProps) {

	const queryClient = new QueryClient();
	return <QueryClientProvider client={queryClient}>
			<Header />
			<QuizContextProvider>

				<Component {...pageProps} />
				<Footer/>
			</QuizContextProvider>
			</QueryClientProvider>;
}
export default MyApp;


