import { expect, test } from '@jest/globals';
import { caesarCipher } from './caesarCipher';

const tests = [
  {
    caseName: 'Happy Path',
    caseNumber: '1',
    separator: ' - ',
    text: 'a',
    shifter: 1,
    result: 'b'
  },
  {
    caseName: 'Happy Path',
    caseNumber: '2',
    separator: ' - ',
    text: 'b',
    shifter: 2,
    result: 'd'
  },
  {
    caseName: 'Wrap',
    caseNumber: '3',
    separator: ' - ',
    text: 'z',
    shifter: 1,
    result: 'a'
  },
  {
    caseName: 'Happy Path: Many characters',
    caseNumber: '4',
    separator: ' - ',
    text: 'abc',
    shifter: 29,
    result: 'def'
  },
  {
    caseName: 'Happy Path: Key bigger than 26',
    caseNumber: '5',
    separator: ' - ',
    text: 'xyz',
    shifter: 100,
    result: 'tuv'
  },
  {
    caseName: 'Happy Path: String with upper case',
    caseNumber: '6',
    separator: ' - ',
    text: 'XYZ',
    shifter: 22,
    result: 'TUV'
  },
  {
    caseName: 'Happy Path: String with upper case',
    caseNumber: '7',
    separator: ' - ',
    text: 'XyZ',
    shifter: 22,
    result: 'TuV'
  },
  {
    caseName: 'Happy Path: String with upper case',
    caseNumber: '8',
    separator: ' - ',
    text: 'ab, c',
    shifter: 1,
    result: 'bc, d'
  },
  {
    caseName: 'Happy Path: String with upper case',
    caseNumber: '9',
    separator: ' - ',
    text: ' ab-!-z ',
    shifter: 1,
    result: ' bc-!-a '
  },
  {
    caseName: 'Lack arguments: both',
    caseNumber: '10',
    separator: ' - ',
    text: undefined,
    shifter: undefined,
    result: Error('Missing arguments!')
  },
  {
    caseName: 'Lack arguments: text',
    caseNumber: '11',
    separator: ' - ',
    text: undefined,
    shifter: 1,
    result: Error('Missing arguments!')
  },
  {
    caseName: 'Lack arguments: shifter',
    caseNumber: '12',
    separator: ' - ',
    text: 'XyZ',
    shifter: undefined,
    result: Error('Missing arguments!')
  },
  {
    caseName: 'Wrong input: text: array instead of string',
    caseNumber: '13',
    separator: ' - ',
    text: ['XyZ'],
    shifter: 1,
    result: Error('Wrong type of input!')
  },
  {
    caseName: 'Wrong input: shifter: string instead of number',
    caseNumber: '14',
    separator: ' - ',
    text: 'XyZ',
    shifter: 'hi',
    result: Error('Wrong type of input!')
  }

];

tests.forEach((e) => {
  test(e.caseName + e.separator + e.caseNumber, () => {
    typeof e.result === 'string'
      ? expect(caesarCipher(e.text, e.shifter)).toBe(e.result)
      : expect(() => caesarCipher(e.text, e.shifter)).toThrowError(e.result);
  });
});
