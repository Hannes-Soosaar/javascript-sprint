function getTotalFromShoppingBasket(shoppingBasket) {
	let totalPrice = shoppingBasket.reduce((accumulator, currentItem) => {
		return accumulator + currentItem.price;
	},0);
    return totalPrice;
}

function getAverageAge(people) {
let numberOfPeople = people.length;
let totalAge = people.reduce(
		(accumulator, currentItem) => {
			return accumulator +currentItem.age;
		},0 );
let averageAge = totalAge/numberOfPeople;
    return averageAge;
}

function concatenateObjects(objects) {
	return objects.reduce((accumulator, currentItem) => {
		const { key, value } = currentItem;
		if (!accumulator[key]) {
			accumulator[key] = [];
		}
		accumulator[key].push(value);
		return accumulator;
	}, {}); 
}