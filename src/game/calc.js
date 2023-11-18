import {
  game, getRandomNumber, max, attempts,
} from '../index.js';

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

const gameRule = () => {
  const rule = [];
  for (let i = 0; i < attempts; i += 1) {
    const numberOne = getRandomNumber(max);
    const numberTwo = getRandomNumber(max);
    const operation = operations[getRandomNumber(operations.length)];
    const question = `${numberOne} ${operation} ${numberTwo}`;
    const answer = calculate(numberOne, numberTwo, operation);
    rule.push([question, answer.toString()]);
  }
  return rule;
};

const calc = () => {
  game(condition, gameRule());
};

export default calc;
