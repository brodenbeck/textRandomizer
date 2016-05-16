var text = ['quote 1', 'quote 2', 'quote 3'];

function randomizeText() {
	return text[Math.floor(Math.random() * text.length)];
}

module.exports = {
	randomizeText: randomizeText
}