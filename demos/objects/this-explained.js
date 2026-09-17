// The "this" keyword is special in JavaScript

// "this" in an object literal
let obj = {
	a: 'apple',
	getA() {
		// 'this' refers to "obj" its containing context.
		return this.a;
	},
};

console.log('A is ', obj.getA());

// "this" in a class
class Book {
	constructor(author, title) {
		// "this" refers to the instance the constructor creates
		this.author = author;
		this.title = title;
	}

	getTitle() {
		// "this" refers to the instance the constructor creates
		return this.title;
	}
}

let gatsby = new Book('Fitzgerald', 'The Great Gatsby');
let tolkien = new Book('Tolkien', 'The Fellowship of the Ring');

console.log('gatsby.getTitle=', gatsby.getTitle());
console.log('gatsby.author=', gatsby.author);
console.log('tolkien.getTitle=', tolkien.getTitle());
console.log('tolkien.author=', tolkien.author);

/*
 * Outside of an object "this" refers to the global object in sloppy mode
 * and undefined in strict mode.
 * In Node.js, this is an ECMAScript module, AUTOMATICALLY in strict mode
 * The code will return an error (or "undefined" because we're using optional chaining)
 * In the browser, this is not strict mode, the code works (!)
 * If you want the strict mode behavior in the browser, uncomment the "use strict" line
 */

globalThis.b = 'banana';

function getB() {
	// 'use strict';

	// Optional chaining with ? allows us to skip an error under Node.js
	return this?.b;
}

console.log('getB():', getB());

// Callbacks get complicated because of nesting and execution context.
globalThis.callbackLevel = 'global';
function callback(x) {
	// this?.callbackLevel is "undefined" on Node.js
	console.log(`x: ${x} at callback level [${this?.callbackLevel}]`);
	return null;
}

console.log('callback:', callback(10));

// Callback with the Array.prototype.forEach method
[1, 2, 3].forEach(callback);

// ... which can take a "this" object!
[1, 2, 3].forEach(callback, { callbackLevel: 'array' });

// Requires ES 2024, will not work below Node 22
let { promise, resolve } = Promise.withResolvers();

let dao = {
	people: [
		{ firstName: 'John', lastName: 'Paxton' },
		{ firstName: 'Kim', lastName: 'Flournoy' },
	],
	getPeople() {
		return this.people;
	},
};

// Finally, combining classes, functions, and callbacks, can lead to a lot of confusion
class PeopleRenderer {
	functionPeople = [];
	arrowPeople = [];
	loadPeopleFunction(promise) {
		promise.then(function (people) {
			try {
				console.log(
					'[loadPeopleFunction]: this instanceof PeopleRenderer:',
					this instanceof PeopleRenderer
				);
				// This "this" is actually loadPeopleFunction, NOT an instance of PeopleRenderer
				this.functionPeople = people;
				// eslint-disable-next-line no-unused-vars
			} catch (err) {
				1 == 1;
			}
		});
	}

	loadPeopleArrow(promise) {
		promise.then((people) => {
			console.log(
				'[loadPeopleArrow]: this instanceof PeopleRenderer:',
				this instanceof PeopleRenderer
			);
			// Becuase we're in an arrow function, this "this" is PeopleRenderer
			this.arrowPeople = people;
		});
	}
}

async function peopleRendererExamples() {
	let pr = new PeopleRenderer();
	pr.loadPeopleFunction(promise);
	pr.loadPeopleArrow(promise);
	console.log('pr.functionPeople:', pr?.functionPeople);
	console.log('pr.arrowPeople:', pr.arrowPeople);

	// Block until the promise resolves.
	// Can't use top-level await in a browser outside a module
	await resolve(dao.getPeople());
	console.log('pr.functionPeople:', pr?.functionPeople);
	console.log('pr.arrowPeople:', pr.arrowPeople);
}

peopleRendererExamples();
