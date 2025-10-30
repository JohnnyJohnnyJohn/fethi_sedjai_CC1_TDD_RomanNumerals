export class ConvertNumeralsToRoman {
  private static readonly MIN_VALUE: number = 0;
  private static readonly MAX_VALUE: number = 3999;

  private static readonly ROMAN_NUMERALS: Array<Record<number, string>> = [
    { 1: 'I', 5: 'V', 10: 'X' },
    { 1: 'X', 5: 'L', 10: 'C' },
    { 1: 'C', 5: 'D', 10: 'M' },
    // Thousands place; only 1 is used (M). Values 5 and 10 are not applicable here
    { 1: 'M' }
  ];

  static convertFullNumberToRoman(value: number): string {
    this.validateNumber(value);
    return this.buildRomanNumeralFromNumber(value);
  }

  private static buildRomanNumeralFromNumber(value: number): string {
    const reversedDigits: string = value.toString().split('').reverse().join('');
    let result: string = '';

    for (let position = 0; position < reversedDigits.length; position++) {
      const romanForDigit: string = this.getRomanNumeralsForDigit(reversedDigits[position], position);
      result = romanForDigit + result;
    }

    return result;
  }

  private static getRomanNumeralsForDigit(digit: string, position: number): string {
    const digitValue: number = parseInt(digit, 10);

    if (digitValue === 0) {
      return '';
    }

    // Thousands place (position 3) can only be 1-3, represented by 'M' repeated
    if (position === 3) {
      return this.ROMAN_NUMERALS[position][1].repeat(digitValue);
    }

    if (digitValue < 4) {
      return this.ROMAN_NUMERALS[position][1].repeat(digitValue);
    }

    if (digitValue === 4) {
      return this.ROMAN_NUMERALS[position][1] + this.ROMAN_NUMERALS[position][5];
    }

    if (digitValue === 5) {
      return this.ROMAN_NUMERALS[position][5];
    }

    if (digitValue > 5 && digitValue < 9) {
      return this.ROMAN_NUMERALS[position][5] + this.ROMAN_NUMERALS[position][1].repeat(digitValue - 5);
    }

    if (digitValue === 9) {
      return this.ROMAN_NUMERALS[position][1] + this.ROMAN_NUMERALS[position][10];
    }

    // Unreachable with valid decimal digits
    throw new Error('Invalid digit');
  }

  private static validateNumber(value: number): void {
    this.validateNumberIsInteger(value);
    this.validateNumberIsBetweenMinAndMax(value);
  }

  private static validateNumberIsBetweenMinAndMax(value: number): void {
    if (value < this.MIN_VALUE || value > this.MAX_VALUE) {
      throw new Error('Number must be between 0 and 3999');
    }
  }

  private static validateNumberIsInteger(value: number): void {
    if (!Number.isInteger(value)) {
      throw new Error('Number must be an integer');
    }
  }
}