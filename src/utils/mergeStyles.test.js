import { variant } from 'styled-system';
import { genTheme } from '@theme';
import { defaultButtonStyles } from '@theme/components';
import { mergeStyles } from '@utils';

const defaultProps = {
  children: null,
  color: 'primary',
  disabled: false,
  onClick: () => {},
  size: 'md',
  type: 'default',
  theme: genTheme()
};

it('extends the default styles', () => {
  const result = mergeStyles(
    defaultButtonStyles,
    { borderColor: 'red' },
    defaultProps
  );

  expect(result).toHaveProperty('borderColor', 'red');
});

it('merges styles into default styles', () => {
  const result = mergeStyles(
    defaultButtonStyles,
    { display: 'inline' },
    defaultProps
  );

  expect(result).toHaveProperty('display', 'inline');
});

it('overrides just the styles, not variants', () => {
  const result = mergeStyles(defaultButtonStyles, null, {
    ...defaultProps,
    override: { styles: { display: 'flex' } }
  });

  expect(result).toHaveProperty('display', 'flex');
  expect(result).not.toHaveProperty('border');
});

it('extends the variants', () => {
  const result = mergeStyles(
    defaultButtonStyles,
    {
      variants: [
        {
          buttonType: () =>
            variant({
              prop: 'type',
              variants: {
                novel: {
                  color: 'red',
                  bg: 'green'
                }
              }
            })
        }
      ]
    },
    { ...defaultProps, type: 'novel' }
  );
  const defaultResult = mergeStyles(
    defaultButtonStyles,
    {
      variants: [
        {
          buttonType: () =>
            variant({
              prop: 'type',
              variants: {
                novel: {
                  color: 'red',
                  bg: 'green'
                }
              }
            })
        }
      ]
    },
    defaultProps
  );

  expect(result).toHaveProperty('color', 'red');
  expect(result).toHaveProperty('backgroundColor', 'green');
  expect(defaultResult).toHaveProperty('color', '#F9FAFB');
});

it('merges variants', () => {
  const result = mergeStyles(
    defaultButtonStyles,
    {
      variants: [
        {
          buttonType: () =>
            variant({
              prop: 'type',
              variants: {
                default: {
                  color: 'red',
                  bg: 'green'
                }
              }
            })
        }
      ]
    },
    defaultProps
  );

  expect(result).toHaveProperty('color', 'red');
  expect(result).toHaveProperty('backgroundColor', 'green');
});

it('overrides variants', () => {
  const result = mergeStyles(defaultButtonStyles, null, {
    ...defaultProps,
    override: {
      variants: [
        {
          buttonType: () =>
            variant({
              prop: 'type',
              variants: {
                default: {
                  color: 'red',
                  bg: 'green'
                }
              }
            })
        }
      ]
    }
  });

  expect(result).toHaveProperty('color', 'red');
  expect(result).toHaveProperty('backgroundColor', 'green');
});
