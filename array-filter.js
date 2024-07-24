
function isEven(number) {
	return number % 2 === 0;
}

function filterOutOddNumbers(arr){
   return arr.filter(isEven);
}

function filterObjectsByNameLength(arr,length){
    return arr.filter(object => nameIsLongerThan(object,length))
}

function nameIsLongerThan(object, number) {
	return object.name.length > number;
}

function compoundFilter(arr){

    // no "code" greater then 5 characters
    // "category" does not contain `special`
    // "price" is greater than 50 
    // "location" is not equal to `Underground`
}


