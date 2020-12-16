import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { exchangeRateToIlsState } from "../atoms/exchangeRate";

import { List } from "../components/List";
interface ItemsListPageProps {}

const GET_EXCHANGE_RATE_INTERVAL = 10000;

export const ItemsListPage: React.FC<ItemsListPageProps> = ({}) => {
	const [exchangeRateToILS, setExchangeRateToILS] = useRecoilState<number>(
		exchangeRateToIlsState
	);

	useEffect(() => {
		const intervalId = setInterval(async () => {
			const res = await fetch(
				"https://api.exchangeratesapi.io/latest?base=USD"
			);
			const { rates } = await res.json();
			if (rates["ILS"]) {
				setExchangeRateToILS(rates["ILS"]);
			}
		}, GET_EXCHANGE_RATE_INTERVAL);
		return () => clearInterval(intervalId);
	}, []);

	return <List />;
};
