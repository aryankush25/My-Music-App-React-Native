import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Navigator from './navigator';

const Javascript = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default Javascript;
