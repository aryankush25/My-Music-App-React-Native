import React from 'react';
import styled, { css } from 'styled-components';
import { View } from 'react-native';

const StyledScreenContainer = styled(View)`
  flex: 1;
  background-color: #14192d;
  ${props =>
    props.center &&
    css`
      align-items: center;
      justify-content: center;
    `}
`;

const ScreenContainer = ({ children, center = true }) => {
  return (
    <StyledScreenContainer center={center}>{children}</StyledScreenContainer>
  );
};

export default ScreenContainer;
