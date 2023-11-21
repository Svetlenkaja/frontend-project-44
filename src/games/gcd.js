import playGame from '../index.js';

import {
  getRandomNumber, minOne, maxNumber,
} from '../utils.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (b > a) return findGcd(b, a);
  if (b === 0) return a;
  return findGcd(b, a % b);
};

export const getQuestionAndAnswer = () => {
  const a = getRandomNumber(minOne, maxNumber);
  const b = getRandomNumber(minOne, maxNumber);
  const question = `${a} ${b}`;
  const answer = findGcd(a, b);
  return [question, answer.toString()];
};

export default () => {
  playGame(rulesOfGame, getQuestionAndAnswer);
};
