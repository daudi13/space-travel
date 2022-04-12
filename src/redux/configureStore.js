import { combineReducer, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketReducer from './Rockets/Rockets';

const root = combineReducer(
  {
    rockets: rocketReducer,
  },
);

const store = createStore(root, applyMiddleware(logger, thunk));
store.dispatch(rocketReducer);
export default store;
