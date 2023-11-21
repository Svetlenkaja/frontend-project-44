import readlineSync from 'readline-sync';

export const attempts = 3;

const messageForCorrectAnswer = 'Correct!';
const messageForInCorrectAnswer = "Let's try again, ";

const playGame = (rulesOfGame, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(rulesOfGame);
  for (let i = 0; i < attempts; i += 1) {
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrect = userAnswer === answer;
    if (isCorrect) {
      console.log(messageForCorrectAnswer);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.)`);
      console.log(`${messageForInCorrectAnswer}${userName}!"`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
