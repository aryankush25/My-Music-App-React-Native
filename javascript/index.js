import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Components from './components';

const Javascript = () => {
  return (
    <Provider store={store}>
      <Components />
    </Provider>
  );
};

export default Javascript;
