const ball = document.querySelector('.ball-img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const randomAnswers = [
	'Beyond doubt.',
	'Definitely yes.',
	'No doubt.',
	'Yes, absolutely.',
	'You can count on it.',
	'As I see it, yes.',
	'Likely.',
	'Good prospects.',
	'Signs point to yes.',
	'Yes.',
	'Answer is unclear, try again.',
	'Ask later.',
	'Better not tell you now.',
	'Cannot predict now.',
	'Concentrate and ask again.',
	'Don’t count on it.',
	'My answer is no.',
	'Prospects are not very good.',
	'Very doubtful.',
	'No, don’t even think about it.',
];

const checkInput = (e) => {
	// Check if Enter is pressed or the ball is clicked
    if (e.key === 'Enter' || e.type === 'click') {
        const question = input.value;
        error.textContent = '';
        // If the input field is empty
		if (question === '') {
            error.textContent = 'Enter your question!';
			answer.textContent = '';
			return;
		}
        
        // If the question does not end with a question mark
		if (!question.endsWith('?')) {
			error.textContent = 'It must be a question.';
			answer.textContent = '';
			return;
		}
        // Random selection of an array element by index
		const i = Math.floor(Math.random() * randomAnswers.length);
		const result = randomAnswers[i];
		answer.textContent = result;

        // Adding the animation class and removing it afterward so it can be triggered again
		ball.classList.add('shake-animation');
		setTimeout(() => ball.classList.remove('shake-animation'), 1000);

	}
};

// Add event listeners for Enter key and clicking the ball
input.addEventListener('keypress', checkInput);
ball.addEventListener('click', checkInput);
