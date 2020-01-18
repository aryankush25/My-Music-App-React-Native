import React, {Fragment} from 'react';
import {Button, Dimensions, SafeAreaView, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styled, {css} from 'styled-components';
import Navigator from "./Navigator"


var {height, width} = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
  width: ${width};
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props => props.backgroundColor};
    `}
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: palevioletred;
`;

const Components = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  return (
      <Navigator />
  );
};

export default Components;
