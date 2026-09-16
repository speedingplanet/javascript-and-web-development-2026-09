// eslint-disable-next-line no-unused-vars
import { movies } from '../../../data/all-data.json' with { type: 'json' };

console.log(movies);
console.log('search-movies loaded.');
let buttonRef = document.querySelector('button');
let textField = document.querySelector('#search-title');

buttonRef.addEventListener('click', function () {
	console.log(`You searched on ${textField.value}`);
});
