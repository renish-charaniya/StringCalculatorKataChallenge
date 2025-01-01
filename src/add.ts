export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }

    const delimiters = [',', '\n'];
    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    let numbersWithoutCustomDelimiters = numbers;

    if (customDelimiterMatch) {
      const customDelimiter = customDelimiterMatch[1];
      if (customDelimiter.startsWith('[') && customDelimiter.endsWith(']')) {
        const multipleDelimiters = customDelimiter
          .slice(1, -1)
          .split('][')
          .map(this.escapeRegex);
        delimiters.push(...multipleDelimiters);
      } else {
        delimiters.push(this.escapeRegex(customDelimiter));
      }
      numbersWithoutCustomDelimiters = numbers.slice(
        customDelimiterMatch[0].length,
      );
    }

    const delimiterRegex = new RegExp(delimiters.join('|'));
    const negativeNumbers: number[] = [];
    const numArray = numbersWithoutCustomDelimiters
      .split(delimiterRegex)
      .map((num) => {
        const parsedNum = parseInt(num, 10);
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

    return numArray.reduce((sum, num) => sum + num, 0);
  }

  private escapeRegex(delimiter: string): string {
    // Src - https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript/63838890#63838890
    return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
