export const calculator = {
  add: (a, b) => {
    if (a === undefined || b === undefined) throw new Error('Argument is missing!');
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input is not numeric!');
    }
    return a + b;
  },
  substract: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Argument is missing!');
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input is not numeric!');
    }
    return a - b;
  },
  divide: (a, b) => {
    if (b === 0) throw new Error('Cannot divide by Zero!');
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Argument is missing!');
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input is not numeric!');
    }
    return a / b;
  },
  multiply: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Argument is missing!');
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input is not numeric!');
    }
    return a * b;
  }

};
