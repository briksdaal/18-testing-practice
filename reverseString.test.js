import reverseString from './reverseString.js';

test('reverses given strings', () => {
  expect(reverseString('asdfasdf')).toMatch('fdsafdsa');
  expect(reverseString('milk')).toMatch('klim');
  expect(reverseString('telephone')).toMatch('enohpelet');
  expect(reverseString('Interstate')).toMatch('etatsretnI');
  expect(reverseString('This is a full sentence')).toMatch('ecnetnes lluf a si sihT');
});

test('works on empty strings', () => {
  expect(reverseString('')).toMatch('');
});

test('works on one char strings', () => {
  expect(reverseString('a')).toMatch('a');
  expect(reverseString('4')).toMatch('4');
  expect(reverseString('P')).toMatch('P');
  expect(reverseString(' ')).toMatch(' ');
  expect(reverseString('_')).toMatch('_');
});
