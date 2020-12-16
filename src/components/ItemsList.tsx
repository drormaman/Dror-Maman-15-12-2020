import React from "react";
import { useRecoilValue } from "recoil";
import { notReceivedItemsState } from "../atoms/Items";
import { ItemCard } from "./ItemCard";
import { StyledList } from "./styled/StyledList";

interface ItemsListProps {}

export const ItemsList: React.FC<ItemsListProps> = ({}) => {
	const itemsList = useRecoilValue(notReceivedItemsState);
	return (
		<StyledList>
			{itemsList.map((item, i) => {
				return <ItemCard key={i} item={item} />;
			})}
		</StyledList>
	);
};
