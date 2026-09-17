import QUnit from 'qunit';
import { getAsyncValue } from './async-module.js';

QUnit.module('async-tests');

QUnit.test('promise-style', (assert) => {
	let done = assert.async();
	getAsyncValue().then((value) => {
		assert.equal(value, 10);
		done();
	});
});

QUnit.test('async-await style', async (assert) => {
	let value = await getAsyncValue();
	assert.equal(value, 10);
});

QUnit.test('asynchronicity', (assert) => {
	let done = assert.async();
	assert.step('before');
	getAsyncValue().then(() => {
		assert.step('async-done');
		assert.verifySteps(['before', 'after', 'async-done']);
		done();
	});
	assert.step('after');
});
