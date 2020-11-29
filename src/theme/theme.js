import {
  defaultColors,
  genColors,
  defaultBreakpoints,
  genBreakpoints
} from '@theme/tokens';

import { defaultButtonStyles, genButton } from '@theme/components';

function genTheme(
  theme = {
    colors: defaultColors,
    breakpoints: defaultBreakpoints,
    components: {
      button: ({ styles = { ...defaultButtonStyles }, ...props }) =>
        genButton({ styles, ...props })
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
