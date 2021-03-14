import { defaultText, genText } from '@tokens';

it('returns text style object', () => {
  const text = genText();
  expect(text).toEqual(defaultText);
});

it('merges text styles', () => {
  const text = genText({
    text: {
      p: { fontSize: '12px' }
    }
  });
  expect(text.p).toHaveProperty('fontSize', '12px');
  expect(text.ul).toHaveProperty('fontSize', ['sm', 'md']);
});

it('merges the base', () => {
  const text = genText({
    base: {
      fontFamily: 'Inter',
      marginTop: 4
    }
  });
  expect(text.p).toHaveProperty('fontFamily', 'Inter');
  expect(text.p).toHaveProperty('marginTop', 4);
});

it('overrides default styles', () => {
  const text = genText({
    base: { fontSize: '12px' },
    override: {
      text: { small: { fontFamily: 'body', fontSize: ['xs', 'sm'] } }
    }
  });
  // leave <p> untouched
  expect(text.p).toHaveProperty('fontSize', '12px');
  expect(text.ul).toHaveProperty('fontSize', '12px');
  // override <small>
  expect(text.small).toHaveProperty('fontFamily', 'body');
  expect(text.small).toHaveProperty('fontSize', ['xs', 'sm']);
});

it('overrides the base', () => {
  const text = genText({
    override: {
      base: { fontSize: '12px' }
    }
  });
  expect(text.p).toHaveProperty('fontSize', '12px');
  expect(text.p).not.toHaveProperty('padding');
});
