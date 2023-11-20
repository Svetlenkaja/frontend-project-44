export const minZero = 0;
export const minOne = 1;
export const maxNumber = 100;

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const generateAnswer = (isRight) => (isRight ? 'yes' : 'no');
