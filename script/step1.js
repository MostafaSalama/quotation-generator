const app = {
	firstFragment: [
		'The old man',
		'The young boy',
		'The man in the street',
		'The old master',
		'Everyone in the city',
		'No one here',
	],
	secondFragment: [
		'will go by himself',
		'likes to play the game',
		'is going with me',
		'thinks that it can be done',
		'drinks something strange',
		'make good food',
	],
	thirdFragment: [
		'and no one cares',
		'but it is fine',
		'to make others happy',
		'although nothing come to it',
		'however it makes sense',
		'and everyone enjoys the moment',
	],
	/**
	 * generates random quote
	 * @returns {string}
	 */
	generateQuote() {
		const firstSegment = app.getRandomValueFromArray(app.firstFragment);
		const secondSegment = app.getRandomValueFromArray(app.secondFragment);
		const thirdSegment = app.getRandomValueFromArray(app.thirdFragment);
		return `${firstSegment} ${secondSegment} ${thirdSegment}`;
	},
	/**
	 * returns a random value from an array
	 * @param arr {Array}
	 * @returns {*}
	 */
	getRandomValueFromArray(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	},
};

// generate the quote and log it
const randomQuote = app.generateQuote();
console.log(randomQuote)

// generate button when clicked
// change the ui blockquote to have a random quote text on it
const generatorButton = document.getElementById('btn_generator');
generatorButton.addEventListener('click',()=>{
    // generate random quote
    // change the text of the block text
    document.getElementById('quote-text').innerHTML = app.generateQuote() ;
})
