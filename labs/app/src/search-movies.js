import { movies } from '../../../data/all-data.json' with { type: 'json' };

console.log('search-movies loaded.');
let buttonRef = document.querySelector('button');
let textField = document.querySelector('#search-title');

buttonRef.addEventListener('click', function () {
	let searchText = textField.value;
	textField.value = '';
	document.querySelector('#search-message').textContent = `You searched on "${searchText}"`;
	console.log(`You searched on ${searchText}`);

	// I want to search through movies to find titles that match searchText
	let matchingMovies = movies.filter((movie) => {
		// return movie.title.toLocaleLowerCase().includes(searchText.toLowerCase());
		let search = new RegExp(searchText, 'i');
		return search.test(movie.title);
	});

	let target = document.querySelector('.grid-body');
	let rows = matchesToRows(matchingMovies);
	target.replaceChildren(...rows);
});

function matchesToRows(matches) {
	let fields = ['title', 'year', 'rating'];
	let rows = [];
	for (let match of matches) {
		let row = document.createElement('div');
		row.classList.add('grid-row');
		for (let field of fields) {
			row.insertAdjacentHTML('beforeend', `<div class="grid-cell">${match[field]}</div>`);
		}
		rows.push(row);
	}
	return rows;
}
