export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }

    const delimiters = new Array<string>(',', '\n');
    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    let numbersWithoutCustomDelimiters = numbers;
    if (customDelimiterMatch) {
      delimiters.push(customDelimiterMatch[1]);
      numbersWithoutCustomDelimiters = numbers.slice(
        customDelimiterMatch[0].length,
      );
    }

    const delimiterRegex = new RegExp(`[${delimiters.join('')}]`);
    const negativeNumbers = new Array<number>();
    const numArray = numbersWithoutCustomDelimiters
      .split(delimiterRegex)
      .map((num) => {
        const parsedNum = parseInt(num);
        if (parsedNum < 0) {
          negativeNumbers.push(parsedNum);
        }
        return parsedNum;
      });

    if (negativeNumbers.length) {
      throw new Error(
        `Negative numbers are not allowed: ${negativeNumbers.join(', ')}`,
      );
    }

    return numArray.reduce((sum, num) => sum + num);
  }
}
