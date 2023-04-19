import { capitalize } from './functions.js';

describe('test capitalize function', () => {
  test('capitalizes all lowercase string', () => {
    expect(capitalize('asdfasdf')).toMatch('Asdfasdf');
    expect(capitalize('milk')).toMatch('Milk');
    expect(capitalize('telephone')).toMatch('Telephone');
  });

  test('already capitalized words are unchanged', () => {
    expect(capitalize('Asdfasdf')).toMatch('Asdfasdf');
    expect(capitalize('Kindergarten')).toMatch('Kindergarten');
    expect(capitalize('Pizza')).toMatch('Pizza');
  });

  test('works on strings with spaces and special chars', () => {
    expect(capitalize('i ate a pizza')).toMatch('I ate a pizza');
    expect(capitalize('play it! it should work #_#')).toMatch('Play it! it should work #_#');
    expect(capitalize('I\'m already capitalized')).toMatch('I\'m already capitalized');
  });

  test('works on empty strings', () => {
    expect(capitalize('')).toMatch('');
  });

  test('works on one char strings', () => {
    expect(capitalize('a')).toMatch('A');
    expect(capitalize('aB')).toMatch('B');
    expect(capitalize('4')).toMatch('4');
    expect(capitalize('^')).toMatch('^');
  });
});
