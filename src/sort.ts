export const STACK = {
  STANDARD: 'STANDARD',
  SPECIAL: 'SPECIAL',
  REJECTED: 'REJECTED',
} as const;

export type Stack = (typeof STACK)[keyof typeof STACK];

export const HEAVY_THRESHOLD = 20;
export const DIMENSION_THRESHOLD = 150;
export const BULKY_THRESHOLD = 1_000_000;

export function sort(
  width: number,
  height: number,
  length: number,
  mass: number
): Stack {
  const volume = width * height * length;
  const isHeavy = mass >= HEAVY_THRESHOLD;
  const isBulky =
    volume >= BULKY_THRESHOLD ||
    width >= DIMENSION_THRESHOLD ||
    height >= DIMENSION_THRESHOLD ||
    length >= DIMENSION_THRESHOLD;

  if (isHeavy && isBulky) {
    return STACK.REJECTED;
  }
  if (isHeavy || isBulky) {
    return STACK.SPECIAL;
  }

  return STACK.STANDARD;
}
