import readlineSync from 'readline-sync';

export const attempts = 3;

const correctAnswer = 'Correct!';
const inCorrectAnswer = "Let's try again, ";

export const play = (condition, arrayRule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(condition);
  for (let i = 0; i < arrayRule.length; i += 1) {
    const ruleForStep = arrayRule[i];
    console.log(`Question: ${ruleForStep[0]}`);
    const answer = readlineSync.question('Your answer: ');
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
