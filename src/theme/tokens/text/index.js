import { merge } from 'theme-ui';
import { mapObject, removeDefaults } from '@utils';

export const defaultTextBase = {
  fontFamily: 'body',
  fontSize: ['sm', 'md'],
  lineHeight: 1.5,
  margin: 0,
  padding: 0,
  marginBottom: 4
};

const defaultText = {
  p: {
    ...defaultTextBase
  },
  ul: {
    ...defaultTextBase,
    paddingLeft: 8,
    ul: {
      margin: 0
    }
  },
  ol: {
    ...defaultTextBase,
    paddingLeft: 8
  },
  blockquote: {
    ...defaultTextBase,
    my: 3,
    mx: 0,
    py: 3,
    px: 3
  },
  small: {
    ...defaultTextBase,
    fontSize: ['xs', 'sm']
  },
  a: {
    ...defaultTextBase
  }
};

export function genText({
  base: passedBase = {},
  text: passedText = {},
  override = {}
} = {}) {
  if (!override && !passedBase && !passedText) {
    return defaultText;
  }

  const { base: overrideBase = null, text: overrideText = null } = override;

  const base = overrideBase || merge(defaultTextBase, passedBase);
  const text = merge(removeDefaults(defaultText, defaultTextBase), passedText);
  const textStyles = mapObject(text, ([key, value]) => [
    key,
    {
      ...base,
      ...value
    }
  ]);

  if (overrideText) {
    return merge(textStyles, overrideText);
  }

  return textStyles;
}

export default defaultText;
