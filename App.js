import React from 'react';
import JavaScript from './javascript';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './javascript/store';

const App = () => {
  return (
    <Provider store={store}>
      <JavaScript />
    </Provider>
  );
};

export default App;
