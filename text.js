var text = [
	'Detroit is the largest city in the state of Michigan.', 
	'Detroit is the birthplace of Motown and electronic music.', 
	'The Tigers, Lions, Red Wings, and Pistons are all Detroit sports teams.', 
	"Detroit houses the largest and oldest farmer's market in the United States.", 
	"Belle Isle Park is larger than New York's Cental Park"
];

function randomizeText() {
	return text[Math.floor(Math.random() * text.length)];
}

module.exports = {
	randomizeText: randomizeText,
	text: text
}