export class ConvertNumeralsToRoman {
  private static readonly ROMAN_NUMERALS: Record<number, string> = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };

  static convert(numerals: number): string {
    this.checkIfNumberIsInteger(numerals);
    this.checkIfNumberIsPositive(numerals);
    return this.ROMAN_NUMERALS[numerals];
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