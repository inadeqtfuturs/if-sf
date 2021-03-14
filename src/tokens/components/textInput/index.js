import { variant } from 'styled-system';
import { get } from 'theme-ui';
import { alpha } from '@theme-ui/color';
import { mergeStyles } from '@utils';

export const defaultTextInputStyles = {
  border: 'thin',
  borderColor: 'transparent',
  borderRadius: 'default',
  fontFamily: 'body',
  color: 'text',
  backgroundColor: alpha('text', 0.04),
  '&:disabled': {
    opacity: '0.5',
    pointerEvents: 'none'
  },
  variants: [
    {
      tagType: ({ theme }) =>
        variant({
          prop: 'type',
          variants: {
            outline: {
              bg: 'transparent',
              borderColor: alpha(get(theme, `colors.text`), 1)
            }
          }
        })
    },
    {
      size: () =>
        variant({
          prop: 'size',
          variants: {
            sm: {
              px: 2,
              py: 1,
              fontSize: 'xs',
              minWidth: 'auto'
            },
            md: {
              px: 3,
              py: 2,
              fontSize: 'sm'
            },
            lg: {
              px: 4,
              py: 3,
              fontSize: 'md'
            }
          }
        })
    }
  ]
};

export function genTextInput(props) {
  return mergeStyles(defaultTextInputStyles, props);
}

export default defaultTextInputStyles;
