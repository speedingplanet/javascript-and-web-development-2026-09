/* eslint-disable no-unused-vars */
const person = {
	// Typical property get and set
	firstName: 'John',
	lastName: 'Paxton',
	city: 'Nutley',
	state: 'NJ',

	// Properties as getters/setters
	get country() {
		return 'United States';
	},

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	},

	set fullName(fullName) {
		// Assumes ALL names are "firstName lastName", e.g. "John Smith"
		let [firstName, lastName] = fullName.split(' ');
		this.firstName = firstName;
		this.lastName = lastName;
	},

	// Different ways to add a function
	getState() {
		return this.state;
	},
	getCity: function () {
		return this.city;
	},
	add: (x, y) => x + y,
};

// Accessing various properties
console.log('person.firstName:', person.firstName);
console.log('person.country:', person.country);
console.log('person.fullName:', person.fullName);
console.log('Setting fullName to "Bob Dobalina"');
person.fullName = 'Bob Dobalina';
console.log('person.fullName:', person.fullName);

// Iteration possibilities
const keys = Object.keys(person);
const values = Object.values(person);

// entries [[key1, value1], [key2, value2]]
const entries = Object.entries(person);

Object.keys(person).forEach((key) => {
	console.log(`${key}: ${person[key]}`);
});

// Object.keys() equivalent
for (const key in person) {
	console.log(key);
}

// enumerable: does this key show up in a loop?
// configurable: can we call defineProperty() on this key?
// writeable: can this value be changed?

// More here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description

Object.keys(person)
	.filter((key) => typeof person[key] === 'function')
	.forEach((key) => {
		Object.defineProperty(person, key, { enumerable: false });
	});

Object.defineProperty(person, 'someMethod', {
	enumerable: false,
	value: () => console.log('Some method'),
});

// Destructuring
const { firstName, lastName } = person;
const { firstName: fName, lastName: lName } = person;

// Identifiers: $, _, or alphabetical character, followed by $, _, alphanumeric
// $, _, $foo, _foo, foo, bar, baz, something_complicated, abc123;

let someValue = 10;

const state = {
	aString: '',
	aNumber: 0,
	aFunction: function () {},
	anArrowFunction: () => {},
	methodFunction() {},
	anotherObject: {
		innerObject: {
			reallyDeepObject: {
				kindOfRidiculousObject: { message: 'Hi' },
			},
		},
	},
	'something-complicated': 'value',
	'some spaces': 'value',
	localValue: someValue,
	// Equivalent to someValue: someValue
	someValue,
};

state['some spaces'];
state.aString;
