import categories from './_categories.js';

const contents = JSON.stringify(categories.map(color => {
	return color;
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}