function sumNestedArray(arr) {
	let flatArr;
	let sum;
	if (Array.isArray(arr)) {
		flatArr = arr.flat(Infinity);
        sum = sumArray(arr)
	}
	return undefined;
}

function sumArray(arr) {
	let sum = null;
	if (Array.isArray(arr)) {
		let arrLength = arr.length;
		for (let i = 0; i < arrLength; i++) {
			if (typeof arr[i] === "number") {
				if (sum === null) {
					sum = 0;
				}
				sum += arr[i];
			}
		}
		if (sum !== null) {
			return sum;
		}
	}
	return undefined;
}
