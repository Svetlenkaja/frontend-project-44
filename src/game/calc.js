import {
  play, attempts,
} from '../index.js';

import {
  getRandomNumber, minZero, maxNumber,
} from '../util.js';

const condition = 'What is the result of the expression?';

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

const setRulesOfGame = () => {
  const rule = [];
  for (let i = 0; i < attempts; i += 1) {
    const numberOne = getRandomNumber(minZero, maxNumber);
    const numberTwo = getRandomNumber(minZero, maxNumber);
    const operation = operations[getRandomNumber(minZero, operations.length)];
    const question = `${numberOne} ${operation} ${numberTwo}`;
    const answer = calculate(numberOne, numberTwo, operation);
    rule.push([question, answer.toString()]);
  }
  return rule;
};

export default () => {
  play(condition, setRulesOfGame());
};
