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

export function genBreakpoints({
  breakpoints: passedBreakpoints,
  override
} = {}) {
  const { breakpoints: defaultBps } = defaultBreakpoints;
  if (!passedBreakpoints && !override) {
    return {
      breakpoints: genBreakpointArray(defaultBps),
      contentWidths: genContentWidths(defaultBps),
      mediaQueries: genMediaQueries(defaultBps)
    };
  }
  const mergedBreakpoints = override
    ? override.breakpoints
    : mergeUniqueKey(defaultBps, passedBreakpoints, 'key', 'val');
  return {
    breakpoints: genBreakpointArray(mergedBreakpoints),
    contentWidths: genContentWidths(mergedBreakpoints),
    mediaQueries: genMediaQueries(mergedBreakpoints)
  };
}

export default defaultBreakpoints;
