import { merge } from 'theme-ui';
import { mapObject } from '@utils';

const defaultTypography = {
  fonts: {
    body: 'Inter',
    heading: 'Helvetica Neue',
    monospace: 'Menlo, monospace'
  },
  fontSizes: {
    '2xs': 0.625,
    xs: 0.75,
    sm: 0.875,
    md: 1,
    lg: 1.125,
    xl: 1.25,
    '2xl': 1.5,
    '3xl': 1.875,
    '4xl': 2.25,
    '5xl': 3,
    '6xl': 4
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  },
  baseFontSize: 16
};

const {
  fonts: defaultFonts,
  fontSizes: defaultFontSizes,
  fontWeights: defaultFontWeights,
  baseFontSize: defaultBaseFontSize
} = defaultTypography;

export function genTypography({
  fonts: passedFonts = {},
  fontSizes: passedFontSizes = {},
  fontWeights: passedFontWeights = {},
  baseFontSize: passedBasedFontSize = null,
  override = {}
} = {}) {
  const {
    fonts: overrideFonts = null,
    fontSizes: overrideFontSizes = null,
    fontWeights: overrideFontWeights = null,
    baseFontSize: overrideBaseFontSize = null
  } = override;

  const fonts = overrideFonts || merge(defaultFonts, passedFonts);

  const sizes = overrideFontSizes || merge(defaultFontSizes, passedFontSizes);
  const base =
    overrideBaseFontSize || passedBasedFontSize || defaultBaseFontSize;
  // convert font sizes to rem based on base font size
  const fontSizes = mapObject(sizes, ([key, value]) => [
    key,
    `${(value * base) / 16}rem`
  ]);

  const fontWeights =
    overrideFontWeights || merge(defaultFontWeights, passedFontWeights);

  return {
    fonts,
    fontSizes,
    fontWeights
  };
}

export default defaultTypography;
