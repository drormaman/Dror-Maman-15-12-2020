import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { storesListState } from "../atoms/Items";
interface StoresListProps {}

export const StoresList: React.FC<StoresListProps> = ({}) => {
	const storesList = useRecoilValue(storesListState);

	return (
		<ul>
			{storesList.map((store, i) => {
				return (
					<li key={i}>
						<h5>{store.storeName}</h5>
						<div>{store.sumOfItemsPrices}</div>
						<div>{store.numOfItems}</div>
					</li>
				);
			})}
		</ul>
	);
};
