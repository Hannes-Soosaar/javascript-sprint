function makeLouder(input) {
	let result = ``;
	for (let i = 0; i < input.length; i++) {
		if (isLetter(input[i]) && isLowerCase(input[i])) {
			result += toLouder(input[i]);
		} else {
			result += input[i];
		}
	}
	return result;
}

function makeQuieter(input) {
	let result = ``;
	for (let i = 0; i < input.length; i++) {
		if (isLetter(input[i]) && isUpperCase(input[i])) {
			result += toQuieter(input[i]);
		} else {
			result += input[i];
		}
	}
	return result;
}

function isLetter(char) {
	return /^[a-zA-Z]$/.test(char);
}

function isUpperCase(char) {
	return /^[A-Z]$/.test(char);
}

function isLowerCase(char) {
	return /^[a-z]$/.test(char);
}

function toLouder(char) {
	if (char >= "a" && char <= "z") {
		return String.fromCharCode(char.charCodeAt(0) - 32);
	}
	return char;
}

function toQuieter(char) {
	if (char >= "A" && char <= "Z") {
		return String.fromCharCode(char.charCodeAt(0) + 32);
	}
	return char;
}
