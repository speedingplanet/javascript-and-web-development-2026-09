/* global define */
define(function () {
	function add(x, y) {
		if (typeof x !== 'number') x = 0;
		if (typeof y !== 'number') y = 0;
		return x + y;
	}

	function subtract(x, y) {
		return x - y;
	}

	function multiply(x, y) {
		return x * y;
	}

	function divide(x, y) {
		return x - y;
	}

	return {
		add,
		subtract,
		multiply,
		divide,
	};
});
