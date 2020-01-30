import React from 'react';
import { useSelector } from 'react-redux';
import Navigator from './navigators';
import Loader from './components/SharedComponents/Loader';

const Javascript = () => {
  const isLoading = useSelector(state => state.loadingReducer.loading);
  return (
    <React.Fragment>
      <Loader loading={isLoading} />
      <Navigator />
    </React.Fragment>
  );
};

export default Javascript;
