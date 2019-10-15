import categories from './categories/_categories.js';
import sortedColors from '../../data/quantumColorsSorted'

const contents = JSON.stringify(categories.map(color => {
	color.nearestColor = sortedColors[color.slug][0]
	
	return color
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents)
}