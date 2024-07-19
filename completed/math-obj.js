const mathObj = {
	abs: function (number) {
		return Math.abs(number);
	},
	isEven: function (number) {
		return number % 2 === 0;
	},
	isOdd: function (number) {
		return number % 2 !== 0;
	},
	isStrictlyPositive: function (number) {
		return number > 0;
	},
	min: function (number1, number2) {
		return Math.min(number1, number2);
	},
	max: function (number1, number2) {
		return Math.max(number1, number2);
	},
};
