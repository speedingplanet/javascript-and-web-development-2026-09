/* eslint-disable no-unused-vars */
/* global define */

/*
 * EXAMPLES ONLY
 * Have one module per file in regular usage
 */

// define a static variable
define({
	color: 'black',
	size: 'large',
	state: 'Massachusetts',
	country: 'United States',
});

// Return a configured/created variable; no dependencies
define(function () {
	let today = Date.now();
	let tomorrow = today + 1000 * 60 * 60 * 24;

	return {
		today,
		tomorrow,
	};
});

// Return something, using dependencies
define(['./dep1', './dep2', 'some-library', 'some-other-library'], function (
	dep1,
	dep2,
	someLibrary,
	someOtherLibrary
) {
	// Access dependencies as needed
});
