const app = {
	numberOfQuotes: 1,
	generatorType: 1,
	setValues(quotes, type) {
		this.numberOfQuotes = quotes;
		this.generatorType = type;
	},
	firstTypeQuotes: [],
	secondTypeQuotes: [],
	/**
	 * returns a random value from an array
	 * @param arr {Array}
	 * @returns {*}
	 */
	getRandomValueFromArray(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	},
};

const btn = document.getElementById('generate_btn');

btn.addEventListener('click', () => {
	const numberOfQuotesToGenerate = document.querySelector(
		'[name=num_quotes]:checked',
	);
	const generatorType = document.querySelector('[name=type]:checked');
	console.log(numberOfQuotesToGenerate.value);
	console.log(generatorType.value);
});
