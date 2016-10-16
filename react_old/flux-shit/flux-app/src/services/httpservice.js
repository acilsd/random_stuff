import Fetch from 'whatwg-fetch';

const baseUrl = 'http://localhost:3000';

const service = {
  get: function(url) {
    return fetch(baseUrl + url)
    .then(function(response) {
      return response.json();
    });
  }
};

export default service;
