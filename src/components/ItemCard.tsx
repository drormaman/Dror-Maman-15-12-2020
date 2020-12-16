import React from "react";
import { Item } from "../models";
import { useRecoilValue } from "recoil";
import { exchangeRateToIlsState } from "../atoms/exchangeRate";
import { Button, Card, Divider, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import styled from "styled-components";

interface ItemCardProps {
	item: Item;
}

const StyledItemCard = styled(Card)`
	padding: 16px;
	margin-bottom: 12px;
`;

const StyledCardHeader = styled.header`
	display: flex;
	justify-content: space-between;
`;

function numberWithThousandsCommas(price: number): string {
	const fixedPrice: string = `${price.toFixed(2)}`;
	return fixedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatDate(date: Date): string {
	const dd: string = date.getDate().toString().padStart(2, "0");
	const mm: string = (date.getMonth() + 1).toString().padStart(2, "0");
	const yyyy: string = date.getFullYear().toString();
	return `${dd}/${mm}/${yyyy}`;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
	const exchangeRateToILS = useRecoilValue(exchangeRateToIlsState);

	return (
		<StyledItemCard>
			<StyledCardHeader>
				<Typography gutterBottom={false} variant="h6">
					{item.itemName}
				</Typography>
				<Button
					variant="text"
					size="small"
					color="primary"
					startIcon={<CheckIcon fontSize="small" />}>
					Mark as received
				</Button>
			</StyledCardHeader>
			<Divider />
			<Typography variant="subtitle2">{item.onlineStore}</Typography>
			<Typography variant="subtitle1">
				{`Price: $${numberWithThousandsCommas(item.price)}`}
				<Typography
					variant="subtitle2"
					component="span">{` ( ₪${numberWithThousandsCommas(
					item.price * exchangeRateToILS
				)} )`}</Typography>
			</Typography>
			<Typography variant="subtitle1">{`Delivery EST date: ${formatDate(
				item.estimatedDelivery
			)}`}</Typography>
		</StyledItemCard>
	);
};
