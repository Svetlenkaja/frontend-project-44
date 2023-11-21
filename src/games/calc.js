import playGame from '../index.js';

import {
  getRandomNumber, minZero, maxNumber,
} from '../utils.js';

const rulesOfGame = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculate = (num1, num2, oper) => {
  switch (oper) {
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    case '*':
      return Number(num1) * Number(num2);
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const numberOne = getRandomNumber(minZero, maxNumber);
  const numberTwo = getRandomNumber(minZero, maxNumber);
  const operation = operations[getRandomNumber(minZero, operations.length)];
  const question = `${numberOne} ${operation} ${numberTwo}`;
  const answer = calculate(numberOne, numberTwo, operation);
  return [question, answer.toString()];
};

export default () => {
  playGame(rulesOfGame, getQuestionAndAnswer);
};
