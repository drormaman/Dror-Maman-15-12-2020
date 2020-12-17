import React from "react";
import { useRecoilValue } from "recoil";
import {
	storesOrderedListState,
	storesReceivedListState
} from "../atoms/Items";
import { EmptyListMessage } from "./EmptyListMessage";
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
			{storesList.length !== 0 ? (
				storesList.map((store, i) => {
					return <StoreCard key={i} store={store} />;
				})
			) : (
				<EmptyListMessage />
			)}
		</StyledList>
	);
};
