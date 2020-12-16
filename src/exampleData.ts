import { Item } from "./models";

const mockData: Item[] = [
	{
		itemName: "iPhone 12",
		onlineStore: "Apple Store",
		price: 799,
		estimatedDelivery: new Date("1/12/2021")
	},
	{
		itemName: "iPhone 12 Pro",
		onlineStore: "Apple Store",
		price: 999,
		estimatedDelivery: new Date("1/12/2021")
	},
	{
		itemName: "iPhone 12 Pro Max",
		onlineStore: "Apple Store",
		price: 1099,
		estimatedDelivery: new Date("1/12/2021")
	},
	{
		itemName: "iPhone 12 Mini",
		onlineStore: "Apple Store",
		price: 699,
		estimatedDelivery: new Date("1/12/2021")
	},
	{
		itemName: "Nest Mini",
		onlineStore: "Google Store",
		price: 49,
		estimatedDelivery: new Date("12/11/2021")
	}
];

export default mockData;
