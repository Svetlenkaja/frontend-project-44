import {
  game, getRandomNumber, max, attempts,
} from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (b > a) return findGcd(b, a);
  if (b === 0) return a;
  return findGcd(b, a % b);
};

const gameRule = () => {
  const rule = [];
  for (let i = 0; i < attempts; i += 1) {
    const a = getRandomNumber(max);
    const b = getRandomNumber(max);
    const question = `${a} ${b}`;
    const answer = findGcd(a, b);
    rule.push([question, answer.toString()]);
  }
  return rule;
};

const gcd = () => {
  game(condition, gameRule());
};

export default gcd;
