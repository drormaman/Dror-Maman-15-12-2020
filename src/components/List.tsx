import React, { useState } from "react";
import { AppBar, Paper, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { ItemsList } from "./ItemsList";
import { StoresList } from "./StoresList";

interface ListProps {}

const TAB_VALUE_ITEMS = "items";
const TAB_VALUE_STORES = "stores";

export const List: React.FC<ListProps> = ({}) => {
	const [value, setValue] = useState("items");
	const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Paper>
			<TabContext value={value}>
				<AppBar position="static">
					<TabList onChange={handleChange}>
						<Tab label="Items" value={TAB_VALUE_ITEMS} />
						<Tab label="Stores" value={TAB_VALUE_STORES} />
					</TabList>
				</AppBar>
				<TabPanel value={TAB_VALUE_ITEMS}>
					<ItemsList />
				</TabPanel>
				<TabPanel value={TAB_VALUE_STORES}>
					<StoresList />
				</TabPanel>
			</TabContext>
		</Paper>
	);
};
