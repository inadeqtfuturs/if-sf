import { defaultBorders, genBorders } from '@theme/tokens';

it('returns space object', () => {
  const borders = genBorders();
  expect(borders).toEqual(defaultBorders);
});

it('merges space objects', () => {
  const borders = genBorders({
    thick: '8px solid'
  });
  expect(borders).toHaveProperty('none', defaultBorders.none);
  expect(borders).toHaveProperty('thick', '8px solid');
  expect(borders).toHaveProperty('4px', defaultBorders['4px']);
});

it('overrides space object', () => {
  const borders = genBorders({
    override: {
      chonky: '13px solid'
    }
  });
  expect(borders).toHaveProperty('chonky', '13px solid');
  expect(defaultBorders).toHaveProperty('none');
  expect(borders).not.toHaveProperty('none');
});
