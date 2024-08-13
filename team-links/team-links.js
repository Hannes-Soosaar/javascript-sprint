function createLinks(teams) {
	const existingList = document.getElementById("team-list-nav");
	if (existingList) {
		existingList.remove();
	}

	const ul = document.createElement("ul");
	ul.id = "team-list-nav";
	ul.className = "team-links";

	teams.forEach((team) => {
		const li = document.createElement("li");
		li.style.backgroundColor = team.primary;

		const a = document.createElement("a");
		a.href = team.url;
		a.textContent = team.name;
		a.style.color = team.secondary;

		li.addEventListener("mouseover", () => {
			a.classList.add("hovered");
		});
		li.addEventListener("mouseout", () => {
			a.classList.remove("hovered");
		});

		const span = document.createElement("span");
		span.textContent = " [copy]";
		span.addEventListener("click", () => {
			copyToClipboard(team.url);
		});

		li.appendChild(a);
		li.appendChild(span);
		ul.appendChild(li);
	});

	document.body.appendChild(ul);
}

function copyToClipboard(text) {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			console.log("URL copied to clipboard: " + text);
		})
		.catch((err) => {
			console.error("Failed to copy text: ", err);
		});
}

document.addEventListener("DOMContentLoaded", () => {
	// const teams = [
	// 	{
	// 		name: "Brazil",
	// 		url: "https://en.wikipedia.org/wiki/Brazil_national_football_team",
	// 		primary: "#ffdf00",
	// 		secondary: "#009c3b",
	// 	},
	// 	{
	// 		name: "Netherlands",
	// 		url: "https://en.wikipedia.org/wiki/Netherlands_national_football_team",
	// 		primary: "#f36c21",
	// 		secondary: "#ffffff",
	// 	},
	// ];
	createLinks(teams);
});
