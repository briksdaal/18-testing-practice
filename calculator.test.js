import calc from './calculator.js';

test('calc functions exist', () => {
  expect(calc.add).toBeTruthy();
  expect(calc.subtract).toBeTruthy();
  expect(calc.divide).toBeTruthy();
  expect(calc.multiply).toBeTruthy();
});
