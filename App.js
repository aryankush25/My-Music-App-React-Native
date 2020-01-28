import React, {useEffect} from 'react';
import JavaScript from './javascript';
import {Provider} from 'react-redux';
import * as firebase from "firebase/app";
import "firebase/auth";
import 'react-native-gesture-handler';
import store from './javascript/store';
import {firebaseConfig} from './javascript/utils/configs/firebaseConfigs';

const App = () => {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [])

  return (
    <Provider store={store}>
      <JavaScript />
    </Provider>
  );
};

export default App;
