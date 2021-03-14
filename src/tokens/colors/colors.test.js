import { defaultColors, genColors } from '@tokens';

it('generates a colors object', () => {
  const colors = genColors();
  expect(colors).toEqual({ ...defaultColors });
});

it('adds new colors to colors object', () => {
  const colors = genColors({ new: '#333' });
  expect(colors).toHaveProperty('new', '#333');
  expect(colors).toHaveProperty('primary');
});

it('merges colors within existing color object', () => {
  const colors = genColors({ primary: '#333' });
  expect(colors).toEqual({ ...defaultColors, primary: '#333' });
});

it('overrides colors by passing in an "override" object', () => {
  const colors = genColors({ override: { primary: '#333' } });
  expect(colors).toEqual({ primary: '#333' });
});
