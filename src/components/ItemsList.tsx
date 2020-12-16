import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { itemsListState } from "../atoms/Items";

interface ItemsListProps {}

export const ItemsList: React.FC<ItemsListProps> = ({}) => {
	const [itemsList, setItemsList] = useRecoilState(itemsListState);
	return (
		<ul>
			{itemsList.map((item, i) => {
				return (
					<li key={i}>
						<h5>{item.itemName}</h5>
						<div>{item.price}</div>
						<div>{item.onlineStore}</div>
						<div>{item.estimatedDelivery.toDateString()}</div>
					</li>
				);
			})}
		</ul>
	);
};
