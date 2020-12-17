import { AppBar } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import React, { useState } from "react";
import { ItemsList } from "./ItemsList";
import { MyOrdersBottomBar } from "./MyOrdersBottomBar";
import { StoresList } from "./StoresList";
import {
	StyledContainer,
	StyledListContainer,
	StyledTab
} from "./styled/StyledListComponents";

const TAB_VALUE_ITEMS = "items";
const TAB_VALUE_STORES = "stores";

export const ReceivedItemsList: React.FC = () => {
	const [value, setValue] = useState("items");
	const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
		setValue(newValue);
	};
	return (
		<StyledContainer elevation={3}>
			<TabContext value={value}>
				<AppBar
					position="sticky"
					style={{ display: "flex", flexDirection: "row" }}>
					<TabList centered onChange={handleChange} style={{ flexGrow: 5 }}>
						<StyledTab label="Items" value={TAB_VALUE_ITEMS} />
						<StyledTab label="Stores" value={TAB_VALUE_STORES} />
					</TabList>
				</AppBar>
				<StyledListContainer>
					<TabPanel value={TAB_VALUE_ITEMS}>
						<ItemsList received={true} />
					</TabPanel>
					<TabPanel value={TAB_VALUE_STORES}>
						<StoresList received={true} />
					</TabPanel>
				</StyledListContainer>
			</TabContext>
			<MyOrdersBottomBar received={true} />
		</StyledContainer>
	);
};
