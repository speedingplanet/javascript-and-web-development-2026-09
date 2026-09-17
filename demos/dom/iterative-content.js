// import { movies } from '../../data/movies-module.js';
import data from '../../data/all-data.json' with { type: 'json' };

const { movies } = data;

// Efficient, somewhat verbose
function useCreateElement() {
	console.log('Using document.createElement');
	const root = document.querySelector('#create-element');

	const list = document.createElement('ul');

	// Using for-of
	for (let movie of movies) {
		const item = document.createElement('li');
		// item.textContent = `${movie.title} (${movie.year})`;
		item.append(`${movie.title} (${movie.year})`);

		// All elements have append(), prepend(), before(), after()
		// Equivalent to afterbegin, beforeend, beforebegin, afterend in insertAdjacentHTML
		// list.append(item);
		list.append(item);
	}

	// One repaint
	// root.append(list);
	root.replaceChildren(list);
}

// Efficient, less verbose
function useInsertAdjacentHTML() {
	console.log('Using element.insertAdjacentHTML()');
	const root = document.querySelector('#insert-adjacent-html');

	const list = document.createElement('ul');
	for (let movie of movies) {
		list.insertAdjacentHTML('beforeEnd', `<li>${movie.title} (${movie.year})</li>`);
	}

	// One repaint
	// root.append(list);
	root.replaceChildren(list);
}

// Inefficient, also easier to break
function useInnerHTML() {
	console.log('Using element.innerHTML');
	const root = document.querySelector('#inner-html');

	// Empty out the element
	// forces a repaint
	root.innerHTML = '';

	let list = '<ul>';
	for (let movie of movies) {
		list = list + `<li>${movie.title} (${movie.year})</li>`;
	}
	// movies.forEach((movie) => (list += `<li>${movie.title} (${movie.year})</li>`));
	list += '</ul>';

	// One more repaint, may trigger document-wide repaint
	root.innerHTML = list;
}

useCreateElement();
useInsertAdjacentHTML();
useInnerHTML();
