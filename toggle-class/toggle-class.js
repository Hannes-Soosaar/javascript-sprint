document.addEventListener("DOMContentLoaded", () => {
	const contentContainer = document.createElement("div");
	contentContainer.classList.add("content");
	contentContainer.id = "content";
	const controlsContainer = document.createElement("div");
	controlsContainer.classList.add("controls");

	document.body.appendChild(contentContainer);
	document.body.appendChild(controlsContainer);

	const boldButton = document.createElement("button");
	boldButton.id = "bold";
	boldButton.textContent = "B";
	boldButton.addEventListener("click", () => boldParagraph());

	const italicButton = document.createElement("button");
	italicButton.textContent = "I";
	italicButton.id = "italic";
	italicButton.addEventListener("click", () => italicParagraph());

	const underlineButton = document.createElement("button");
	underlineButton.textContent = "U";
	underlineButton.id = "underline";
	underlineButton.addEventListener("click", () => underlineParagraph());

	const highlightButton = document.createElement("button");
	highlightButton.textContent = "Highlight";
	highlightButton.id = "highlight";
	highlightButton.addEventListener("click", () => highlightParagraph());

	let contentParagraph = document.createElement("p");
	contentParagraph.textContent = "code";

	contentContainer.appendChild(contentParagraph);
	controlsContainer.appendChild(boldButton);
	controlsContainer.appendChild(italicButton);
	controlsContainer.appendChild(underlineButton);
	controlsContainer.appendChild(highlightButton);

	function boldParagraph() {
		const divContainer = document.getElementById("content");
		const pElement = divContainer.querySelector(`p`);
		if (pElement.classList.contains("bold")) {
			pElement.classList.remove("bold");
		} else {
			pElement.classList.add("bold");
		}
	}

	function italicParagraph() {
		const divContainer = document.getElementById("content");
		const pElement = divContainer.querySelector(`p`);
		if (pElement.classList.contains("italic")) {
			pElement.classList.remove("italic");
		} else {
			pElement.classList.add("italic");
		}
	}

	function underlineParagraph() {
		const divContainer = document.getElementById("content");
		const pElement = divContainer.querySelector(`p`);
		if (pElement.classList.contains("underline")) {
			pElement.classList.remove("underline");
		} else {
			pElement.classList.add("underline");
		}
	}

	function highlightParagraph() {
		const divContainer = document.getElementById("content");
		const pElement = divContainer.querySelector(`p`);
		if (pElement.classList.contains("highlight")) {
			pElement.classList.remove("highlight");
		} else {
			pElement.classList.add("highlight");
		}
	}
});
