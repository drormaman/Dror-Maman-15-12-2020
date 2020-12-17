import { atom, selector } from "recoil";
import mockData from "../exampleData";
import { Item, Store } from "../models";

export const itemsListState = atom<Item[]>({
	key: "itemsListState",
	default: mockData
});

export const receivedItemsState = selector<Item[]>({
	key: "receivedItemsState",
	get: ({ get }) => {
		const items = get(itemsListState);
		const received = items
			.filter(item => item.received)
			.sort(
				(a, b) => b.estimatedDelivery.getTime() - a.estimatedDelivery.getTime()
			);
		return received;
	}
});

export const totalSumOfReceivedProductsState = selector<number>({
	key: "totalSumOfReceivedProductsState",
	get: ({ get }) => {
		const receivedProducts = get(receivedItemsState);
		const sumPrices: number = receivedProducts.reduce((sum, prod) => {
			return sum + prod.price;
		}, 0);
		return sumPrices;
	}
});

export const notReceivedItemsState = selector<Item[]>({
	key: "notReceivedItemsState",
	get: ({ get }) => {
		const items = get(itemsListState);
		const notReceived = items
			.filter(item => !item.received)
			.sort(
				(a, b) => a.estimatedDelivery.getTime() - b.estimatedDelivery.getTime()
			);
		return notReceived;
	}
});

export const totalSumOfOrderedProductsState = selector<number>({
	key: "totalSumOfOrderedProductsState",
	get: ({ get }) => {
		const unreceivedProducts = get(notReceivedItemsState);
		const sumPrices: number = unreceivedProducts.reduce((sum, prod) => {
			return sum + prod.price;
		}, 0);
		return sumPrices;
	}
});

interface ReduceStoreObj {
	[key: string]: Store;
}

export const storesListState = selector<Store[]>({
	key: "storesListState",
	get: ({ get }) => {
		const items = get(itemsListState);
		const storesObj: ReduceStoreObj = {};
		const stores: ReduceStoreObj = items.reduce((storesObj, item: Item) => {
			if (!storesObj[item.onlineStore]) {
				storesObj[item.onlineStore] = {
					storeName: item.onlineStore,
					numOfItems: 1,
					sumOfItemsPrices: item.price
				};
			} else {
				const store: Store = storesObj[item.onlineStore];
				storesObj[item.onlineStore] = {
					...store,
					numOfItems: store.numOfItems + 1,
					sumOfItemsPrices: store.sumOfItemsPrices + item.price
				};
			}
			return storesObj;
		}, storesObj);

		return Object.values(stores);
	}
});
