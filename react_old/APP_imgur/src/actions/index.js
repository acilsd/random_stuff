import axios from 'axios';
//import _ from 'lodash';

const ROOT_URL = 'https://api.imgur.com/3/';
const API_KEY = '3cc5d27ea2de91c';

export const FETCH_TOPICS = 'FETCH_TOPICS';
export const FETCH_TOPIC_ITEM = 'FETCH_TOPIC_ITEM';
export const TEST = 'test';

export function fetchTopics() {
  return function(dispatch) {
    axios.get(ROOT_URL + 'topics/defaults', {
      headers: { Authorization: 'Client-ID ' + API_KEY }
    })
    .then(response => {
      dispatch({
        type: FETCH_TOPICS,
        payload: response.data
      });
    });
  };
}

export function fetchTopicImages(id) {
  return function(dispatch) {
    axios.get(ROOT_URL + 'topics/' + id, {
      headers: { Authorization: 'Client-ID ' + API_KEY }
    })
    .then(response => {
      dispatch({
        type: FETCH_TOPIC_ITEM,
        payload: response.data
      });
    });
  };
}

export function testProp() {
  return {
    type: TEST,
    payload: true
  };
}
