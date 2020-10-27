import weatherapi from '../../apis/weather';
import WeatherActionTypes from '../actionTypes/weatherActionTypes';
export const fetchWeather = (city) => {
  const request = weatherapi.get("/forecast", {
    params: {
      q: city
    }
  })
  return {
    type: WeatherActionTypes.FETCH_WEATHER,
    payload: request
  }
}