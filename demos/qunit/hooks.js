import QUnit from 'qunit';

QUnit.module('hooks-functional', (hooks) => {
	let beforeValue = 0;
	let beforeEachValue = 0;

	// Once, before everything in the module
	hooks.before(() => {
		beforeValue++;
		console.log('before');
	});

	// Before each test
	hooks.beforeEach(() => {
		beforeEachValue++;
		console.log('beforeEach');
	});

	// After each test
	hooks.afterEach(() => {
		console.log('afterEach');
	});

	// After everything in the module
	hooks.after(() => {
		console.log('after');
	});

	// Three arbitrary tests

	QUnit.test('test-01', (assert) => {
		console.log(`beforeValue: ${beforeValue} | beforeEachValue: ${beforeEachValue}`);
		assert.ok(1);
	});

	QUnit.test('test-02', (assert) => {
		console.log(`beforeValue: ${beforeValue} | beforeEachValue: ${beforeEachValue}`);
		assert.ok(1);
	});

	QUnit.test('test-03', (assert) => {
		console.log(`beforeValue: ${beforeValue} | beforeEachValue: ${beforeEachValue}`);
		assert.ok(1);
	});
});

QUnit.module('hooks-options', {
	// Once, before everything in the module
	before() {
		console.log('before');
	},

	// Before each test
	beforeEach() {
		console.log('beforeEach');
	},

	// After each test
	afterEach() {
		console.log('afterEach');
	},

	// After everything in the module
	after() {
		console.log('after');
	},
});

// Three arbitrary tests

QUnit.test('test-04', (assert) => {
	assert.ok(1);
});

QUnit.test('test-05', (assert) => {
	assert.ok(1);
});

QUnit.test('test-06', (assert) => {
	assert.ok(1);
});
