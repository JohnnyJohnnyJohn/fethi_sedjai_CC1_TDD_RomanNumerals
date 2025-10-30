import { describe, it, expect } from 'vitest';
import { ConvertNumeralsToRoman } from '../src/convert_numerals_to_roman';

describe('Validation', () => {
  it('throws when number is not an integer', () => {
    expect(() => ConvertNumeralsToRoman.convertFullNumberToRoman(1.5)).toThrow('Number must be an integer');
  });

  it('throws when number is negative', () => {
    expect(() => ConvertNumeralsToRoman.convertFullNumberToRoman(-1)).toThrow('Number must be between 0 and 3999');
  });

  it('throws when number is greater than 3999', () => {
    expect(() => ConvertNumeralsToRoman.convertFullNumberToRoman(4000)).toThrow('Number must be between 0 and 3999');
  });
});

describe('Single-digit conversions', () => {
  const cases: Array<[number, string]> = [
    [0, ''],
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX']
  ];

  it.each(cases)('converts %s to %s', (input, expected) => {
    expect(ConvertNumeralsToRoman.convertFullNumberToRoman(input)).toBe(expected);
  });
});

describe('Multi-digit conversions', () => {
  const cases: Array<[number, string]> = [
    [14, 'XIV'],
    [35, 'XXXV'],
    [49, 'XLIX'],
    [99, 'XCIX']
  ];

  it.each(cases)('converts %s to %s', (input, expected) => {
    expect(ConvertNumeralsToRoman.convertFullNumberToRoman(input)).toBe(expected);
  });
});

describe('Complex conversions', () => {
  const cases: Array<[number, string]> = [
    [1994, 'MCMXCIV'],
    [2025, 'MMXXV'],
    [3999, 'MMMCMXCIX']
  ];

  it.each(cases)('converts %s to %s', (input, expected) => {
    expect(ConvertNumeralsToRoman.convertFullNumberToRoman(input)).toBe(expected);
  });
});