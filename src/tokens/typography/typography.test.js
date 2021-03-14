import { defaultTypography, genTypography } from '@tokens';
import { get } from 'theme-ui';

it('generates typography object', () => {
  const typography = genTypography();
  expect(typography).toHaveProperty('fonts');
  expect(typography).toHaveProperty('fontSizes');
  expect(typography).toHaveProperty('fontWeights');
});

it('merges fonts', () => {
  const typography = genTypography({
    fonts: {
      body: 'Arial'
    }
  });
  const defaultBody = get(defaultTypography, 'fonts.heading');
  expect(typography.fonts).toHaveProperty('body', 'Arial');
  expect(typography.fonts.heading).toEqual(defaultBody);
});
