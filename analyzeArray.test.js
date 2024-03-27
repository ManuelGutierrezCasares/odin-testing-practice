import { expect, test } from '@jest/globals';
import { analyzeArray } from './analyzeArray';

const tests = [
  {
    caseName: 'Happy Path',
    caseNumber: '1',
    separator: ' - ',
    array: [1, 2, 3],
    result: {
      average: 2,
      min: 1,
      max: 3,
      length: 3
    }
  },
  {
    caseName: 'Happy Path',
    caseNumber: '2',
    separator: ' - ',
    array: [10, 20, 30],
    result: {
      average: 20,
      min: 10,
      max: 30,
      length: 3
    }
  },
  {
    caseName: 'Happy Path',
    caseNumber: '3',
    separator: ' - ',
    array: [5, 7, 1],
    result: {
      average: (5 + 7 + 1) / 3,
      min: 1,
      max: 7,
      length: 3
    }
  },
  {
    caseName: 'Empty array',
    caseNumber: '4',
    separator: ' - ',
    array: [],
    result: Error('Array is empty!')
  },
  {
    caseName: 'Alpha value in array',
    caseNumber: '5',
    separator: ' - ',
    array: [15, 'p', 75],
    result: Error('p is not a Number!')
  },
  {
    caseName: 'Null value in array',
    caseNumber: '6',
    separator: ' - ',
    array: [null, 10, 75],
    result: Error('null is not a Number!')
  },
  {
    caseName: 'Undefined value in array',
    caseNumber: '7',
    separator: ' - ',
    array: [5, 10, undefined],
    result: Error('undefined is not a Number!')
  },
  {
    caseName: 'Wrong input, number instead of array',
    caseNumber: '8',
    separator: ' - ',
    array: 3,
    result: Error('Input is not an Array!')
  },
  {
    caseName: 'Wrong input, null instead of array',
    caseNumber: '9',
    separator: ' - ',
    array: null,
    result: Error('Input is not an Array!')
  }

];

tests.forEach((e) => {
  test(e.caseName + e.separator + e.caseNumber, () => {
    typeof e.result === 'object' && !(e.result instanceof Error)
      ? expect(analyzeArray(e.array)).toStrictEqual(e.result)
      : expect(() => analyzeArray(e.array)).toThrowError(e.result);
  });
});
