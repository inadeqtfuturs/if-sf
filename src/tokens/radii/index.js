import { merge } from 'theme-ui';

const defaultRadii = {
  none: '0',
  sm: '0.125rem',
  default: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '1rem',
  full: '9999px'
};

export function genRadii({ override, ...radii } = {}) {
  if (override) {
    return override;
  }
  return merge(defaultRadii, radii);
}

export default defaultRadii;
