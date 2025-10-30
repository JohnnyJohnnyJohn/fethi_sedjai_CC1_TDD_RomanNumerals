export class ConvertNumeralsToRoman {
  private static readonly ROMAN_NUMERALS: Record<number, string>[] = [
    {
      1: 'I',
      5: 'V',
      10: 'X',
    },
    {
      1: 'X',
      5: 'L',
      10: 'C',
    },
    {
      1: 'C',
      5: 'D',
      10: 'M',
    },
  ];

  static convertFullNumberToRoman(numerals: number): string {
    this.validateNumber(numerals);

    return this.getRomanNumeralsFromNumber(numerals);
  }

  private static getRomanNumeralsFromNumber(numerals: number): string {
    const reversed_string_numerals = numerals.toString().split('').reverse().join('');
    let roman_numerals = '';
    for (let i = 0; i < reversed_string_numerals.length; i++) {
      const roman_numerals_for_digit = this.getRomanNumeralsForDigit(reversed_string_numerals[i], i);
      roman_numerals = roman_numerals_for_digit + roman_numerals;
    }
    return roman_numerals;
  }

  private static getRomanNumeralsForDigit(digit: string, position: number): string {
    const digit_number = parseInt(digit);

    if (digit_number === 0) {
      return '';
    }
    if (digit_number < 4) {
      return this.ROMAN_NUMERALS[position][1].repeat(digit_number);
    }
    if (digit_number === 4) {
      return this.ROMAN_NUMERALS[position][1] + this.ROMAN_NUMERALS[position][5];
    }
    if (digit_number === 5) {
      return this.ROMAN_NUMERALS[position][5];
    }
    if (digit_number > 5 && digit_number < 9) {
      return this.ROMAN_NUMERALS[position][5] + this.ROMAN_NUMERALS[position][1].repeat(digit_number - 5);
    }
    if (digit_number === 9) {
      return this.ROMAN_NUMERALS[position][1] + this.ROMAN_NUMERALS[position][10];
    }

    throw new Error('Invalid digit');
  }

  private static validateNumber(numerals: number): void {
    this.validateNumberIsInteger(numerals);
    this.validateNumberIsBetween0And3999(numerals);
  }

  private static validateNumberIsBetween0And3999(numerals: number): void {
    if (numerals < 0 || numerals > 3999) {
      throw new Error('Number must be between 0 and 3999');
    }
  }

  private static validateNumberIsInteger(numerals: number): void {
    if (!Number.isInteger(numerals)) {
      throw new Error('Number must be an integer');
    }
  }
}