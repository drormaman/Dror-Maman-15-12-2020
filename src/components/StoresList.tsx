import React from "react";
import { useRecoilValue } from "recoil";
import { storesListState } from "../atoms/Items";
import { StoreCard } from "./StoreCard";
import { StyledList } from "./styled/StyledListComponents";

interface StoresListProps {}

export const StoresList: React.FC<StoresListProps> = ({}) => {
	const storesList = useRecoilValue(storesListState);

	return (
		<StyledList>
			{storesList.map((store, i) => {
				return <StoreCard key={i} store={store} />;
			})}
		</StyledList>
	);
};
