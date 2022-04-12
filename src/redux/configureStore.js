import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketReducer from './Rockets/Rockets';
import missionsReducer from './Missions/missions';

const root = combineReducers({
  rockets: rocketReducer,
  missions: missionsReducer,
});

const store = createStore(root, applyMiddleware(logger, thunk));
store.dispatch(rocketReducer);
export default store;
