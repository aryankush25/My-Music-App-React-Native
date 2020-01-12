import React, {Fragment} from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

const Components = () => {
  const store = useSelector(state => state);

  return (
    <Fragment>
      <SafeAreaView />
      <Text>Hello</Text>
    </Fragment>
  );
};

export default Components;
