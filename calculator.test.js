import { expect, test } from '@jest/globals';
import { calculator } from './calculator';

// Add test
test('add - happy trail 1', () => {
  expect(calculator.add(5, 7)).toBe(12);
});

test('add - happy trail 2', () => {
  expect(calculator.add(15, 1000)).toBe(1015);
});

test('add - NaN 1', () => {
  expect(() => calculator.add('N', 3)).toThrowError();
});

test('add - NaN 2', () => {
  expect(() => calculator.add(3, 'N')).toThrowError();
});

test('add - lack argument', () => {
  expect(() => calculator.add('N')).toThrowError('Argument is missing!');
});

test('add - using zero', () => {
  expect(calculator.add(3, 0)).toBe(3);
});

test('add - using null', () => {
  expect(() => calculator.add(0, null)).toThrowError();
});

// Substract test
test('substract - happy trail 1', () => {
  expect(calculator.substract(7, 5)).toBe(2);
});

test('substract - happy trail 2', () => {
  expect(calculator.substract(15, 30)).toBe(-15);
});

test('substract - NaN', () => {
  expect(() => calculator.substract('n', 20)).toThrowError();
});
