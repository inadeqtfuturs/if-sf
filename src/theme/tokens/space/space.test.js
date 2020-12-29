import { defaultSpace, genSpace } from '@theme/tokens';

it('returns space object', () => {
  const space = genSpace();
  expect(space).toEqual(defaultSpace);
});

it('merges space objects', () => {
  const space = genSpace({
    px: '3px',
    4: '2rem',
    13: '3.25rem'
  });
  expect(space).toHaveProperty('4', '2rem');
  expect(space).toHaveProperty('13', '3.25rem');
});

it('overrides space object', () => {
  const space = genSpace({
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
  expect(space).toHaveProperty('2', '0.5rem');
  expect(defaultSpace).toHaveProperty('5');
  expect(space).not.toHaveProperty('5');
});
