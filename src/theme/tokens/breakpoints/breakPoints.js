import { css } from '@emotion/react';
import { mergeUniqueKey } from '@utils';

const defaultBreakpoints = {
  breakpoints: [
    { key: 'sm', val: 576, contentWidth: 540 },
    { key: 'md', val: 768, contentWidth: 720 },
    { key: 'lg', val: 992, contentWidth: 840 },
    { key: 'xl', val: 1200, contentWidth: 1000 },
    { key: 'xxl', val: 1400, contentWidth: 1000 }
  ]
};

function genBreakpointArray(bp) {
  return bp.map(({ val }) => `${val}px`);
}

function genMediaQueries(bp) {
  return bp.reduce(
    (acc, { key, val }) => ({
      [key]: (...args) => css`
        @media (min-width: ${val}px) {
          ${css(...args)}
        }
      `,
      ...acc
    }),
    {}
  );
}

function genContentWidths(bp) {
  const widths = bp.map(({ contentWidth }) => `${contentWidth}px`);
  return [null, ...widths];
}

export function genBreakpoints({ override, breakpoints: bps }) {
  const { breakpoints: defaultBps } = defaultBreakpoints;
  const mergedBreakpoints = override
    ? override.breakpoints
    : mergeUniqueKey(defaultBps, bps, 'key', 'val');
  const breakpoints = genBreakpointArray(mergedBreakpoints);
  const mediaQueries = genMediaQueries(mergedBreakpoints);
  const contentWidths = genContentWidths(mergedBreakpoints);
  return {
    breakpoints,
    contentWidths,
    mediaQueries
  };
}

export default defaultBreakpoints;
