import {
  black,
  blackRock,
  checkContrast,
  convertHexToRGB,
  springGreen,
  white,
} from './colors';

describe('Color helpers', () => {
  it('Convert hex to rgb value', () => {
    expect(convertHexToRGB(white)).toStrictEqual([255, 255, 255]);
    expect(convertHexToRGB(black)).toStrictEqual([0, 0, 0]);
  });
  it('Check color ration (true)', () => {
    expect(checkContrast(white, black)).toBe(true);
  });
  it('Check color ration (true - specific)', () => {
    expect(checkContrast(blackRock, white)).toBe(true);
  });
  it('Check color ration (false)', () => {
    expect(checkContrast(white, white)).toBe(false);
  });
  it('Check color ration (false - specific)', () => {
    expect(checkContrast(springGreen, white)).toBe(false);
  });
});
