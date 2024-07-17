function getFirstElement(input) {
	if (typeof input === "string") {
		return input.charAt(0);
	} else if (Array.isArray(input)) {
		return input[0];
	} else {
		return undefined;
	}
}

function getLastElement(input) {
	if (typeof input === "string") {
		return input.charAt(length.input - 1);
	} else if (Array.isArray(input)) {
		return input[length.input - 1];
	} else {
		return undefined;
	}
}

function getElementByIndex(input, index) {
	if (typeof input === "number" && !isNaN(input)) {
		return undefined;
	}
	if (typeof input === "string") {
		return input.charAt(index);
	} else if (Array.isArray(input)) {
		return input[index];
	} else {
		return undefined;
	}
}
