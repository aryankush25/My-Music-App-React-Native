import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Navigator from './Navigator';

const Javascript = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default Javascript;
