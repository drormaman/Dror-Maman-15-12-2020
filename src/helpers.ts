export function formatDate(date: Date): string {
	const dd: string = date.getDate().toString().padStart(2, "0");
	const mm: string = (date.getMonth() + 1).toString().padStart(2, "0");
	const yyyy: string = date.getFullYear().toString();
	return `${dd}/${mm}/${yyyy}`;
}

export function numberWithThousandsCommas(price: number): string {
	const fixedPrice: string = `${price.toFixed(2)}`;
	return fixedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
