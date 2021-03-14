import { get } from 'theme-ui';
import { genTheme } from '@theme';
import { genTextInput } from '@tokens/components';

const defaultProps = {
  children: null,
  size: 'md',
  type: 'default',
  theme: genTheme()
};

describe('input tests', () => {
  it('it generates tag styles', () => {
    const input = genTextInput({ ...defaultProps });
    const text = get(defaultProps.theme, `colors.text`);
    expect(input).toHaveProperty('color', text);
  });

  it.skip('can merge styles', () => {
    return true;
  });

  it.skip('can be overriden by passing an "override" object', () => {
    return true;
  });
});
