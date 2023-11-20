import {
  play, attempts,
} from '../index.js';

import {
  getRandomNumber, minOne, maxNumber, generateAnswer,
} from '../util.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const setRulesOfGame = () => {
  const rule = [];
  for (let i = 0; i < attempts; i += 1) {
    const question = getRandomNumber(minOne, maxNumber);
    const answer = generateAnswer(isEven(question));
    rule.push([question, answer]);
  }
  return rule;
};

export default () => {
  play(condition, setRulesOfGame());
};
