import { FETCH_TOPIC_ITEM } from '../actions/index';

const INITIAL_STATE = {
  images: [],
  loaded: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_TOPIC_ITEM:    
    return { ...state, images: action.payload.data, loaded: true };
  default:
    return state;
  }
}
