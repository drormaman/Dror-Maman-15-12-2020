import { Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useRecoilValue } from "recoil";
import { exchangeRateToIlsState } from "../atoms/exchangeRate";
import { totalSumOfOrderedProductsState } from "../atoms/Items";
import { numberWithThousandsCommas } from "../helpers";
import { StyledBottomBar } from "./styled/StyledListComponents";

interface MyOrdersBottomBarProps {}

export const MyOrdersBottomBar: React.FC<MyOrdersBottomBarProps> = () => {
	const sumPrice = useRecoilValue(totalSumOfOrderedProductsState);
	const exchangeRateToILS = useRecoilValue(exchangeRateToIlsState);

	return (
		<StyledBottomBar position="absolute" color="secondary">
			{/* <Toolbar> */}
			<Typography variant="subtitle1">
				{`Total Price: $${numberWithThousandsCommas(sumPrice)}`}
				<Typography variant="subtitle2" component="span">
					{` ( ₪${numberWithThousandsCommas(sumPrice * exchangeRateToILS)} )`}
				</Typography>
			</Typography>
			{/* </Toolbar> */}
		</StyledBottomBar>
	);
};
