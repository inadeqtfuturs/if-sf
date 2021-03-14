import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Container = styled.div`
  background-color: blue;
  ${({ theme }) => css`
    ${theme.md`
      background-color: red;
    `}
    ${theme.xl`
      background-color: green;
    `}
  `}
`;

export default {
  title: 'tokens/breakpoints'
};

const Template = () => (
  <Container>
    <h1>breakpoints</h1>
  </Container>
);

export const Breakpoints = Template.bind({});
