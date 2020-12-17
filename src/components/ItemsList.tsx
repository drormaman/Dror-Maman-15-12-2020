import React from "react";
import { useRecoilValue } from "recoil";
import { fetchingErrorState } from "../atoms/exchangeRate";
import { orderedItemsState, receivedItemsState } from "../atoms/Items";
import { EmptyListMessage } from "./EmptyListMessage";
import { ItemCard } from "./ItemCard";
import { StyledList } from "./styled/StyledListComponents";
import { StyledErrorMessage } from "./styled/StyledNavBarComopnents";

interface ItemsListProps {
	received: boolean;
}

export const ItemsList: React.FC<ItemsListProps> = ({ received }) => {
	const itemsList = useRecoilValue(
		received ? receivedItemsState : orderedItemsState
	);
	const fetchingError = useRecoilValue(fetchingErrorState);
	return (
		<StyledList>
			{fetchingError && (
				<StyledErrorMessage variant="subtitle1">
					Somthing went wrong - Exchange rates are not up-to-date
				</StyledErrorMessage>
			)}
			{itemsList.length !== 0 ? (
				itemsList.map((item, i) => {
					return <ItemCard key={i} item={item} received={received} />;
				})
			) : (
				<EmptyListMessage />
			)}
		</StyledList>
	);
};
