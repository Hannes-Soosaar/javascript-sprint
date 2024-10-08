function printPrettyDate(date) {
	let year = date.getFullYear();
	let month = date.getMonth();
	let day = date.getDay();
	let dayDate = date.getDate();
	let hours = String(date.getHours()).padStart(2, "0");
	let minutes = String(date.getMinutes()).padStart(2, "0");
	let second = String(date.getSeconds()).padStart(2, "0");
	let amPm = getAmPM(hours);

	if (amPm === "PM") {
		hours = String(getAmPmTimeFormat(hours)).padStart(2, "0");
        
	}

	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const monthsOfYear = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

console.log(
		"Today is " +
		daysOfWeek[day] +
		", " +
		monthsOfYear[month] +
		" " +
		dayDate +
		", " +
		year +
		", and the time is " +
		hours +
		":" +
		minutes +
		":" +
		second +
		" " +
		amPm +
		"."
	);
}

function getAmPM(hours) {
	return hours >= 12 ? "PM" : "AM";
}

function getAmPmTimeFormat(hours) {
	return hours % 12;
}

function addLeadingZeroToHours(number){
    
}
