// Base theme colors
export const ultramarineLight = '#150fbf';
export const ultramarineDark = '#0e0a80';
export const blue = '#1c15ff';
export const blackRock = '#070540';

// Monochrome colors
export const black = '#000000';
export const white = '#ffffff';

// Accent colors
export const springGreen = '#08ffaa';
export const candleLight = '#ffd714';
export const outrageousOrange = '#ff562e';
export const melrose = '#6661ff';
export const electricViolet = '#9708ff';

export const convertHexToRGB = (hex: string): number[] => {
  const normalizedHex = hex.substring(1);
  const r = parseInt(normalizedHex.substring(0, 2), 16);
  const g = parseInt(normalizedHex.substring(2, 4), 16);
  const b = parseInt(normalizedHex.substring(4, 6), 16);
  return [r, g, b];
};

const luminanace = (r: number, g: number, b: number) => {
  const a = [r, g, b].map((v) => {
    let newV = v;
    newV /= 255;
    return newV <= 0.03928 ? newV / 12.92 : ((newV + 0.055) / 1.055) ** 2.4;
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export const checkContrast = (hex1: string, hex2: string): boolean => {
  const rgb1 = convertHexToRGB(hex1);
  const rgb2 = convertHexToRGB(hex2);
  const lum1 = luminanace(rgb1[0], rgb1[1], rgb1[2]);
  const lum2 = luminanace(rgb2[0], rgb2[1], rgb2[2]);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  const contrast = (brightest + 0.05) / (darkest + 0.05);
  return contrast > 3;
};
