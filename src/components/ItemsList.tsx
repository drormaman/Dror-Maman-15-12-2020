import React from "react";
import { useRecoilState } from "recoil";
import { itemsListState } from "../atoms/Items";
import { ItemCard } from "./ItemCard";

interface ItemsListProps {}

export const ItemsList: React.FC<ItemsListProps> = ({}) => {
	const [itemsList, setItemsList] = useRecoilState(itemsListState);
	return (
		<div>
			{itemsList.map((item, i) => {
				return <ItemCard key={i} item={item} />;
			})}
		</div>
	);
};
