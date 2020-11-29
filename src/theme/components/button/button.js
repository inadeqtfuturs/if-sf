import { variant } from 'styled-system';
import { darken } from '@theme-ui/color';
import { mergeStyles } from '@utils';

export const defaultButtonStyles = {
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  '&:disabled': {
    opacity: '0.85',
    pointerEvents: 'none'
  },
  variants: [
    {
      buttonType: ({ color }) =>
        variant({
          prop: 'type',
          variants: {
            default: {
              color: 'background',
              bg: color
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
              fontSize: 0,
              minWidth: 'auto'
            },
            md: {
              px: 3,
              py: 2,
              fontSize: 1
            },
            lg: {
              px: 4,
              py: 3,
              fontSize: 2
            }
          }
        })
    }
  ]
};

export function genButton(props) {
  const { styles } = props;

  return mergeStyles(defaultButtonStyles, styles, props);
}

export default defaultButtonStyles;
