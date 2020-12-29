import { genTheme } from '@theme';

it('generates the theme', () => {
  const theme = genTheme();
  expect(theme).toHaveProperty('colors');
  expect(theme).toHaveProperty('breakpoints');
  expect(theme).toHaveProperty('fonts');
  expect(theme).toHaveProperty('fontSizes');
  expect(theme).toHaveProperty('fontWeights');
  expect(theme).toHaveProperty('components');
  expect(theme.components).toHaveProperty('button', expect.any(Function));
});
