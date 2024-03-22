import { expect, test } from '@jest/globals';
import { caesarCipher } from './caesarCipher';

const tests = [
  {
    caseName: 'Happy Trail',
    caseNumber: '1',
    separator: ' - ',
    text: 'a',
    shifter: 1,
    result: 'b'
  },
  {
    caseName: 'Happy Trail',
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
    caseName: 'Many characters',
    caseNumber: '4',
    separator: ' - ',
    text: 'abc',
    shifter: 29,
    result: 'def'
  },
  {
    caseName: 'Key bigger than 26',
    caseNumber: '5',
    separator: ' - ',
    text: 'xyz',
    shifter: 100,
    result: 'tuv'
  },
  {
    caseName: 'String with upper case',
    caseNumber: '6',
    separator: ' - ',
    text: 'XYZ',
    shifter: 22,
    result: 'TUV'
  },
  {
    caseName: 'String with upper case',
    caseNumber: '6',
    separator: ' - ',
    text: 'XyZ',
    shifter: 22,
    result: 'TuV'
  },
  {
    caseName: 'String with upper case',
    caseNumber: '6',
    separator: ' - ',
    text: 'ab, c',
    shifter: 1,
    result: 'bc, d'
  },
  {
    caseName: 'String with upper case',
    caseNumber: '6',
    separator: ' - ',
    text: ' ab-!-z ',
    shifter: 1,
    result: ' bc-!-a '
  }

];

tests.forEach((e) => {
  test(e.caseName + e.separator + e.caseNumber, () => {
    typeof e.result === 'string'
      ? expect(caesarCipher(e.text, e.shifter)).toBe(e.result)
      : expect(() => caesarCipher(e.text, e.shifter)).toThrowError(e.result);
  });
});
