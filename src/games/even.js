import playGame from '../index.js';

import {
  getRandomNumber, minOne, maxNumber, generateAnswer,
} from '../utils.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(minOne, maxNumber);
  const answer = generateAnswer(isEven(question));
  return [question, answer];
};

export default () => {
  playGame(rulesOfGame, getQuestionAndAnswer);
};
