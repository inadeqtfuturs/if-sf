import { genTheme } from '@theme';

it('generates the theme', () => {
  const theme = genTheme();
  expect(theme).toHaveProperty('colors');
  expect(theme).toHaveProperty('breakpoints');
});
