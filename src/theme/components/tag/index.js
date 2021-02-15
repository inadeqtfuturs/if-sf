import { variant } from 'styled-system';
import { get } from 'theme-ui';
import { alpha } from '@theme-ui/color';
import { mergeStyles } from '@utils';

export const defaultTagStyles = {
  border: 'thin',
  borderColor: 'transparent',
  borderRadius: 'default',
  fontFamily: 'body',
  color: 'text',
  variants: [
    {
      tagType: ({ theme }) =>
        variant({
          prop: 'type',
          variants: {
            default: {
              border: 'thin',
              borderColor: 'transparent',
              bg: alpha(get(theme, `colors.text`), 0.04)
            },
            outline: {
              bg: 'transparent',
              borderColor: alpha(get(theme, `colors.text`), 0.5)
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
              px: 1,
              py: 1,
              fontSize: '2xs',
              minWidth: 'auto'
            },
            md: {
              px: 2,
              py: 1,
              fontSize: 'xs'
            },
            lg: {
              px: 2,
              py: 2,
              fontSize: 'sm'
            }
          }
        })
    }
  ]
};

export function genTag(props) {
  return mergeStyles(defaultTagStyles, props);
}

export default defaultTagStyles;
