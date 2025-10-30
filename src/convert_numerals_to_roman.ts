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

  static convert(numerals: number): string {
    this.checkIfNumberIsInteger(numerals);
    this.checkIfNumberIsPositive(numerals);
    const reversed_string_numerals = numerals.toString().split('').reverse().join('');
    let roman_numerals = '';
    for (let i = 0; i < reversed_string_numerals.length; i++) {
      const digit = parseInt(reversed_string_numerals[i]);
      if (digit === 0) {
        continue;
      }
      if (digit < 4) {
        roman_numerals = this.ROMAN_NUMERALS[i][1].repeat(digit) + roman_numerals;
      } else if (digit === 4) {
        roman_numerals = this.ROMAN_NUMERALS[i][1] + this.ROMAN_NUMERALS[i][5] + roman_numerals;
      } else if (digit === 5) {
        roman_numerals = this.ROMAN_NUMERALS[i][5] + roman_numerals;
      } else if (digit > 5 && digit < 9) {
        roman_numerals = this.ROMAN_NUMERALS[i][5] + this.ROMAN_NUMERALS[i][1].repeat(digit - 5) + roman_numerals;
      } else if (digit === 9) {
        roman_numerals = this.ROMAN_NUMERALS[i][1] + this.ROMAN_NUMERALS[i][10] + roman_numerals;
      }
    }
    return roman_numerals;
  }

  private static checkIfNumberIsPositive(numerals: number): void {
    if (numerals < 0) {
      throw new Error('Number must be positive');
    }
  }

  private static checkIfNumberIsInteger(numerals: number): void {
    if (!Number.isInteger(numerals)) {
      throw new Error('Number must be an integer');
    }
  }
}