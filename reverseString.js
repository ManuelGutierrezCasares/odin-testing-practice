export const reverseString = (string) => {
  if (typeof string !== 'string' && typeof string !== 'number') {
    throw new Error('Input is not a string!');
  }
  typeof string === 'number' ? string = parseInt(string.toString().trim().split('').reverse().join('')) : string = string.trim().split('').reverse().join('');
  return string;
};
