import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  ${props => {
    const {
      theme: {
        components: { button }
      }
    } = props;
    return button(props);
  }}
`;

function Button({ children, color, disabled, onClick, size, type, ...props }) {
  return (
    <StyledButton
      color={color}
      disabled={disabled}
      onClick={onClick}
      size={size}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  /**
   * content of button
   */
  children: PropTypes.string,
  /**
   * takes one of 'primary', 'secondary', 'accent', 'muted'. corresponds
   * to theme colors
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'accent', 'muted']),
  /**
   * if `true`, button is disabled
   */
  disabled: PropTypes.bool,
  /**
   * function called on click
   */
  onClick: PropTypes.func,
  /**
   * takes one of 'sm', 'md', 'lg'
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * takes one of 'default', 'outline', 'ghost'
   */
  type: PropTypes.oneOf(['default', 'outline', 'ghost'])
};

Button.defaultProps = {
  children: null,
  color: 'primary',
  disabled: false,
  onClick: () => {},
  size: 'md',
  type: 'default'
};

export default Button;
