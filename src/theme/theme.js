import { genColors, genBreakpoints } from '@theme/tokens';
import { genButton } from '@theme/components';

function genTheme(
  theme = {
    colors: {},
    breakpoints: {},
    components: {
      button: props => genButton(props)
    }
  }
) {
  const { colors, breakpoints, components } = theme;
  const themeColors = genColors(colors);
  const {
    breakpoints: themeBreakpoints,
    contentWidths,
    mediaQueries
  } = genBreakpoints(breakpoints);
  return {
    colors: themeColors,
    breakpoints: themeBreakpoints,
    contentWidths,
    ...mediaQueries,
    components
  };
}

export default genTheme;
