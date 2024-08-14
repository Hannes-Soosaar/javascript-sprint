document.addEventListener("DOMContentLoaded", () => {
	const outsideZone = document.createElement("div");
	outsideZone.className = "zone outside";
	document.body.appendChild(outsideZone);

	const insideZone = document.createElement("div");
	insideZone.className = "zone inside";
	document.body.appendChild(insideZone);

	let currentCharacter = null;
	let mouseX = 0;
	let mouseY = 0;
	let charX = mouseX - 12;
	let charY = mouseY - 12;

	let isFree = true;

	function createCharacter(letter) {
		const rectIn = insideZone.getBoundingClientRect();

		let charX = mouseX - 12;
		let charY = mouseY - 12;
		const isInsideJail =
			charX >= rectIn.left &&
			charX <= rectIn.right &&
			charY >= rectIn.top &&
			charY <= rectIn.bottom;

		const character = document.createElement("div");

		if (isInsideJail) {
			character.className = "character follow trapped";
		} else {
			character.className = "character follow";
		}

		character.textContent = letter;
		character.style.left = `${charX}px`;
		character.style.top = `${charY}px`;

		document.body.appendChild(character);
		isFree = true;
		return character;
	}

	function detachCurrentCharacter() {
		if (currentCharacter) {
			currentCharacter.classList.remove("follow");
			currentCharacter = null;
		}
	}

	document.addEventListener("keydown", (event) => {
		if (event.key >= "a" && event.key <= "z") {
			detachCurrentCharacter();
			currentCharacter = createCharacter(event.key);
		}
	});

	document.addEventListener("mousemove", (event) => {
		mouseX = event.clientX;
		mouseY = event.clientY;
		if (currentCharacter) {
			currentCharacter.style.left = `${mouseX - 12}px`;
			currentCharacter.style.top = `${mouseY - 12}px`;
			const rectOut = outsideZone.getBoundingClientRect();
			const rectIn = insideZone.getBoundingClientRect();

			const buffer = 12;

			const expandedRectOut = {
				left: rectOut.left,
				right: rectOut.right + buffer,
				top: rectOut.top,
				bottom: rectOut.bottom,
			};
			const expandedRectIn = {
				left: rectIn.left,
				right: rectIn.right,
				top: rectIn.top,
				bottom: rectIn.bottom,
			};

			const isOutsideJail =
				mouseX >= expandedRectOut.left &&
				mouseX <= expandedRectOut.right &&
				mouseY >= expandedRectOut.top &&
				mouseY <= expandedRectOut.bottom;

			const isInsideJail =
				mouseX >= expandedRectIn.left &&
				mouseX <= expandedRectIn.right &&
				mouseY >= expandedRectIn.top &&
				mouseY <= expandedRectIn.bottom;
			if (isInsideJail && !isOutsideJail) {
				currentCharacter.classList.add("trapped");
				isFree = false;
			} else if (isOutsideJail && !isFree) {
				currentCharacter.style.left = `${expandedRectIn.left}px`;
				detachCurrentCharacter();
			} else {
				currentCharacter.classList.remove("trapped");
			}
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			document.querySelectorAll(".character").forEach((char) => char.remove());
			currentCharacter = null;
		}
	});
});
