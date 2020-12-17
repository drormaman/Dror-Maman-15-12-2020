import React, { useState } from "react";
import { AppBar, IconButton, Tooltip } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { ItemsList } from "./ItemsList";
import { StoresList } from "./StoresList";
import {
	StyledContainer,
	StyledListContainer,
	StyledTab
} from "./styled/StyledListComponents";
import AddIcon from "@material-ui/icons/Add";
import { AddItemModal } from "./AddItemModal";
import { MyOrdersBottomBar } from "./MyOrdersBottomBar";

const TAB_VALUE_ITEMS = "items";
const TAB_VALUE_STORES = "stores";

export const MyOrdersList: React.FC = () => {
	const [openModal, setOpenModal] = useState(false);
	const [value, setValue] = useState("items");
	const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
		setValue(newValue);
	};
	function handleModalClose() {
		setOpenModal(false);
	}
	function handleModalOpen() {
		setOpenModal(true);
	}

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
					<Tooltip arrow title="Add Item" style={{ flexGrow: 1 }}>
						<IconButton color="inherit" onClick={handleModalOpen}>
							<AddIcon />
						</IconButton>
					</Tooltip>
				</AppBar>
				<StyledListContainer>
					<TabPanel value={TAB_VALUE_ITEMS}>
						<ItemsList received={false} />
					</TabPanel>
					<TabPanel value={TAB_VALUE_STORES}>
						<StoresList received={false} />
					</TabPanel>
				</StyledListContainer>
			</TabContext>
			<MyOrdersBottomBar received={false} />
			<AddItemModal open={openModal} handleClose={handleModalClose} />
		</StyledContainer>
	);
};
