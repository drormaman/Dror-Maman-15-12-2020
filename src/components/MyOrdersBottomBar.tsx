import { Typography } from "@material-ui/core";
import React from "react";
import { useRecoilValue } from "recoil";
import { exchangeRateToIlsState } from "../atoms/exchangeRate";
import {
	totalSumOfOrderedItemsState,
	totalSumOfReceivedItemsState
} from "../atoms/Items";
import { numberWithThousandsCommas } from "../helpers";
import { StyledBottomBar } from "./styled/StyledListComponents";

interface MyOrdersBottomBarProps {
	received: boolean;
}

export const MyOrdersBottomBar: React.FC<MyOrdersBottomBarProps> = ({
	received
}) => {
	const sumPrice = useRecoilValue(
		received ? totalSumOfReceivedItemsState : totalSumOfOrderedItemsState
	);
	const exchangeRateToILS = useRecoilValue(exchangeRateToIlsState);

	return (
		<StyledBottomBar position="absolute" color="secondary">
			<Typography variant="subtitle1">
				{`Total Price: $${numberWithThousandsCommas(sumPrice)}`}
				<Typography variant="subtitle2" component="span">
					{` ( ₪${numberWithThousandsCommas(sumPrice * exchangeRateToILS)} )`}
				</Typography>
			</Typography>
		</StyledBottomBar>
	);
};
