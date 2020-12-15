import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { itemsListState } from "../atoms/ItemAtom";
interface ItemsListPageProps {}

export const ItemsListPage: React.FC<ItemsListPageProps> = ({}) => {
	const [itemsList, setItemsList] = useRecoilState(itemsListState);
	return (
		<div>
			<ul>
				{itemsList.map((item, i) => {
					return (
						<li key={i}>
							<h5>{item.itemName}</h5>
							<div>{item.price}</div>
							<div>{item.onlineStore}</div>
							<div>{item.estimatedDelivery.toDateString}</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
