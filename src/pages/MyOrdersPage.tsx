import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { exchangeRateToIlsState } from "../atoms/exchangeRate";
import { MyOrdersList } from "../components/MyOrdersList";
interface MyOrdersPageProps {}

const GET_EXCHANGE_RATE_INTERVAL = 10000;

export const MyOrdersPage: React.FC<MyOrdersPageProps> = ({}) => {
	const setExchangeRateToILS = useSetRecoilState<number>(
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

	return <MyOrdersList />;
};
