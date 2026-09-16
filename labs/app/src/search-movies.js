import { movies } from '../../../data/all-data.json' with { type: 'json' };

console.log('search-movies loaded.');
let buttonRef = document.querySelector('button');
let textField = document.querySelector('#search-title');

buttonRef.addEventListener('click', function () {
	console.log(`You searched on ${textField.value}`);

	// I want to search through movies to find titles that match textfield.value
	let matchingMovies = movies.filter((movie) => {
		// return movie.title.toLocaleLowerCase().includes(textField.value.toLowerCase());
		let search = new RegExp(textField.value, 'i');
		return search.test(movie.title);
	});

	console.log('Matching movies:', matchingMovies);
});
