import { get } from 'theme-ui';
import { genTheme } from '@theme';
import { genButton } from '@theme/components';

const defaultProps = {
  children: null,
  color: 'primary',
  disabled: false,
  onClick: () => {},
  size: 'md',
  type: 'default',
  theme: genTheme()
};

describe('button tests', () => {
  it('it generates button styles', () => {
    const button = genButton({ ...defaultProps });
    const background = get(defaultProps.theme, `colors.background`);
    expect(button).toHaveProperty('color', background);
  });

  it('can merge styles', () => {
    const button = genButton({
      ...defaultProps,
      styles: { outline: '1px solid green' }
    });
    const background = get(defaultProps.theme, `colors.background`);
    expect(button).toHaveProperty('color', background);
    expect(button).toHaveProperty('outline', '1px solid green');
  });

  it('can be overriden by passing an "override" object', () => {
    const button = genButton({
      ...defaultProps,
      override: { styles: { display: 'inline' } }
    });
    expect(button).not.toHaveProperty('display', 'flex');
    expect(button).toHaveProperty('display', 'inline');
  });
});
