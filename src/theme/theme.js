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
import { genButton } from '@theme/components';

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
      button: props => genButton(props)
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
  const themeBorders = genBorders(borders);
  const themeColors = genColors(colors);
  const {
    breakpoints: themeBreakpoints,
    contentWidths,
    mediaQueries
  } = genBreakpoints(breakpoints);
  const themeRadii = genRadii(radii);
  const themeSpace = genSpace(space);
  const themeTypography = genTypography(typography);
  const themeHeadings = genHeadings(headings);
  const themeText = genText(text);
  return {
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
}

export default genTheme;
