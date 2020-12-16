import React from "react";
import { useRecoilValue } from "recoil";
import { notReceivedItemsState } from "../atoms/Items";
import { ItemCard } from "./ItemCard";

interface ItemsListProps {}

export const ItemsList: React.FC<ItemsListProps> = ({}) => {
	const itemsList = useRecoilValue(notReceivedItemsState);
	return (
		<div>
			{itemsList.map((item, i) => {
				return <ItemCard key={i} item={item} />;
			})}
		</div>
	);
};
