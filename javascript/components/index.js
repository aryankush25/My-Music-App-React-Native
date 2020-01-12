import React, {Fragment} from 'react';
import {Button, Dimensions, SafeAreaView, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styled, {css} from 'styled-components';

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
    <Container backgroundColor="blue">
      <SafeAreaView />
      <Container>
        <Title>Styled Components</Title>
        <Button
          title="Login"
          onPress={() => dispatch({type: 'LOGIN', trueFalse: true})}
        />
      </Container>
    </Container>
  );
};

export default Components;
