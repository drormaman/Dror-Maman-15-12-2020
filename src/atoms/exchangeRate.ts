import { atom } from "recoil";

export const exchangeRateToIlsState = atom<number>({
	key: "exchangeRateToIlsState",
	default: 3.5
});
