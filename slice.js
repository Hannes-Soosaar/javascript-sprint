function sliceFunc(arr, start, end) {
	let startIndex = null;
	let endIndex = null;
	if (typeof arr === "string") {
		startIndex = getFirstStringIndex(arr, start);
		endIndex = getLastStringIndex(arr, end);
		if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
			return '';
		} else {
			return arr.substring(startIndex, endIndex+1);
		}
	} else if (Array.isArray(arr)) {
		startIndex = getFirstArrayIndex(arr, start);
		endIndex = getLastArrayIndex(arr, end);
		if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
			return [];
		} else {
			return arr.slice(startIndex, endIndex + 1);
		}
	}
	return undefined;
}

function getLastArrayIndex(arr, content) {
	let arrLength = arr.length;
    let result = -1;
	for (let i = 0; i < arrLength; i++) {
		if (arr[i] === content) {
            result = i;	
		}
	}
	return result;
}
function getFirstArrayIndex(arr, content) {
	let arrLength = arr.length;
	for (let i = 0; i < arrLength; i++) {
		if (arr[i] === content) {
            return i;	
		}
	}
	return result;
}

function getFirstStringIndex(str, char) {
	let strLength = str.length;
	for (let i = 0; i < strLength; i++) {
		if (str[i] === char) {
			return i;
		}
	}
	return -1;
}

function getLastStringIndex(str, char) {
	let strLength = str.length;
    let result = -1
	for (let i = 0; i < strLength; i++) {
		if (str[i] === char) {
			result = i;
		}
	}
	return result;
}
