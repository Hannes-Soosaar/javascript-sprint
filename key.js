function getValueFromKey(object, key) {
	if (key in object) {
		return key;
	} else {
        return undefined
	}

}

function setValueForKey(object, keyValuePair) {
	return { ...object, ...keyValuePair };
}
