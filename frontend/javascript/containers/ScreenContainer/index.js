import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

const StyledScreenContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #14192d;
`;

const ScreenContainer = ({ children }) => {
  return <StyledScreenContainer>{children}</StyledScreenContainer>;
};

export default ScreenContainer;
