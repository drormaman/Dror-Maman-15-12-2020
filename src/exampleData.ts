import { Item } from "./models";

const mockData: Item[] = [
	{
		itemName: "iPhone 12",
		onlineStore: "Apple Store",
		price: 799,
		estimatedDelivery: new Date("1/12/2021"),
		received: false
	},
	{
		itemName: "iPhone 12 Pro",
		onlineStore: "Apple Store",
		price: 999,
		estimatedDelivery: new Date("1/12/2021"),
		received: false
	},
	{
		itemName: "iPhone 12 Pro Max",
		onlineStore: "Apple Store",
		price: 1099,
		estimatedDelivery: new Date("1/12/2021"),
		received: false
	},
	{
		itemName: "iPhone 12 Mini",
		onlineStore: "Apple Store",
		price: 699,
		estimatedDelivery: new Date("1/12/2021"),
		received: false
	},
	{
		itemName: "Nest Mini",
		onlineStore: "Google Store",
		price: 49,
		estimatedDelivery: new Date("12/11/2021"),
		received: false
	},
	{
		itemName: "Nest Audio",
		onlineStore: "Google Store",
		price: 99,
		estimatedDelivery: new Date("1/12/2021"),
		received: false
	},
	{
		itemName: "Pixel 5",
		onlineStore: "Google Store",
		price: 699,
		estimatedDelivery: new Date("1/12/2021"),
		received: false
	},
	{
		itemName: "Chromecast",
		onlineStore: "Google Store",
		price: 49,
		estimatedDelivery: new Date("1/12/2021"),
		received: false
	},
	{
		itemName: "Kindle 10th Gen",
		onlineStore: "Amazon",
		price: 79,
		estimatedDelivery: new Date("1/12/2021"),
		received: false
	},
	{
		itemName: "Fire TV Stick",
		onlineStore: "Amazon",
		price: 39,
		estimatedDelivery: new Date("12/11/2021"),
		received: false
	},
	{
		itemName: "Echo Dot",
		onlineStore: "Amazon",
		price: 29,
		estimatedDelivery: new Date("12/11/2021"),
		received: false
	}
];

export default mockData;
