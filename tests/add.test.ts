import { StringCalculator } from '../src/add';

describe('String Calculator', () => {
  test('Should return Zero(0) for empty string input', () => {
    const calculator = new StringCalculator();
    const result = calculator.add('');
    expect(result).toBe(0);
  });

  test('Should return number for a single input', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1')).toBe(1);
    expect(calculator.add('26')).toBe(26);
  });

  test('Should return sum of two numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('5,15')).toBe(20);
    expect(calculator.add('25,75')).toBe(100);
  });

  test('Should return sum of all the numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('100,33,44')).toBe(177);
  });
});
