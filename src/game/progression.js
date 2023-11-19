import {
  game, getRandomNumber, minZero, minOne, attempts,
} from '../index.js';

const condition = 'What number is missing in the progression?';
const max = 10;

const buildProgression = () => {
  const subsequence = [];
  const step = getRandomNumber(minOne, max);
  const first = getRandomNumber(minOne, max);
  subsequence.push(first);
  let last = first;
  for (let i = 0; i < max; i += 1) {
    last += step;
    subsequence.push(last);
  }
  return subsequence;
};

const buildQuestion = (arr, missing) => {
  let result = '';
  for (let i = 0; i < arr.length; i += 1) {
    result = (i === missing) ? `${result} ..` : `${result} ${arr[i]}`;
  }
  return result;
};

const gameRule = () => {
  const rule = [];
  for (let i = 0; i < attempts; i += 1) {
    const missing = getRandomNumber(minZero, max);

    const sequence = buildProgression();
    const question = buildQuestion(sequence, missing);
    const answer = sequence[missing];
    rule.push([question, answer.toString()]);
  }
  return rule;
};

const progression = () => {
  game(condition, gameRule());
};

export default progression;
