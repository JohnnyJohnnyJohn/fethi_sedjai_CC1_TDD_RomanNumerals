import { describe, it, expect } from 'vitest';
import { ConvertNumeralsToRoman } from '../src/convert_numerals_to_roman';

describe('Check if the number is valid', () => {
  describe('when the number is not an integer', () => {
    it('should return an error', () => {
      expect(() => ConvertNumeralsToRoman.convertFullNumberToRoman(1.5)).toThrow('Number must be an integer');
    });
  });
  describe('when the number is negative', () => {
    it('should return an error', () => {
      expect(() => ConvertNumeralsToRoman.convertFullNumberToRoman(-1)).toThrow('Number must be between 0 and 3999');
    });
  });
  describe('when the number is greater than 3999', () => {
    it('should return an error', () => {
      expect(() => ConvertNumeralsToRoman.convertFullNumberToRoman(4000)).toThrow('Number must be between 0 and 3999');
    });
  });
});

describe('Conversion of single numerals to roman', () => {
  describe('when the number is 0', () => {
    it('should return an empty string', () => {
      expect(ConvertNumeralsToRoman.convertFullNumberToRoman(0)).toBe('');
    });
  });
  describe('when the number is 1', () => {
    it('should return I', () => {
      expect(ConvertNumeralsToRoman.convertFullNumberToRoman(1)).toBe('I');
    });
  });
  describe('when the number is 2', () => {
    it('should return II', () => {
      expect(ConvertNumeralsToRoman.convertFullNumberToRoman(2)).toBe('II');
    });
  });
  describe('when the number is 3', () => {
    it('should return III', () => {
      expect(ConvertNumeralsToRoman.convertFullNumberToRoman(3)).toBe('III');
    });
  });
  describe('when the number is 4', () => {
    it('should return IV', () => {
      expect(ConvertNumeralsToRoman.convertFullNumberToRoman(4)).toBe('IV');
    });
  });
  describe('when the number is 5', () => {
    it('should return V', () => {
      expect(ConvertNumeralsToRoman.convertFullNumberToRoman(5)).toBe('V');
    });
  });
  describe('when the number is 6', () => {
    it('should return VI', () => {
      expect(ConvertNumeralsToRoman.convertFullNumberToRoman(6)).toBe('VI');
    });
  });
  describe('when the number is 7', () => {
    it('should return VII', () => {
      expect(ConvertNumeralsToRoman.convertFullNumberToRoman(7)).toBe('VII');
    });
  });
  describe('when the number is 8', () => {
    it('should return VIII', () => {
      expect(ConvertNumeralsToRoman.convertFullNumberToRoman(8)).toBe('VIII');
    });
  });
  describe('when the number is 9', () => {
    it('should return IX', () => {
      expect(ConvertNumeralsToRoman.convertFullNumberToRoman(9)).toBe('IX');
    });
  });
});

describe('Conversion of multiple numerals to roman', () => {
  describe('when the number is 14', () => {
    it('should return XIV', () => {
      expect(ConvertNumeralsToRoman.convertFullNumberToRoman(14)).toBe('XIV');
    });
  });
  describe('when the number is 35', () => {
    it('should return XXXV', () => {
      expect(ConvertNumeralsToRoman.convertFullNumberToRoman(35)).toBe('XXXV');
    });
  });
  describe('when the number is 49', () => {
    it('should return XLIX', () => {
      expect(ConvertNumeralsToRoman.convertFullNumberToRoman(49)).toBe('XLIX');
    });
  });
  describe('when the number is 99', () => {
    it('should return XCIX', () => {
      expect(ConvertNumeralsToRoman.convertFullNumberToRoman(99)).toBe('XCIX');
    });
  });
});