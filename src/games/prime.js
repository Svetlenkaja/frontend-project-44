import playGame from '../index.js';

import {
  getRandomNumber, minOne, maxNumber, generateAnswer,
} from '../utils.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(minOne, maxNumber);
  const answer = generateAnswer(isPrime(question));
  return [question, answer];
};

export default () => {
  playGame(rulesOfGame, getQuestionAndAnswer);
};
