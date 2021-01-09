import { defaultRadii, genRadii } from '@theme/tokens';

it('returns space object', () => {
  const radii = genRadii();
  expect(radii).toEqual(defaultRadii);
});

it('merges space objects', () => {
  const radii = genRadii({
    px: '3px',
    sm: '2rem',
    full: '3.25rem'
  });
  expect(radii).toHaveProperty('sm', '2rem');
  expect(radii).toHaveProperty('md', defaultRadii.md);
  expect(radii).toHaveProperty('full', '3.25rem');
});

it('overrides space object', () => {
  const radii = genRadii({
    override: {
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem'
    }
  });
  expect(radii).toHaveProperty('2', '0.5rem');
  expect(defaultRadii).toHaveProperty('none');
  expect(radii).not.toHaveProperty('none');
});
