import { defaultHeadings, genHeadings } from '@tokens';

it('returns headings object', () => {
  const headings = genHeadings();
  expect(headings).toEqual(defaultHeadings);
});

it('merges heading objects', () => {
  const headings = genHeadings({
    headings: {
      h1: {
        fontSize: '24px'
      },
      h3: {
        marginTop: 4
      }
    }
  });
  expect(headings.h1).toHaveProperty('fontSize', '24px');
  expect(headings.h3).toHaveProperty('marginTop', 4);
});

it('merges base heading object', () => {
  const headings = genHeadings({
    base: {
      fontFamily: 'body',
      marginTop: 4
    },
    headings: {
      h1: {
        fontSize: '24px'
      },
      h3: {
        marginTop: 8
      }
    }
  });
  expect(headings.h1).toHaveProperty('fontFamily', 'body');
  expect(headings.h1).toHaveProperty('marginTop', 4);
  expect(headings.h1).toHaveProperty('fontSize', '24px');
  expect(headings.h2).toHaveProperty('marginTop', 4);
  expect(headings.h3).toHaveProperty('marginTop', 8);
});

it('overrides headings', () => {
  const headings = genHeadings({
    override: {
      headings: {
        h1: {
          fontSize: '36px'
        }
      }
    }
  });
  expect(headings.h1).toHaveProperty('fontSize', '36px');
  expect(headings.h1).not.toHaveProperty('marginBottom');
  expect(headings.h2).toHaveProperty('marginBottom', 3);
});

it('overrides heading base', () => {
  const headings = genHeadings({
    override: {
      base: {
        fontFamily: 'Inter'
      }
    },
    headings: {
      h1: {
        fontSize: '36px'
      }
    }
  });
  expect(headings.h1).toHaveProperty('fontFamily', 'Inter');
  expect(headings.h1).toHaveProperty('fontSize', '36px');
  expect(headings.h2).not.toHaveProperty('margin');
});
