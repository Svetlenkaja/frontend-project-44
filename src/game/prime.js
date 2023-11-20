import {
  play, attempts,
} from '../index.js';

import {
  getRandomNumber, minOne, maxNumber,
} from '../util.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

const setRulesOfGame = () => {
  const rule = [];
  for (let i = 0; i < attempts; i += 1) {
    const question = getRandomNumber(minOne, maxNumber);
    const answer = isPrime(question) ? 'yes' : 'no';
    rule.push([question, answer]);
  }
  return rule;
};

export default () => {
  play(condition, setRulesOfGame());
};
