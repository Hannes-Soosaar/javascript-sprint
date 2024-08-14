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
	let isFree = true;

	function createCharacter(letter) {
		const character = document.createElement("div");
		character.className = "character follow";
		character.textContent = letter;
		character.style.left = `${mouseX - 12}px`;
		character.style.top = `${mouseY - 12}px`;
		document.body.appendChild(character);
		isFree = true;
		return character;
	}

	function detachCurrentCharacter() {
		if (currentCharacter) {
			currentCharacter.classList.remove("follow");
			const isInsideJail = insideZone.contains(currentCharacter);
			const outSideJail = outsideZone.contains(currentCharacter);
			currentCharacter = null;
			// console.log("Character detached");
		}
	}

	document.addEventListener("keydown", (event) => {
		if (event.key >= "a" && event.key <= "z") {
			detachCurrentCharacter();
			newCharacter = createCharacter(event.key);
			currentCharacter = newCharacter;
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

			// console.log("The collision box right side is " + expandedRectOut.right);
			// console.log("The collision box left side is " + expandedRectIn.left);
			// console.log("Mouse coordinates x: " + mouseX);

			// console.log("The mouse is outside the Jail box: " + isOutsideJail);
			// console.log("The mouse is in the Jail box: " + isInsideJail);
			// console.log("the mouse left side" + (mouseX + 24));

			if (isInsideJail && !isOutsideJail) {
				// console.log("Im in Jail");
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
