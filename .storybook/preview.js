import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { genTheme } from '@theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={genTheme()}>
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
