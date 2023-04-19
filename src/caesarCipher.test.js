import caesarCipher from './caesarCipher.js';

test('one char string and shift of 1', () => {
  expect(caesarCipher('a', 1))
    .toMatch('b');
  expect(caesarCipher('b', 1))
    .toMatch('c');
});

test('char combinations and bigger shifts', () => {
  expect(caesarCipher('abc', 3))
    .toMatch('def');
  expect(caesarCipher('asdfdaef', 5))
    .toMatch('fxikifjk');
  expect(caesarCipher('hewiuhrqmqwe', 2))
    .toMatch('jgykwjtsosyg');
});

test('text with spaces', () => {
  expect(caesarCipher('defend the east wall of the castle', 1))
    .toMatch('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('lowercase and uppercase combinations', () => {
  expect(caesarCipher('More ThaN One Case', 11))
    .toMatch('Xzcp EslY Zyp Nldp');
});

test('z + 1 wraps to a', () => {
  expect(caesarCipher('z', 1))
    .toMatch('a');
  expect(caesarCipher('y', 3))
    .toMatch('b');
  expect(caesarCipher('Z', 1))
    .toMatch('A');
});

test('negative shift', () => {
  expect(caesarCipher('anything confidential to say', -6))
    .toMatch('uhsnbcha wihzcxyhncuf ni mus');
});

test('combination of negative shift, symbols, and cases', () => {
  expect(caesarCipher('ReplaceD by a lEtter$some fixed@number of positions!!', -8))
    .toMatch('JwhdsuwV tq s dWllwj$kgew xapwv@fmetwj gx hgkalagfk!!');
});

test('big shifts', () => {
  expect(caesarCipher('Down the alphabet', 451))
    .toMatch('Mxfw cqn juyqjknc');
  expect(caesarCipher('Down the alphabet', -451))
    .toMatch('Ufne kyv rcgyrsvk');
});
