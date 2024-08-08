
function getElementsByTag(tagName) {
	return document.getElementsByTagName(tagName);
}


function getElementsByClassName(className) {
	return document.getElementsByClassName(className);
}


function getElementById(id) {
	return document.getElementById(id);
}


function getElementsByAttribute(attributeName, attributeValue) {
	if (attributeValue !== undefined) {
		return document.querySelectorAll(`[${attributeName}="${attributeValue}"]`);
	} else {
		return document.querySelectorAll(`[${attributeName}]`);
	}
}
