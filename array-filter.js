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
	return object.name.length >= number;
}

function compoundFilter(arr) {

}
