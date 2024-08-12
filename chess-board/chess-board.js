const body = document.body;

function initializeChessboard() {
	const chessboard = document.createElement("div");
	chessboard.classList.add("chessboard");
	let lastClickedSquare = null;
	for (let i = 1; i <= 8; i++) {
		for (let j = 1; j <= 8; j++) {
			const square = document.createElement("div");
			square.classList.add("square");
			square.id = `${i}-${j}`;
			if ((i + j) % 2 === 0) {
				square.classList.add("white-square");
			} else {
				square.classList.add("black-square");
			}
			square.addEventListener("click", function () {
				if (lastClickedSquare) {
					lastClickedSquare.classList.remove("red-square");
				}
				square.classList.add("red-square");
				lastClickedSquare = square;
			});
			chessboard.appendChild(square);
		}
	}
	document.body.appendChild(chessboard);
}
document.addEventListener("DOMContentLoaded", initializeChessboard);