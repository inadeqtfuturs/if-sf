import { variant } from 'styled-system';
import { css, get } from 'theme-ui';
import { darken } from '@theme-ui/color';
import { mergeStyles } from '@utils';

export const defaultButtonStyles = {
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'thin',
  borderColor: 'transparent',
  borderRadius: 'default',
  '&:disabled': {
    opacity: '0.85',
    pointerEvents: 'none'
  },
  variants: [
    {
      buttonType: ({ color, theme }) =>
        variant({
          prop: 'type',
          variants: {
            default: {
              color: 'background',
              border: 'thin',
              borderColor: color,
              bg: color,
              '&:hover': {
                bg: darken(color, 0.04)
              },
              '&:active': {
                bg: darken(color, 0.08)
              },
              '&:focus': {
                boxShadow: `0 0 4px 1px ${get(theme, `colors.${color}`)}`,
                outline: 'none'
              }
            },
            outline: {
              color,
              bg: 'transparent'
            },
            ghost: {
              color,
              bg: darken('background', 0.04)
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

export function genButton(props) {
  return mergeStyles(defaultButtonStyles, props);
}

export default defaultButtonStyles;
