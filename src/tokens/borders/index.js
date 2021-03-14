import { merge } from 'theme-ui';

const defaultBorders = {
  none: 'none',
  thin: '1px solid',
  '2px': '2px solid',
  '4px': '4px solid'
};

export function genBorders({ override, ...borders } = {}) {
  if (override) {
    return override;
  }
  return merge(defaultBorders, borders);
}

export default defaultBorders;
