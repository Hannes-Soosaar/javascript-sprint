const body = document.body;

function createTable() {
	const table = document.createElement(`table`);
	table.classList.add(`custom-table`);
	let rowStartBlack = false;

	for (let i = 1; i < 9; i++) {
		const row = document.createElement(`tr`);
		if (i % 2 === 0) {
			rowStartBlack = true;
		}
		for (let j = 1; j < 9; j++) {
			const cell = document.createElement(`td`);
			if (!rowStartBlack && j % 2 !== 0) {
				cell.classList.add(`white-square`);
			} else if (!rowStartBlack && j % 2 === 0) {
				cell.classList.add(`black-square`);
			} else if (rowStartBlack && j % 2 !== 0) {
				cell.classList.add(`black-square`);
			} else if (rowStartBlack && j % 2 === 0) {
				cell.classList.add(`white-square`);
			}
			row.appendChild(cell);
		}
		table.appendChild(row);
		rowStartBlack = false;
	}
	document.body.appendChild(table);
}

document.addEventListener("DOMContentLoaded", createTable);
// body.append(table);
