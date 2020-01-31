import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const reduxLogger = createLogger({});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, reduxLogger),
);

sagaMiddleware.run(rootSaga);

export default store;
