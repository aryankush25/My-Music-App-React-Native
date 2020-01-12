import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers';

const reduxLogger = createLogger({});

const store = createStore(rootReducer, applyMiddleware(reduxLogger));

export default store;
