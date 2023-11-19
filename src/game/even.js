import {
  game, getRandomNumber, minOne, maxNumber, attempts,
} from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const gameRule = () => {
  const rule = [];
  for (let i = 0; i < attempts; i += 1) {
    const question = getRandomNumber(minOne, maxNumber);
    const answer = isEven(question);
    rule.push([question, answer]);
  }
  return rule;
};

const even = () => {
  game(condition, gameRule());
};

export default even;
