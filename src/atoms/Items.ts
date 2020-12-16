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
		const received = items.filter(item => item.received);
		return received;
	}
});

export const notReceivedItemsState = selector<Item[]>({
	key: "notReceivedItemsState",
	get: ({ get }) => {
		const items = get(itemsListState);
		const notReceived = items.filter(item => !item.received);
		return notReceived;
	}
});

interface ReduceObj {
	[key: string]: Store;
}

export const storesListState = selector<Store[]>({
	key: "storesListState",
	get: ({ get }) => {
		const items = get(itemsListState);
		const storesObj: ReduceObj = {};
		const stores: ReduceObj = items.reduce((storesObj, item: Item) => {
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
