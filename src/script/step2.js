const app = {
	numberOfQuotes: 1,
	generatorType: 1,
	/**
	 *
	 * @param quotes {number} number of quotes to generate
	 * @param type {number} type of quotes generator 1 || 2
	 */
	setValues(quotes, type) {
		this.numberOfQuotes = quotes;
		this.generatorType = type;
	},
	firstTypeQuotes: [
		[
			'You have to work hard',
			'Everyone need to learn and discover things',
			'Learn how to set goals',
			'Go forward',
			'Always measure what you do',
			"Say no to things that doesn't matter",
			'Create Good Environment',
		],
		[
			'to make your life better,',
			'to get what you want,',
			'to become happy,',
			'to feel good,',
			'to achieve the goals,',
			'to seek the top of the mountain,',
			'to have what you need',
		],
		[
			'and live the life they want',
			'and see the things happen around',
			'and achieve what you think of',
			'and make the world better',
			'and generate new ideas and solutions',
			'and solve our world problems',
			'and make the life we want',
		],
	],
	secondTypeQuotes: [
		[
			'The cat sings the songs',
			'The dog dances very good',
			'The elephant is happy',
			'The duck says wak wak',
			'The rabbit is running funny',
			'The rat plays the game',
			'The monkey eats the banana',
		],
		[
			'to make us laugh,',
			'while no one is dancing,',
			'and we run with it,',
			'and says jokes,',
			'and everyone is happy,',
			'inside the tree,',
			'in the zoo,',
		],
		[
			'and no one is watching.',
			'and everything is funny.',
			'and who makes it like that.',
			'it feels good.',
			'it is so funny.',
			'you have to see it.',
			'everyone joins the party.',
		],
	],
	/**
	 *
	 * @returns {[]}
	 */
	generateRandomQuotes() {
		// default types of quote is the first type
		let quotesTypeArray = this.firstTypeQuotes;
		// array to store the random generated quotes
		const randomQuotes = [];
		// if the user choose type 2
		// we change it
		if (this.generatorType === 2) {
			quotesTypeArray = this.secondTypeQuotes;
		}
		for (let i = 0; i < this.numberOfQuotes; i++) {
			randomQuotes.push(this.generateRandomQuote(quotesTypeArray));
		}
		return randomQuotes;
	},
	/**
	 * generate random quote from a specific array with 3 arrays on it
	 * @param arr {Array} array that has 3 arrays inside it
	 * @returns {string} the random quote string
	 */
	generateRandomQuote(arr) {
		const firstSegment = app.getRandomValueFromArray(arr[0]);
		const secondSegment = app.getRandomValueFromArray(arr[1]);
		const thirdSegment = app.getRandomValueFromArray(arr[2]);
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

app.setValues(3, 2);
console.log(app.generateRandomQuotes());
const btn = document.getElementById('generate_btn');

btn.addEventListener('click', () => {
	// number of quotes chosen by the user
	const numberOfQuotesToGenerate = parseInt(
		document.querySelector('[name=num_quotes]:checked').value,
	);
	// type of generator one or two
	const generatorType = parseInt(document.querySelector('[name=type]:checked').value);

	app.setValues(numberOfQuotesToGenerate,generatorType);

	// generate the random quotes
    const randomQuotes = app.generateRandomQuotes() ;
    console.log(randomQuotes);
	// reflect the changes on the user interface
    updateUI(randomQuotes)

});

/**
 * update the user interface and create the div elements
 * for the list
 * @param arr {Array}
 */
function updateUI(arr) {
    // select the quote-list element
    const quoteList = document.querySelector('.quote-list') ;
    quoteList.innerHTML = '' ; 
    for (let element of arr) {
        const div = document.createElement('div');
        div.className = 'quote-item';
        // paragraph that will hold the text of the quote
        const p = document.createElement('p') ;
        p.innerText = element ;

        // image icon to copy the content when clicked
        const copySpan = document.createElement('span');
        copySpan.className = 'copy-icon' ;
        const imgIcon = document.createElement('img') ;
        imgIcon.className = 'copy-image' ;
        imgIcon.src = './img/copy-4.png';
        imgIcon.title = 'click to copy';
        imgIcon.alt = 'copy to clipboard' ;
        copySpan.appendChild(imgIcon)  ;

        div.appendChild(p) ;
        div.appendChild(copySpan) ;
        quoteList.appendChild(div);
    }
}
