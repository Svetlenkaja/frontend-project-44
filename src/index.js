import readlineSync from 'readline-sync';

export const attempts = 3;

export const minZero = 0;
export const minOne = 1;
export const maxNumber = 100;

const correctAnswer = 'Correct!';
const inCorrectAnswer = "Let's try again, ";

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userAnswer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userAnswer}`);
  return userAnswer;
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

export const game = (condition, arrayRule) => {
  const userName = greeting();
  console.log(condition);
  for (let i = 0; i < arrayRule.length; i += 1) {
    const ruleForStep = arrayRule[i];
    const answer = askQuestion(ruleForStep[0]);
    const isCorrect = answer === ruleForStep[1];
    if (isCorrect) {
      console.log(correctAnswer);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ruleForStep[1]}'.)`);
      console.log(`${inCorrectAnswer}${userName}!"`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
