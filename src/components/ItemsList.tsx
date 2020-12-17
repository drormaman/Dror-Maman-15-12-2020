import React from "react";
import { useRecoilValue } from "recoil";
import { orderedItemsState, receivedItemsState } from "../atoms/Items";
import { EmptyListMessage } from "./EmptyListMessage";
import { ItemCard } from "./ItemCard";
import { StyledList } from "./styled/StyledListComponents";

interface ItemsListProps {
	received: boolean;
}

export const ItemsList: React.FC<ItemsListProps> = ({ received }) => {
	const itemsList = useRecoilValue(
		received ? receivedItemsState : orderedItemsState
	);
	return (
		<StyledList>
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
