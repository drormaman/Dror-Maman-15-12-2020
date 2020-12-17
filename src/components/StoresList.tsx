import React from "react";
import { useRecoilValue } from "recoil";
import {
	storesOrderedListState,
	storesReceivedListState
} from "../atoms/Items";
import { StoreCard } from "./StoreCard";
import { StyledList } from "./styled/StyledListComponents";

interface StoresListProps {
	received: boolean;
}

export const StoresList: React.FC<StoresListProps> = ({ received }) => {
	const storesList = useRecoilValue(
		received ? storesReceivedListState : storesOrderedListState
	);

	return (
		<StyledList>
			{storesList.map((store, i) => {
				return <StoreCard key={i} store={store} />;
			})}
		</StyledList>
	);
};
