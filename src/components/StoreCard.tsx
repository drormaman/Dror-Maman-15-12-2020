import { Divider, Typography } from "@material-ui/core";
import React from "react";
import { Store } from "../models";
import { exchangeRateToIlsState } from "../atoms/exchangeRate";
import { useRecoilValue } from "recoil";
import {
	StyledItemCard,
	StyledCardHeader
} from "./styled/StyledCardComponents";
import { numberWithThousandsCommas } from "../helpers";
import StorefrontIcon from "@material-ui/icons/Storefront";

interface StoreCardProps {
	store: Store;
}

export const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
	const exchangeRateToILS = useRecoilValue(exchangeRateToIlsState);

	return (
		<StyledItemCard>
			<StyledCardHeader>
				<Typography gutterBottom={false} variant="h6">
					{store.storeName}
				</Typography>
				<StorefrontIcon />
			</StyledCardHeader>
			<Divider />
			<Typography variant="subtitle1">{`Number of products: ${store.numOfItems}`}</Typography>
			<Typography variant="subtitle1">
				{`Total products price: $${numberWithThousandsCommas(
					store.sumOfItemsPrices
				)}`}
				<Typography
					variant="subtitle2"
					component="span">{` ( ₪${numberWithThousandsCommas(
					store.sumOfItemsPrices * exchangeRateToILS
				)} )`}</Typography>
			</Typography>
		</StyledItemCard>
	);
};
