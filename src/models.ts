export interface Item {
	itemName: string;
	onlineStore: string;
	price: number;
	estimatedDelivery: Date;
	received?: boolean;
}

export interface Store {
	storeName: string;
	numOfItems: number;
	sumOfItemsPrices: number;
}
