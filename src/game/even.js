import {
  game, getRandomNumber, max, attempts,
} from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const gameRule = () => {
  const rule = [];
  for (let i = 0; i < attempts; i += 1) {
    const question = getRandomNumber(max);
    const answer = getEven(question);
    rule.push([question, answer]);
  }
  return rule;
};

const even = () => {
  game(condition, gameRule());
};

export default even;
