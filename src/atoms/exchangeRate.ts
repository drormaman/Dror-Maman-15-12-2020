import { atom } from "recoil";

export const exchangeRateToIlsState = atom<number>({
	key: "exchangeRateToIlsState",
	default: 3.25
});

export const fetchingErrorState = atom<boolean>({
	key: "fetchingErrorState",
	default: true
});
