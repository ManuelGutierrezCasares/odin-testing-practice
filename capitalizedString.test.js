import { expect, test } from '@jest/globals';
import { capitalizedString } from './capitalizedString';

test('Wrong capitalization 1', () => {
  expect(capitalizedString('pedro')).toBe('Pedro');
});

test('Wrong capitalization 2', () => {
  expect(capitalizedString('PEDRO')).toBe('Pedro');
});

test('Wrong capitalization 3', () => {
  expect(capitalizedString('pEdro')).toBe('Pedro');
});

test('Wrong capitalization 4', () => {
  expect(capitalizedString(' pedro')).toBe('Pedro');
});

test('Wrong capitalization 5', () => {
  expect(capitalizedString('pedro ')).toBe('Pedro');
});

test('Wrong input - false', () => {
  expect(() => capitalizedString(false)).toThrowError();
});

test('Wrong input - true', () => {
  expect(() => capitalizedString(true)).toThrowError();
});

test('Wrong input - number', () => {
  expect(() => capitalizedString(5)).toThrowError();
});
