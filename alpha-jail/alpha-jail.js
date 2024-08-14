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
    let inJail = false;

	function createCharacter(letter, x, y) {
		const character = document.createElement("div");
		character.className = "character follow";
		character.textContent = letter;
		character.style.left = `${mouseX-12}px`;
		character.style.top = `${mouseY-12}px`;
		document.body.appendChild(character);
		return character;
	}

	// function detachCurrentCharacter() {
	// 	if (currentCharacter) {
	// 		currentCharacter.classList.remove("follow");
	// 		const isInsideJail = insideZone.contains(currentCharacter);

	// 		if (isInsideJail) {
	// 			const rect = insideZone.getBoundingClientRect();
	// 			const charRect = currentCharacter.getBoundingClientRect();
	// 			const charX = Math.min(
	// 				Math.max(charRect.left, rect.left),
	// 				rect.right - charRect.width
	// 			);
	// 			const charY = Math.min(
	// 				Math.max(charRect.top, rect.top),
	// 				rect.bottom - charRect.height
	// 			);
	// 			currentCharacter.style.left = `${charX}px`;
	// 			currentCharacter.style.top = `${charY}px`;
    //             console.log("detaching character")
    //             insideZone.appendChild(currentCharacter);

	// 		} else {
	// 			outsideZone.appendChild(currentCharacter);
	// 		}

	// 		currentCharacter = null;
    //         console.log("character removed");
	// 	}
	// }


function detachCurrentCharacter() {

    // if the character moves out from the 


	if (currentCharacter) {
		currentCharacter.classList.remove("follow");
		const isInsideJail = insideZone.contains(currentCharacter);
		console.log("Is inside jail:", isInsideJail);
		console.log("Current parent:", currentCharacter.parentElement);

		if (isInsideJail) {
			console.log("Appending to inside zone");
			insideZone.appendChild(currentCharacter);
		} else {
			console.log("Appending to outside zone");
			outsideZone.appendChild(currentCharacter);
		}
		currentCharacter = null;
		console.log("Character detached");
	}
}

	document.addEventListener("keydown", (event) => {
		if (event.key >= "a" && event.key <= "z") {
			detachCurrentCharacter();
			if (currentCharacter) {
				// currentCharacter.classList.remove("follow");
				if (insideZone.contains(currentCharacter)) {
					const rect = insideZone.getBoundingClientRect();
					const charRect = currentCharacter.getBoundingClientRect();
					const charX = Math.min(
						Math.max(charRect.left, rect.left),
						rect.right - charRect.width
					);
					const charY = Math.min(
						Math.max(charRect.top, rect.top),
						rect.bottom - charRect.height
					);
					currentCharacter.style.left = `${charX}px`;
					currentCharacter.style.top = `${charY}px`;
				}
			}
			newCharacter = createCharacter(
				event.key,
				window.innerWidth / 2,
				window.innerHeight / 2
			);
			currentCharacter = newCharacter;
		}
	});

	document.addEventListener("mousemove", (event) => {
		mouseX = event.clientX;
		mouseY = event.clientY;

		if (currentCharacter) {
			currentCharacter.style.left = `${mouseX - 12}px`;
			currentCharacter.style.top = `${mouseY - 12}px`;

			const isInsideJail = insideZone.contains(event.target);
			if (isInsideJail) {
				currentCharacter.classList.add("trapped");
				currentCharacter.classList.remove("follow");
			} else {
				currentCharacter.classList.remove("trapped");
				currentCharacter.classList.add("follow");
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
