import { merge } from 'theme-ui';

const defaultColors = {
  text: '#111827',
  background: '#F9FAFB',
  primary: '#2563EB',
  secondary: '#de7283',
  accent: '#7C3AED',
  muted: '#88d1ff'
};

export function genColors({ override, ...restColors } = {}) {
  if (!override && !restColors) {
    return defaultColors;
  }
  return override || merge(defaultColors, restColors);
}

export default defaultColors;
