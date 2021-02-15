import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledTextInput = styled.input`
  ${props => {
    const {
      theme: {
        components: { textInput }
      }
    } = props;
    return textInput(props);
  }}
`;

function TextInput({ color, disabled, placeholder, size, type, ...props }) {
  return (
    <StyledTextInput
      color={color}
      disabled={disabled}
      placeholder={placeholder}
      size={size}
      type={type}
      {...props}
    />
  );
}

TextInput.propTypes = {
  /**
   * corresponds to theme colors
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'accent', 'muted']),
  /**
   * if `true`, button is disabled
   */
  disabled: PropTypes.bool,
  /**
   * takes placeholder string
   */
  placeholder: PropTypes.string,
  /**
   * takes one of 'sm', 'md', 'lg'
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * takes one of 'default', 'outline', 'ghost'
   */
  type: PropTypes.oneOf(['default', 'outline', 'ghost'])
};

TextInput.defaultProps = {
  color: 'primary',
  disabled: false,
  placeholder: null,
  size: 'md',
  type: 'default'
};

export default TextInput;
