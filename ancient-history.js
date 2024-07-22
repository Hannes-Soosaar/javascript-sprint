function classifyDate(date){

if (!(date instanceof Date)){
    return "invalid date object"
}

    let timeNow = new Date();
    let yearNow = timeNow.getFullYear()
    let yearCompare = date.getFullYear()
    if ( yearNow > yearCompare + 1) {
        return "ancient";
    } else if (yearNow < yearCompare-1) {
        return "distant future";
    } else if ( timeNow < date){
        return "future";
    } else if ( timeNow > date){
        return "past";
    } else {
        return "present";
    }
}