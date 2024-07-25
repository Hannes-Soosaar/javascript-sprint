function getTotalFromShoppingBasket(shoppingBasket) {
	return shoppingBasket.reduce((accumulator, currentItem) => {
		return accumulator + currentItem.price;
	});

}

function getAverageAge(people) {
return people.reduce(
		(accumulator, currentItem, index, array) => {
			accumulator.total += currentItem.aeg;
			accumulator.count += 1;
			if (index === array.length - 1) {
				return accumulator.total / accumulator.count;
			}
			return accumulator;
		},
		{ total: 0, count: 0 }
	);
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
