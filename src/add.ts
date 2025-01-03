export class StringCalculator {
  add(input: string): number {
    if (input === '') {
      return 0;
    }

    const delimiters = this.getDelimiter(input);
    const parsableNumbers = this.removeDelimiterDeclaration(input);
    const numbers = this.getNumbers(parsableNumbers, delimiters);

    return this.performOperation(numbers, delimiters);
  }

  private getDelimiter(input: string): RegExp {
    const delimiters: string[] = [];
    const multipleDelimiterRegexp = /(?:^\/\/)?\[([^\[\]]+)\]/g;
    const singleDelimiterRegexp = /^\/\/(.+)\n/;

    const matches = input.matchAll(multipleDelimiterRegexp);
    for (const match of matches) {
      delimiters.push(this.escapeRegex(match[1]));
    }

    if (delimiters.length > 0) {
      return new RegExp(delimiters.join('|'));
    }

    const singleMatch = input.match(singleDelimiterRegexp);
    if (singleMatch && singleMatch[1]) {
      // TODO check if delimiter is *
      delimiters.push(this.escapeRegex(singleMatch[1]));
    }

    if (delimiters.length === 0) {
      return /,|\n/;
    }

    return new RegExp(delimiters.join('|'));
  }

  private removeDelimiterDeclaration(input: string): string {
    const delimiterRegExp = /^(\/\/.*\n)/;
    return input.replace(delimiterRegExp, '');
  }

  private getNumbers(input: string, delimiter: RegExp): number[] {
    return input
      .split(delimiter)
      .filter((n) => n !== '')
      .map((n) => parseInt(n, 10));
  }

  private performOperation(numbers: number[], delimiters: RegExp): number {
    const negatives: number[] = [];

    // Determine the operation based on the delimiter
    const isMultiplication = delimiters.source === '\\*';
    const initialValue = isMultiplication ? 1 : 0;

    const result = numbers.reduce((accumulator, n) => {
      if (n < 0) {
        negatives.push(n);
        return accumulator;
      }
      return isMultiplication ? accumulator * n : accumulator + n;
    }, initialValue);

    if (negatives.length > 0) {
      throw new Error(
        `Negative numbers are not allowed: ${negatives.join(', ')}`,
      );
    }

    return result;
  }

  private escapeRegex(delimiter: string): string {
    // Escapes special regex characters
    return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
