import {
  genBorders,
  genBreakpoints,
  genColors,
  genRadii,
  genSpace,
  genTypography,
  genText,
  genHeadings
} from '@theme/tokens';
import { genButton, genTag } from '@theme/components';

function hasValue(obj) {
  return obj !== null;
}

// tokens
// typography / styles
// components

function genTheme(
  theme = {
    borders: {},
    colors: {},
    breakpoints: {},
    radii: {},
    space: {},
    typography: {},
    text: {},
    headings: {},
    components: {
      button: props => genButton(props),
      tag: props => genTag(props)
    }
  }
) {
  const {
    borders,
    colors,
    breakpoints,
    radii,
    space,
    typography,
    headings,
    text,
    components
  } = theme;
  const themeBorders = hasValue(borders) && genBorders(borders);
  const themeColors = hasValue(colors) && genColors(colors);
  const { breakpoints: themeBreakpoints, contentWidths, mediaQueries } =
    hasValue(breakpoints) && genBreakpoints(breakpoints);
  const themeRadii = hasValue(radii) && genRadii(radii);
  const themeSpace = hasValue(space) && genSpace(space);
  const themeTypography = hasValue(typography) && genTypography(typography);
  const themeHeadings = hasValue(headings) && genHeadings(headings);
  const themeText = hasValue(text) && genText(text);

  const generatedTheme = {
    borders: themeBorders,
    colors: themeColors,
    breakpoints: themeBreakpoints,
    contentWidths,
    ...mediaQueries,
    radii: themeRadii,
    space: themeSpace,
    ...themeTypography,
    styles: {
      root: {
        ...themeHeadings,
        ...themeText
      }
    },
    components
  };

  const finalTheme = Object.fromEntries(
    // eslint-disable-next-line no-unused-vars
    Object.entries(generatedTheme).filter(([_, v]) => Boolean(v))
  );

  return {
    ...finalTheme
  };
}

export default genTheme;
