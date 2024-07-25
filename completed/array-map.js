function convert2DArrayToObjectArray(array2D) {
	return array2D.map(([key, value]) => {
		const obj = {};
		obj[key] = value;
		return obj;
	});
}

function convertArrayOfObjectsToStrings(arrayOfObjects) {
	return arrayOfObjects.map((obj) => {
		const formattedStrings = Object.entries(obj).map(([key, value]) => {
			const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
			return `${capitalizedKey}: ${value}`;
		});
		return formattedStrings.join(", ");
	});
}

function concatenateStrings(strings, maxLength) {
	return strings.map((str) => {
		if (str.length > maxLength) {
			return str.slice(0, maxLength) + "...";
		}
		return str;
	});
}