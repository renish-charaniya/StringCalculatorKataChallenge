# String Calculator Kata Challenge

This project implements a string calculator to demonstrate how to parse and compute sums of numbers from a string input with custom delimiters. The program supports both single-character and multi-character delimiters, as well as handling of negative numbers and invalid inputs.


<details>

  <summary>Problem Statement</summary>

  Before you start: 
Try not to read ahead.

Do one task at a time. The trick is to learn to work incrementally.

Make sure you only test for correct inputs. there is no need to test for invalid inputs for this kata

String Calculator

Create a simple String calculator with a method signature:

```int Add(string numbers)```

The method can take up to two numbers, separated by commas, and will return their sum. 
for example “” or “1” or “1,2” as inputs.
(for an empty string it will return 0) 
Hints:

 - Start with the simplest test case of an empty string and move to one and two numbers
 - Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
 - Remember to refactor after each passing test

> Allow the Add method to handle an unknown amount of numbers

>Allow the Add method to handle new lines between numbers (instead of commas).
```the following input is ok: “1\n2,3” (will equal 6)```
```the following input is NOT ok: “1,\n” (not need to prove it - just clarifying)```

> Support different delimiters
to change a delimiter, the beginning of the string will contain a separate line that looks like this: “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
the first line is optional. all existing scenarios should still be supported

>Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed. 
if there are multiple negatives, show all of them in the exception message.

STOP HERE if you are a beginner. Continue if you can finish the steps so far in less than 30 minutes.

Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2

```Delimiters can be of any length with the following format: “//[delimiter]\n” for example: “//[***]\n1***2***3” should return 6```

```Allow multiple delimiters like this: “//[delim1][delim2]\n” for example “//[*][%]\n1*2%3” should return 6.```

make sure you can also handle multiple delimiters with length longer than one char
  

</details>

## Features

- Supports multiple delimiters, including single-character (`;`, `,`, etc.) and multi-character delimiters (`***`, `[***]`, etc.).
- Ignores invalid numbers by treating them as `0`.
- Throws an error if negative numbers are present in the input.
- Handles empty strings and returns `0` for no numbers.
  
## Problem Description

The `StringCalculator` class implements the following functionality:

1. Parse a string of numbers separated by delimiters (e.g., commas, newlines, or custom delimiters).
2. Return the sum of all valid numbers.
3. If any negative numbers are found, throw an error with a message indicating which numbers were negative.
4. Allow for custom delimiters, either single-character or multi-character, defined in the input string.

### Example Inputs

- `"1,2,3"` → `6`  
  (The string contains 1, 2, and 3, and their sum is 6.)

- `"//;\n1;2;3"` → `6`  
  (Custom delimiter `;` is used. The sum of 1, 2, and 3 is 6.)

- `"//[***]\n1***2***3"` → `6`  
  (Custom multi-character delimiter `***` is used. The sum of 1, 2, and 3 is 6.)

- `"1,\n"` → `1`  
  (Invalid number `\n` is ignored.)

- `"//[*][%]\n1*2%3"` → `6`  
  (Multiple custom delimiters `*` and `%` are used. The sum of 1, 2, and 3 is 6.)

- `"//[***][%%%]\n1***2%%%3"` → `6`  
  (Multiple custom delimiters `***` and `%%%` are used. The sum of 1, 2, and 3 is 6.)

- `"//[***]\n-1***-2***3"` → Throws Error  
  (Negative numbers `-1` and `-2` are found, and an error is thrown.)

### Error Handling

- If the input contains negative numbers, the calculator throws an error:  
  `"Negative numbers are not allowed: -1, -2"`
  
- If the input is empty, the calculator returns `0`.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/string-calculator-kata.git
   
2. Install dependencies:
Navigate into the project directory and install dependencies using `npm`:
```bash
cd string-calculator-kata
npm install
```

3. Testing
This project uses Jest for testing. It includes various test cases to verify the functionality of the StringCalculator class, ensuring that the input parsing, delimiter handling, and error cases are covered.

To run the tests:
```bash
npm test
```
