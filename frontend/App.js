import React, { useEffect } from 'react';
import JavaScript from './javascript';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import store from './javascript/store';

const App = () => {

  return (
    <Provider store={store}>
      <JavaScript />
    </Provider>
  );
};

export default App;
