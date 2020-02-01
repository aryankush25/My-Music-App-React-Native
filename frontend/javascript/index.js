import React from 'react';
import { useSelector } from 'react-redux';
import { useDefaultAuth } from './hooks/authHooks';
import Navigator from './navigators';
import Loader from './components/SharedComponents/Loader';

const Javascript = () => {
  useDefaultAuth();
  const isLoading = useSelector(state => state.loadingReducer.loading);

  return (
    <React.Fragment>
      <Loader loading={isLoading} />
      <Navigator />
    </React.Fragment>
  );
};

export default Javascript;
