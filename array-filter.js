
function isEven(number) {
	return number % 2 === 0;
}

function filterOutOddNumbers(arr) {
	return arr.filter(isEven);
}

function filterObjectsByNameLength(objects, length) {
	return objects.filter((object) => nameIsLongerThan(object, length));
}

function nameIsLongerThan(object, number) {
	return object.name.length <= number;
}

function compoundFilter(objects) {
	const filter = {
		code: 5,
		category: "special",
		price: 50,
		location: "Underground",
	};
	return objects.filter((object) => {
		if (object.code.length < filter.code) {
			return false;
		}
		if (!object.category.includes(filter.category)) {
			return false;
		}
		if (object.price < filter.price) {
			return false;
		}
		if (object.location === filter.location) {
			return false;
		}
		return true;
	});
}
