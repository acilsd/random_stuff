import { FETCH_TOPICS, TEST } from '../actions/index';

const INITIAL_STATE = {
  topics: [],
  loaded: false,
  test: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_TOPICS:
    return { ...state, topics: action.payload.data, loaded: true };
  case TEST:
    return { ...state, test: action.payload };
  default:
    return state;
  }
}
