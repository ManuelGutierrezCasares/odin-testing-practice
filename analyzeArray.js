export const analyzeArray = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Input is not an Array!');
  if (arr.length) {
    return {
      average: arr.reduce((acc, curr) => {
        if (typeof curr !== 'number') throw new Error(`${curr} is not a Number!`);
        return acc + curr;
      }, 0) / arr.length,
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: arr.length
    };
  } else {
    throw new Error('Array is empty!');
  }
};
