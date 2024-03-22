export const calculator = {
  add: (a, b) => {
    if (a === undefined || b === undefined) throw new Error('Argument is missing!');
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input is not numeric!');
    }
    return a + b;
  },
  substract: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Input is not numeric!');
    return a - b;
  }

};
