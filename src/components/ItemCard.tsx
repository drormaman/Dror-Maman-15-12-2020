import React from "react";
import { Item } from "../models";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { exchangeRateToIlsState } from "../atoms/exchangeRate";
import { itemsListState } from "../atoms/Items";
import { Button, Card, Divider, Typography } from "@material-ui/core";
import { formatDate, numberWithThousandsCommas } from "../helpers";
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

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
	const exchangeRateToILS = useRecoilValue(exchangeRateToIlsState);
	const setItemsList = useSetRecoilState(itemsListState);

	function handleReceived(e: React.MouseEvent) {
		setItemsList(prevItems => {
			const updatedItems = prevItems.map(prevItem => {
				if (item.itemName === prevItem.itemName) {
					return {
						...prevItem,
						received: true
					};
				}
				return prevItem;
			});
			return updatedItems;
		});
	}

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
					startIcon={<CheckIcon fontSize="small" />}
					onClick={handleReceived}>
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
