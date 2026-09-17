// Symbols are always unique and immutable

let symbol1 = Symbol();
let symbol2 = Symbol();
console.log(symbol1 === symbol2); // expected false

/*
 * Symbols can have labels,
 * but the underlying Symbol is still unique and immutable
 */
let symbolFoo1 = Symbol('foo');
console.log('symbolFoo1:', symbolFoo1);
console.log('symbolFoo1.toString():', symbolFoo1.toString());

let symbolFoo2 = Symbol('foo');
console.log('symbolFoo2:', symbolFoo2);
console.log('symbolFoo1.toString():', symbolFoo1.toString());

console.log(symbolFoo1 === symbolFoo2); // expected false

/*
 * There is also a global symbol registry, where you can access a globally
 * registered Symbol.
 * Note the above are NOT globally registered!
 */

// Get a globally registered symbol named "ber" or create one if needed
let symbolBar1 = Symbol.for('bar');
let symbolBar2 = Symbol.for('bar');

// These ARE the same:
console.log(symbolBar1 === symbolBar2);

/*
 * Well-known Symbols:
 * Symbols that are used across objects, classes, etc.
 * Usually "standard" "magic" methods and properties like toJSON() and toString()
 * The Iterable protocol is attached to the Symbol.iterator well-known Symbol
 * Or, if you've ever seen [object Object], the second value is provided by Symbol.toStringTag
 */

let person = {
	firstName: 'John',
	lastName: 'Paxton',
	get [Symbol.toStringTag]() {
		return 'Person';
	},
};

console.log(`Hello, ${person}`);
