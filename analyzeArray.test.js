import { expect, test } from '@jest/globals';
import { analyzeArray } from './analyzeArray';

test('test1', () => {
  expect(analyzeArray([1, 2, 3])).toStrictEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3
  });
});
