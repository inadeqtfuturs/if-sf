import { get } from 'theme-ui';
import { genTheme } from '@theme';
import { genTag } from '@tokens/components';

const defaultProps = {
  children: null,
  size: 'md',
  type: 'default',
  theme: genTheme()
};

describe('tag tests', () => {
  it('it generates tag styles', () => {
    const tag = genTag({ ...defaultProps });
    const text = get(defaultProps.theme, `colors.text`);
    expect(tag).toHaveProperty('color', text);
  });

  it.skip('can merge styles', () => {
    return true;
  });

  it.skip('can be overriden by passing an "override" object', () => {
    return true;
  });
});
