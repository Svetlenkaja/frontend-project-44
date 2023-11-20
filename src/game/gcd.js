import {
  play, attempts,
} from '../index.js';

import {
  getRandomNumber, minOne, maxNumber,
} from '../util.js';

const condition = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (b > a) return findGcd(b, a);
  if (b === 0) return a;
  return findGcd(b, a % b);
};

const setRulesOfGame = () => {
  const rule = [];
  for (let i = 0; i < attempts; i += 1) {
    const a = getRandomNumber(minOne, maxNumber);
    const b = getRandomNumber(minOne, maxNumber);
    const question = `${a} ${b}`;
    const answer = findGcd(a, b);
    rule.push([question, answer.toString()]);
  }
  return rule;
};

export default () => {
  play(condition, setRulesOfGame());
};
