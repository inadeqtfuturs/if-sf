import { defaultBreakpoints, genBreakpoints } from '@theme/tokens';

it('generates array of breakpoints', () => {
  const { breakpoints } = genBreakpoints();
  expect(breakpoints).toHaveLength(defaultBreakpoints.breakpoints.length);
});

it('generates media queries', () => {
  const { mediaQueries } = genBreakpoints(defaultBreakpoints);
  const obj = defaultBreakpoints.breakpoints.reduce(
    (acc, { key }) => ({
      [key]: expect.any(Function),
      ...acc
    }),
    {}
  );
  expect(mediaQueries).toEqual(obj);
});

it('generates content width array', () => {
  const { contentWidths } = genBreakpoints(defaultBreakpoints);
  expect(contentWidths).toHaveLength(defaultBreakpoints.breakpoints.length + 1);
});

it('can be overriden with a new bp object', () => {
  const breakpoints = genBreakpoints({
    breakpoints: [
      { key: 'md', val: 800, contentWidth: 800 },
      { key: 'xl', val: 2000, contentWidth: 2100 }
    ]
  });
  expect(breakpoints.breakpoints[1]).toEqual('800px');
  expect(breakpoints.contentWidths[2]).toEqual('800px');
});

it('can be wholesale overriden by passing merge = false', () => {
  const breakpoints = {
    override: {
      breakpoints: [
        { key: 'sm', val: 500, contentWidth: 400 },
        { key: 'md', val: 800, contentWidth: 800 },
        { key: 'lg', val: 1200, contentWidth: 1000 }
      ]
    }
  };
  const { mediaQueries } = genBreakpoints(breakpoints);
  expect(mediaQueries).toEqual({
    sm: expect.any(Function),
    md: expect.any(Function),
    lg: expect.any(Function)
  });
});
