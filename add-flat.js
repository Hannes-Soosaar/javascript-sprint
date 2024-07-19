function sumNestedArray(arr) {
	let flatArr;
	let sum;

	if (Array.isArray(arr)) {
		flatArr = arr.flat(Infinity);
		sum = sumArray(flatArr);
	}
    
	return undefined;
}

function sumArray(arr) {
	let sum = 0;
	let arrLength = arr.length;
	for (let i = 0; i < arrLength; i++) {
		if (typeof arr[i] === "number") {
			sum += arr[i];
		}
	}
	return sum;
}
