// For debugging 
// const objects = [
// 	{ name: "Alice" },
// 	{ name: "Bob" },
// 	{ name: "Christina" },
// 	{ name: "David" },
// 	{ name: "dUX Gc" },
// ];

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
	return object.name.length < number;
}

function compoundFilter(arr) {}


console.log(filterObjectsByNameLength(objects,5))