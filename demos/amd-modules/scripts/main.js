/*
 * The baseUrl is "scripts" because of data-main in index.html.
 * Refer to a dependency in "scripts" directly.
 * Or refer to dependencies outside "scripts" with a "./".
 * Or alter your require config to load from alternate locations
 */

require(['lib/calculator'], function (calculator) {
	console.log('5 * 3 is', calculator.multiply(5, 3));
});
