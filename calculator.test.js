import { expect, test } from '@jest/globals';
import { calculator } from './calculator';

const tests = [
  {
    operation: 'add',
    separator: ' - ',
    caseName: 'happy trail 1',
    operatorOne: 5,
    operatorTwo: 7,
    result: 12
  },
  {
    operation: 'add',
    separator: ' - ',
    caseName: 'happy trail 2',
    operatorOne: 15,
    operatorTwo: 1000,
    result: 1015
  },
  {
    operation: 'add',
    separator: ' - ',
    caseName: 'NaN 1',
    operatorOne: 'N',
    operatorTwo: 3,
    result: Error
  },
  {
    operation: 'add',
    separator: ' - ',
    caseName: 'NaN 2',
    operatorOne: 3,
    operatorTwo: 'N',
    result: Error
  },
  {
    operation: 'add',
    separator: ' - ',
    caseName: 'lack argument',
    operatorOne: 'N',
    operatorTwo: undefined,
    result: Error('Argument is missing!')
  },
  {
    operation: 'add',
    separator: ' - ',
    caseName: 'using zero',
    operatorOne: 3,
    operatorTwo: 0,
    result: 3
  },
  {
    operation: 'add',
    separator: ' - ',
    caseName: 'using null',
    operatorOne: 0,
    operatorTwo: null,
    result: Error
  },
  {
    operation: 'substract',
    separator: ' - ',
    caseName: 'happy trail 1',
    operatorOne: 7,
    operatorTwo: 5,
    result: 2
  },
  {
    operation: 'substract',
    separator: ' - ',
    caseName: 'happy trail 2',
    operatorOne: 15,
    operatorTwo: 30,
    result: -15
  },
  {
    operation: 'substract',
    separator: ' - ',
    caseName: 'Nan 1',
    operatorOne: 'n',
    operatorTwo: 200,
    result: Error
  },
  {
    operation: 'substract',
    separator: ' - ',
    caseName: 'Nan 2',
    operatorOne: 200,
    operatorTwo: 'n',
    result: Error
  },
  {
    operation: 'substract',
    separator: ' - ',
    caseName: 'lack argument',
    operatorOne: 'N',
    operatorTwo: undefined,
    result: Error('Argument is missing!')
  },
  {
    operation: 'substract',
    separator: ' - ',
    caseName: 'using zero',
    operatorOne: 3,
    operatorTwo: 0,
    result: 3
  },
  {
    operation: 'substract',
    separator: ' - ',
    caseName: 'using null',
    operatorOne: null,
    operatorTwo: 15,
    result: Error
  },
  {
    operation: 'divide',
    separator: ' - ',
    caseName: 'happy trail 1',
    operatorOne: 10,
    operatorTwo: 5,
    result: 2
  },
  {
    operation: 'divide',
    separator: ' - ',
    caseName: 'happy trail 2',
    operatorOne: 20,
    operatorTwo: 5,
    result: 4
  },
  {
    operation: 'divide',
    separator: ' - ',
    caseName: 'Nan 1',
    operatorOne: 'n',
    operatorTwo: 20,
    result: Error
  },
  {
    operation: 'divide',
    separator: ' - ',
    caseName: 'Nan 2',
    operatorOne: 200,
    operatorTwo: 'n',
    result: Error
  },
  {
    operation: 'divide',
    separator: ' - ',
    caseName: 'lack argument',
    operatorOne: 'N',
    operatorTwo: undefined,
    result: Error('Argument is missing!')
  },
  {
    operation: 'divide',
    separator: ' - ',
    caseName: 'using zero',
    operatorOne: 0,
    operatorTwo: 3,
    result: 0
  },
  {
    operation: 'divide',
    separator: ' - ',
    caseName: 'by zero',
    operatorOne: 3,
    operatorTwo: 0,
    result: Error('Cannot divide by Zero!')
  },
  {
    operation: 'divide',
    separator: ' - ',
    caseName: 'using null',
    operatorOne: null,
    operatorTwo: 15,
    result: Error
  },
  {
    operation: 'multiply',
    separator: ' - ',
    caseName: 'happy trail 1',
    operatorOne: 7,
    operatorTwo: 5,
    result: 35
  },
  {
    operation: 'multiply',
    separator: ' - ',
    caseName: 'happy trail 2',
    operatorOne: 2,
    operatorTwo: -30,
    result: -60
  },
  {
    operation: 'multiply',
    separator: ' - ',
    caseName: 'Nan 1',
    operatorOne: 'n',
    operatorTwo: 20,
    result: Error
  },
  {
    operation: 'multiply',
    separator: ' - ',
    caseName: 'Nan 2',
    operatorOne: 200,
    operatorTwo: 'n',
    result: Error
  },
  {
    operation: 'multiply',
    separator: ' - ',
    caseName: 'lack argument',
    operatorOne: 'N',
    operatorTwo: undefined,
    result: Error('Argument is missing!')
  },
  {
    operation: 'multiply',
    separator: ' - ',
    caseName: 'using zero',
    operatorOne: 3,
    operatorTwo: 0,
    result: 0
  },
  {
    operation: 'multiply',
    separator: ' - ',
    caseName: 'using null',
    operatorOne: null,
    operatorTwo: 15,
    result: Error
  }
];

tests.forEach((e) => {
  test(e.operation + e.separator + e.caseName, () => {
    typeof e.result === 'number'
      ? expect(calculator[e.operation](e.operatorOne, e.operatorTwo)).toBe(e.result)
      : expect(() => calculator[e.operation](e.operatorOne, e.operatorTwo)).toThrowError(e.result);
  });
});
