function sliceFunc(arr, start, end) {
	let startIndex = null;
	let endIndex = null;
	if (typeof arr === "string") {
		startIndex = getStringIndex(arr, start);
		endIndex = getStringIndex(arr, end);
		if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
			return '';
		} else {
			return arr.substring(startIndex, endIndex+1);
		}
	} else if (Array.isArray(arr)) {
		startIndex = getArrayIndex(arr, start);
		endIndex = getArrayIndex(arr, end);
		if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
			return [];
		} else {
			return arr.slice(startIndex, endIndex + 1);
		}
	}
	return undefined;
}

function getArrayIndex(arr, content) {
	let arrLength = arr.length;
	for (let i = 0; i < arrLength; i++) {
		if (arr[i] === content) {
			return i;
		}
	}
	return -1;
}

function getStringIndex(str, char) {
	let strLength = str.length;
	for (let i = 0; i < strLength; i++) {
		if (str[i] === char) {
			return i;
		}
	}
	return -1;
}
