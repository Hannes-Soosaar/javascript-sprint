function calculateFines(carData) {
	const cars = JSON.parse(carData);
	let totalFines = 0;
    const fineForOldVehicles = 20;
	const fineForDieselVehicles = 10;
	const finedCars = [];
	cars.forEach((car) => {
		const [make, model, reg, year, fuel] = car;
		let fine = 0;
		if (year < 2000) {
			fine = Math.max(fine, fineForOldVehicles);
		}
		if (fuel === `diesel` && year < 2015) {
			fine = Math.max(fine, fineForDieselVehicles);
		}
		if (fine > 0) {
			totalFines += fine;
			finedCars.push({
				reg: reg,
				year: year,
				fuel: fuel,
				fine: fine,
			});
		}
	});
	const result = {
		totalFines: totalFines,
		cars: finedCars,
	};
    return JSON.stringify(result)
}
