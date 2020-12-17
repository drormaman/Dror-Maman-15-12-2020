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
		return filterReceivedItemsArray(items);
	}
});

export const orderedItemsState = selector<Item[]>({
	key: "orderedItemsState",
	get: ({ get }) => {
		const items = get(itemsListState);
		return filterOrderedItemsArray(items);
	}
});

export const totalSumOfReceivedItemsState = selector<number>({
	key: "totalSumOfReceivedItemsState",
	get: ({ get }) => {
		const items = get(receivedItemsState);
		return getTotalPrice(items);
	}
});

export const totalSumOfOrderedItemsState = selector<number>({
	key: "totalSumOfOrderedItemsState",
	get: ({ get }) => {
		const items = get(orderedItemsState);
		return getTotalPrice(items);
	}
});

export const storesReceivedListState = selector<Store[]>({
	key: "storesReceivedListState",
	get: ({ get }) => {
		const items = get(receivedItemsState);
		return reduceItemsToStores(items);
	}
});

export const storesOrderedListState = selector<Store[]>({
	key: "storesOrderedListState",
	get: ({ get }) => {
		const items = get(orderedItemsState);
		return reduceItemsToStores(items);
	}
});

function filterReceivedItemsArray(items: Item[]): Item[] {
	return items
		.filter(item => item.received)
		.sort(
			(a, b) => b.estimatedDelivery.getTime() - a.estimatedDelivery.getTime()
		);
}

function filterOrderedItemsArray(items: Item[]): Item[] {
	return items
		.filter(item => !item.received)
		.sort(
			(a, b) => a.estimatedDelivery.getTime() - b.estimatedDelivery.getTime()
		);
}

interface ReduceStoreObj {
	[key: string]: Store;
}

function reduceItemsToStores(items: Item[]): Store[] {
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

function getTotalPrice(items: Item[]): number {
	return items.reduce((sum, prod) => {
		return sum + prod.price;
	}, 0);
}
