import { merge } from 'theme-ui';
import { mapObject, removeDefaults } from '@utils';

export const defaultHeadingBase = {
  fontFamily: 'heading',
  margin: 0,
  lineHeight: 1.25,
  fontWeight: 'regular'
};

const defaultHeadings = {
  h1: {
    ...defaultHeadingBase,
    fontSize: '2xl',
    lineHeight: 1,
    marginBottom: 3
  },
  h2: {
    ...defaultHeadingBase,
    fontSize: 'xl',
    lineHeight: 1,
    marginBottom: 3
  },
  h3: {
    ...defaultHeadingBase,
    fontSize: 'lg',
    lineHeight: 1,
    marginBottom: 3
  },
  h4: {
    ...defaultHeadingBase,
    fontSize: 'md',
    lineHeight: 1,
    marginBottom: 3
  },
  h5: {
    ...defaultHeadingBase,
    fontSize: 'sm',
    lineHeight: 1.25,
    marginBottom: 3
  },
  h6: {
    ...defaultHeadingBase,
    fontSize: 'xs',
    lineHeight: 1.2,
    marginBottom: 3
  }
};

export function genHeadings({
  base: passedBase = {},
  headings: passedHeadings = {},
  override = {}
} = {}) {
  if (!override && !passedBase && !passedHeadings) {
    return defaultHeadings;
  }

  const {
    base: overrideBase = null,
    headings: overrideHeadings = null
  } = override;

  const base = overrideBase || merge(defaultHeadingBase, passedBase);
  const headings = merge(
    removeDefaults(defaultHeadings, defaultHeadingBase),
    passedHeadings
  );

  const headingStyles = mapObject(headings, ([key, value]) => [
    key,
    {
      ...base,
      ...value
    }
  ]);

  if (overrideHeadings) {
    return { ...headingStyles, ...overrideHeadings };
  }

  return headingStyles;
}

export default defaultHeadings;
