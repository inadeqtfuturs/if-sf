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
    expect(button).toHaveProperty('color', '#F9FAFB');
  });

  it('can merge styles', () => {
    const button = genButton({
      ...defaultProps,
      styles: { outline: '1px solid green' }
    });
    expect(button).toHaveProperty('color', '#F9FAFB');
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
