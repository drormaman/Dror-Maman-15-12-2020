import React, { useEffect, useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
	exchangeRateToIlsState,
	fetchingErrorState
} from "./atoms/exchangeRate";
import { NavBar } from "./components/NavBar";
import { getCurrentExhangeRate } from "./helpers";
import { HomePage } from "./pages/HomePage";
import { MyOrdersPage } from "./pages/MyOrdersPage";
import { ReceivedItemsPage } from "./pages/ReceivedItemsPage";

const Main = styled.main`
	padding-top: 64px;
	@media (max-width: 650px) {
		padding-top: 56px;
	}
`;
const EXCHANGE_RATE_INTERVAL = 10000;

function App() {
	const setExchangeRateToILS = useSetRecoilState(exchangeRateToIlsState);
	const setFetchingError = useSetRecoilState(fetchingErrorState);

	async function handleSetExchangeRates() {
		try {
			const rate = await getCurrentExhangeRate("ILS");
			setExchangeRateToILS(rate);
			setFetchingError(false);
		} catch (error) {
			setFetchingError(true);
		}
	}

	useEffect(() => {
		handleSetExchangeRates();
		const intervalId = setInterval(
			handleSetExchangeRates,
			EXCHANGE_RATE_INTERVAL
		);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<HashRouter>
			<NavBar />
			<Main>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/list" component={MyOrdersPage} />
					<Route exact path="/received" component={ReceivedItemsPage} />
				</Switch>
			</Main>
		</HashRouter>
	);
}

export default App;
