import {
  game, getRandomNumber, minOne, maxNumber, attempts,
} from '../index.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return num !== 1 ? 'yes' : 'no';
}

const gameRule = () => {
  const rule = [];
  for (let i = 0; i < attempts; i += 1) {
    const question = getRandomNumber(minOne, maxNumber);
    const answer = isPrime(question);
    rule.push([question, answer]);
  }
  return rule;
};

const prime = () => {
  game(condition, gameRule());
};

export default prime;
