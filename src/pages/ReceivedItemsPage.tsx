import React from "react";
import { ReceivedItemsList } from "../components/ReceivedItemsList";

interface ReceivedItemsPageProps {}

export const ReceivedItemsPage: React.FC<ReceivedItemsPageProps> = () => {
	return <ReceivedItemsList />;
};
