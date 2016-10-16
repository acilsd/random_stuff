import { combineReducers } from 'redux';
import topics from './reducer-topics';
import topic from './reducer-topic';

const rootReducer = combineReducers({
  topics,
  topic
});

export default rootReducer;
