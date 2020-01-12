import React, {useState} from 'react';
import {Text, TextInput, View, Button, SafeAreaView} from 'react-native';
import Touchables from './Touchables';

const App = () => {
  return (
    <React.Fragment>
      <SafeAreaView />
      <Touchables />
    </React.Fragment>
  );
};

export default App;
