import "../styles/globals.css";
import { QuizContextProvider } from "../store/quiz-context";
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import type { AppProps} from 'next/app'
import React from "react";
import Header from '../components/Header'
import Head from 'next/head';

function MyApp({ Component, pageProps }:AppProps) {

	const queryClient = new QueryClient();
	return <>
		<Head>
			<title> Trivia Quiz </title>
		</Head>
		<QueryClientProvider client={queryClient}>
			<Header />
			<QuizContextProvider>
				<Component {...pageProps} />
			</QuizContextProvider>
			</QueryClientProvider>
	</>
}
export default MyApp;


