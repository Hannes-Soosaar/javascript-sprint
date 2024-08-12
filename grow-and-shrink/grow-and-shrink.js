document.addEventListener("DOMContentLoaded", () => {
	const lettersContainer = document.createElement("div");
	lettersContainer.classList.add("letter-container");

	const buttonContainer = document.createElement("div");
	buttonContainer.classList.add("button-container");

	for (let i = 0; i < 26; i++) {
		const letter = String.fromCharCode(65 + i);
		const div = document.createElement("div");
		div.classList.add("letter");
		div.id = `${letter.toLowerCase()}`;
		div.textContent = letter;
		div.style.fontSize = "14px";
		div.addEventListener("click", () => selectLetter(div));
		lettersContainer.appendChild(div);
	}

	document.body.appendChild(lettersContainer);
	document.body.appendChild(buttonContainer);

	let selectedLetterElement = document.getElementById("a");
	selectLetter(selectedLetterElement);

	const prevButton = document.createElement("button");

	prevButton.id = "prev";
	prevButton.textContent = " < ";
	prevButton.addEventListener("click", () => changeLetter(-1));

	const nextButton = document.createElement("button");
	nextButton.id = "next";
	nextButton.textContent = " > ";
	nextButton.addEventListener("click", () => changeLetter(1));

	const decreaseButton = document.createElement("button");
	decreaseButton.id = "decrease";
	decreaseButton.textContent = " - ";
	decreaseButton.addEventListener("click", () => changeFontSize(-2));

	const increaseButton = document.createElement("button");
	increaseButton.id = "increase";
	increaseButton.textContent = " + ";
	increaseButton.addEventListener("click", () => changeFontSize(2));

	buttonContainer.appendChild(prevButton);
	buttonContainer.appendChild(nextButton);
	buttonContainer.appendChild(decreaseButton);
	buttonContainer.appendChild(increaseButton);

	function selectLetter(letterDiv) {
		if (selectedLetterElement) {
			selectedLetterElement.classList.remove("selected");
			selectedLetterElement.style.fontWeight = "normal";
		}
		selectedLetterElement = letterDiv;
		selectedLetterElement.classList.add("selected");
		selectedLetterElement.style.fontWeight = "bold";
		let storedSize = parseInt(selectedLetterElement.dataset.fontSize);
		selectedLetterElement.style.fontSize = storedSize + "px";
	}

	function changeLetter(direction) {
		if (!selectedLetterElement) return;
		const letters = Array.from(lettersContainer.querySelectorAll(".letter"));
		const currentIndex = letters.indexOf(selectedLetterElement);
		let newIndex = (currentIndex + direction + letters.length) % letters.length;
		selectLetter(letters[newIndex]);
	}

	function changeFontSize(delta) {
		const currentFontSize = Math.round(
			parseInt(window.getComputedStyle(selectedLetterElement).fontSize)
		);
		const newFontSize = currentFontSize + delta;
		if (newFontSize >= 10 && newFontSize <= 26) {
			selectedLetterElement.style.fontSize = newFontSize + "px";
			selectedLetterElement.dataset.fontSize = newFontSize;
		}
	}
});
