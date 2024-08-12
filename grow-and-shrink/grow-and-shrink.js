document.addEventListener("DOMContentLoaded", () => {
	const lettersContainer = document.querySelector(".letter-container");
	const prevButton = document.getElementById("prev");
	const nextButton = document.getElementById("next");
	const decreaseButton = document.getElementById("decrease");
	const increaseButton = document.getElementById("increase");
	let selectedLetter = null;

	for (let i = 0; i < 26; i++) {
		const letter = String.fromCharCode(65 + i);
		const div = document.createElement("div");
		div.classList.add("letter");
		div.id = letter.toLowerCase();
		div.textContent = letter;
		// div.style.fontSize = `${fontSize}px`;
		div.style.fontSize = "14px";
		div.addEventListener("click", () => selectLetter(div));
		lettersContainer.appendChild(div);
	}

	selectedLetter = document.getElementById("a");
	selectLetter(selectedLetter);
	prevButton.addEventListener("click", () => changeLetter(-1));
	nextButton.addEventListener("click", () => changeLetter(1));
	decreaseButton.addEventListener("click", () => changeFontSize(-2));
	increaseButton.addEventListener("click", () => changeFontSize(2));

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
		if (!selectedLetter) return;
		let currentSize = parseInt(
			window.getComputedStyle(selectedLetter).fontSize,
			10
		);
		let newSize = Math.min(Math.max(currentSize + delta, 10), 26);
		selectedLetter.style.fontSize = `${newSize}px`;
	}
});
