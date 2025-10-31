import { describe, it, expect } from 'vitest';
import { BULKY_THRESHOLD, DIMENSION_THRESHOLD, sort, STACK } from './sort';

describe('sort', () => {
  describe('STANDARD packages', () => {
    it('should sort packages that are not bulky or heavy as STANDARD', () => {
      const result = sort(10, 100, 100, 10);
      expect(result).toEqual(STACK.STANDARD);
    });

    it('should sort packages with mass at 19kg as STANDARD', () => {
      const result = sort(10, 10, 10, 19);
      expect(result).toEqual(STACK.STANDARD);
    });

    it('should sort packages with volume at 999,999 as STANDARD', () => {
      const result = sort(99, 100, 101, 10);
      expect(result).toEqual(STACK.STANDARD);
    });

    it('should sort packages with dimension at 149 as STANDARD', () => {
      const result = sort(149, 10, 10, 10);
      expect(result).toEqual(STACK.STANDARD);
    });
  });

  describe('SPECIAL packages', () => {
    it(`should sort packages that have a volume greater than ${BULKY_THRESHOLD} as SPECIAL`, () => {
      const result = sort(101, 100, 100, 10);
      expect(result).toEqual(STACK.SPECIAL);
    });

    it('should sort packages with volume exactly at 1,000,000 as SPECIAL', () => {
      const result = sort(100, 100, 100, 10);
      expect(result).toEqual(STACK.SPECIAL);
    });
    it(`should sort packages that have a width greater than ${DIMENSION_THRESHOLD} as SPECIAL`, () => {
      const result = sort(150, 10, 10, 10);
      expect(result).toEqual(STACK.SPECIAL);
    });

    it(`should sort packages that have a height greater than ${DIMENSION_THRESHOLD} as SPECIAL`, () => {
      const result = sort(10, 150, 10, 10);
      expect(result).toEqual(STACK.SPECIAL);
    });

    it(`should sort packages that have a length greater than ${DIMENSION_THRESHOLD} as SPECIAL`, () => {
      const result = sort(10, 10, 150, 10);
      expect(result).toEqual(STACK.SPECIAL);
    });

    it('should sort packages that are bulky but not heavy as SPECIAL', () => {
      const result = sort(150, 100, 100, 10);
      expect(result).toEqual(STACK.SPECIAL);
    });

    it('should sort packages that are heavy but not bulky as SPECIAL', () => {
      const result = sort(10, 10, 10, 20);
      expect(result).toEqual(STACK.SPECIAL);
    });
  });

  describe('REJECTED packages', () => {
    it('should sort packages that are heavy and bulky by volume as REJECTED', () => {
      const result = sort(100, 100, 100, 20);
      expect(result).toEqual(STACK.REJECTED);
    });

    it('should sort packages that are heavy and bulky by dimension as REJECTED', () => {
      const result = sort(150, 10, 10, 20);
      expect(result).toEqual(STACK.REJECTED);
    });
  });
});
