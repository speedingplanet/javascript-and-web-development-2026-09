console.log('search-movies loaded.');
let buttonRef = document.querySelector('button');
let textField = document.querySelector('#search-title');

buttonRef.addEventListener('click', async function () {
	let searchText = textField.value;
	textField.value = '';
	document.querySelector('#search-message').textContent = `You searched on "${searchText}"`;
	console.log(`You searched on ${searchText}`);

	let matchingMovies = await searchMovies('title_like', searchText);
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

async function searchMovies(field, text) {
	try {
		let params = new URLSearchParams({
			[field]: text,
		});
		let response = await fetch(`http://localhost:8000/movies?${params.toString()}`);
		if (response.ok) {
			let movies = await response.json();
			return movies;
		} else {
			throw new Error('Bad status code:', response.status);
		}
	} catch (error) {
		console.error(error);
		throw error;
	}
}
