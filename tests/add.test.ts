import { StringCalculator } from '../src/add';

describe('String Calculator Milestone 1', () => {
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
    expect(calculator.add('100,100,44')).toBe(244);
  });

  test('Should handle new lines between numbers (instead of commas)', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  test('Should handle custom delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//;\n1;2')).toBe(3);
    expect(calculator.add('//&\n1&2')).toBe(3);
    expect(calculator.add('//-\n1-2')).toBe(3);
  });
  test('Should handle aesteric * char & number multiplication', () => {
    const calculator = new StringCalculator();
    expect(calculator.add(`//*\n1*2`)).toBe(2);
  });

  test('Should throw an error for negative numbers', () => {
    const calculator = new StringCalculator();

    expect(() => calculator.add('1,-2,3')).toThrow(
      'Negative numbers are not allowed: -2',
    );
  });

  test('Should include all negative numbers in the error message', () => {
    const calculator = new StringCalculator();

    expect(() => calculator.add('-1,-2,3')).toThrow(
      'Negative numbers are not allowed: -1, -2',
    );
  });
});

describe('String Calculator Milestone 2', () => {
  test('Should be able to handle delimiters of any length', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//[***]\n1***4***3')).toBe(8);
    expect(calculator.add('//[---]\n1---4---3')).toBe(8);
    expect(calculator.add('//[<<]\n1<<4<<3')).toBe(8);
  });

  test('Should allow multiple delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//[*][%]\n1*2%6')).toBe(9);
    expect(calculator.add('//[*][%]\n1*2%6')).toBe(9);
    expect(calculator.add('//[*))][%]\n1*))2%6')).toBe(9);
  });
  test('Should handle multiple delimiters longer than one char', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//[**][%%]\n1**2%%6')).toBe(9);
    expect(calculator.add('//[**]\n1**2**3')).toBe(6);
    expect(calculator.add('//[..][%%]\n1..2%%11')).toBe(14);
    expect(calculator.add('//[..][%%]\n1..2%%1999')).toBe(2002);
  });
});
