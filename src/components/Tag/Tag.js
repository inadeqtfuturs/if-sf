import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledTag = styled.span`
  ${props => {
    const {
      theme: {
        components: { tag }
      }
    } = props;
    return tag(props);
  }}
`;

function Tag({ children, size, type, ...props }) {
  return (
    <StyledTag size={size} type={type} {...props}>
      {children}
    </StyledTag>
  );
}

Tag.propTypes = {
  /**
   * content of button
   */
  children: PropTypes.string,
  /**
   * takes one of 'sm', 'md', 'lg'
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * takes one of 'default', 'outline'
   */
  type: PropTypes.oneOf(['default', 'outline'])
};

Tag.defaultProps = {
  children: null,
  size: 'md',
  type: 'default'
};

export default Tag;
