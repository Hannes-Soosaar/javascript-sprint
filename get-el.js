
function getElementsByTag(tagName) {
	return document.getElementsByTagName(tagName);
}


function getElementsByClassName(className) {
	return document.getElementsByClassName(className);
}


function getElementById(id) {
	const element = document.getElementById(id);
    return element ? element : undefined;
}

function getElementsByAttribute(attributeName, attributeValue) {
	if (attributeValue !== undefined) {
		return document.querySelectorAll(`[${attributeName}="${attributeValue}"]`);
	} else {
		return document.querySelectorAll(`[${attributeName}]`);
	}
}
