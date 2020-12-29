import {
  genBreakpoints,
  genColors,
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
    colors: {},
    breakpoints: {},
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
    colors,
    breakpoints,
    space,
    typography,
    headings,
    text,
    components
  } = theme;
  const themeColors = genColors(colors);
  const {
    breakpoints: themeBreakpoints,
    contentWidths,
    mediaQueries
  } = genBreakpoints(breakpoints);
  const themeSpace = genSpace(space);
  const themeTypography = genTypography(typography);
  const themeHeadings = genHeadings(headings);
  const themeText = genText(text);
  return {
    colors: themeColors,
    breakpoints: themeBreakpoints,
    contentWidths,
    ...mediaQueries,
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
