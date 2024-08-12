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

	let selectedLetter = document.getElementById("a");
	selectLetter(selectedLetter);

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
	decreaseButton.textContent = "-";
	decreaseButton.addEventListener("click", () => changeFontSize(-2));

	const increaseButton = document.createElement("button");
	increaseButton.id = "increase";
	increaseButton.textContent = "+";
	increaseButton.addEventListener("click", () => changeFontSize(2));

	buttonContainer.appendChild(prevButton);
	buttonContainer.appendChild(nextButton);
	buttonContainer.appendChild(decreaseButton);
	buttonContainer.appendChild(increaseButton);

	function selectLetter(letterDiv) {
		if (selectedLetter) {
			selectedLetter.classList.remove("selected");
			selectedLetter.style.fontWeight = "normal";
		}
		selectedLetter = letterDiv;
		selectedLetter.classList.add("selected");
		selectedLetter.style.fontWeight = "bold";
	}

	function changeLetter(direction) {
		if (!selectedLetter) return;
		const letters = Array.from(lettersContainer.querySelectorAll(".letter"));
		const currentIndex = letters.indexOf(selectedLetter);
		let newIndex = (currentIndex + direction + letters.length) % letters.length;
		selectLetter(letters[newIndex]);
	}

	function changeFontSize(delta) {
		let currentSize = parseInt(
			window.getComputedStyle(selectedLetter).fontSize
		);
		const newSize = currentSize + delta;
		if (newFontSize >= 10 && newFontSize <= 26) {
			selectedLetter.style.fontSize = newSize + "px";
		}
	}
});
