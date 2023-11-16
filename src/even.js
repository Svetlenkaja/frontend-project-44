import readlineSync from 'readline-sync';

const attempts = 3;
const limit = 100;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userAnswer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userAnswer}`);
  return userAnswer;
};

const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

const checkAnswer = (num, answer) => {
  const isEven = num % 2 === 0 ? 'yes' : 'no';
  return answer === isEven;
};

const gameEven = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < attempts; i += 1) {
    const number = getRandomNumber(limit);

    console.log(`Questions: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (!checkAnswer(number, userAnswer)) {
      return `Let's try again, ${userName}!"`;
    }
    console.log('Correct!');
  }
  return (`Congratulations, ${userName}!`);
};

export default gameEven;
