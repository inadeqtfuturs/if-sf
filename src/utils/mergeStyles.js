import { merge } from 'theme-ui';

export function mapVariants(variants, props) {
  return variants.reduce((acc, styleVariation) => {
    const key = Object.keys(styleVariation);
    const styleVariant = styleVariation[key](props);
    return {
      ...styleVariant(props),
      ...acc
    };
  }, {});
}

function mergeStyles(defaultStyles, props) {
  const { styles, override: overrideStyles } = props || {};
  const { variants, ...rest } = styles || {};
  const { variants: defaultVariants, ...defaultRest } = defaultStyles;

  const mergedStyles =
    overrideStyles && overrideStyles.styles
      ? { ...overrideStyles.styles }
      : merge(defaultRest, rest);

  if (overrideStyles && overrideStyles.variants) {
    const mappedVariants = mapVariants(overrideStyles.variants, props);
    return { ...mergedStyles, ...mappedVariants };
  }

  const mergedVariants = variants
    ? [...variants, ...defaultVariants]
    : defaultVariants;

  const mappedVariants = mapVariants(mergedVariants, props);

  return { ...mergedStyles, ...mappedVariants };
}

export default mergeStyles;
