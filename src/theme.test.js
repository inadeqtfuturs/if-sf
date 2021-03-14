import { genTheme } from '@theme';

it('generates the theme', () => {
  const theme = genTheme();
  expect(theme).toHaveProperty('borders');
  expect(theme).toHaveProperty('breakpoints');
  expect(theme).toHaveProperty('colors');
  expect(theme).toHaveProperty('radii');
  expect(theme).toHaveProperty('fonts');
  expect(theme).toHaveProperty('fontSizes');
  expect(theme).toHaveProperty('fontWeights');
  expect(theme).toHaveProperty('components');
  expect(theme.components).toHaveProperty('button', expect.any(Function));
});

it('allows you to remove tokens w/ null', () => {
  const theme = genTheme({ colors: null, components: null });
  expect(theme).not.toHaveProperty('colors');
  expect(theme).not.toHaveProperty('components');
  expect(theme).toHaveProperty('borders');
  expect(theme).toHaveProperty('breakpoints');
});
