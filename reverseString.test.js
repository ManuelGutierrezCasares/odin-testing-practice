import { expect, test } from '@jest/globals';
import { reverseString } from './reverseString';

test('Wrong result 1', () => {
  expect(reverseString('Pedro')).toBe('ordeP');
});

test('Wrong result 2', () => {
  expect(reverseString('Julian')).toBe('nailuJ');
});

test('Wrong result 3', () => {
  expect(reverseString('Manuela')).toBe('aleunaM');
});

test('Wrong input - false', () => {
  expect(() => reverseString(false)).toThrowError();
});

test('Wrong input - true', () => {
  expect(() => reverseString(true)).toThrowError();
});

test('Input number', () => {
  expect(reverseString(568)).toBe(865);
});

test('Input number - as string', () => {
  expect(reverseString('4545568')).toBe('8655454');
});

test('Input number - as string', () => {
  expect(reverseString(' 4545568 ')).toBe('8655454');
});
