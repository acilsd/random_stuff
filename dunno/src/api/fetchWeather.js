import axios from 'axios';

export const API_KEY = '47c0d7f2c3864286e6dca6408bf58b88';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

export const fetchWeather = (location) => {

  const encodedLocation = encodeURIComponent(location);
  const API_CALL = `${ROOT_URL}&q=${encodedLocation}`;

  return axios.get(API_CALL)
    .then((res) => {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
