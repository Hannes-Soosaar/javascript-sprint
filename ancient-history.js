function classifyDate(date) {
    let timeNow = new Date();
	if (!(date instanceof Date)) {
		return "invalid date object";
	}
    let deltaYear = getYearDifference(date)
	if ( deltaYear < -1) {
		return "ancient";
	} else if (deltaYear > 1) {
		return "distant future";
	} else if (timeNow < date) {
		return "future";
	} else if (timeNow > date) {
		return "past";
	} else {
		return "present";
	}

}

function getYearDifference(date2) {
	let date1 = new Date();
	let date2IsInThePast = false;

	if (date1 > date2) {
		[date1, date2] = [date2, date1];
		date2IsInThePast = true;
	}

	let year1 = date1.getFullYear();
	let year2 = date2.getFullYear();
	let month1 = date1.getMonth();
	let month2 = date2.getMonth();
	let day1 = date1.getDate();
	let day2 = date2.getDate();
	let deltaYear = year2 - year1;

	if (month2 < month1 || (month2 === month1 && day2 < day1)) {
		deltaYear--;
	}
	if (date2IsInThePast) {
		deltaYear  = -deltaYear;
	}

	return deltaYear;
}
