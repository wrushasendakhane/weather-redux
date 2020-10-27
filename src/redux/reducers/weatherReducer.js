import WeatherActionTypes from '../actionTypes/weatherActionTypes';
const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER:
      if (action.payload.data) {
        return [action.payload.data, ...state]
      }
      return state
    default:
      return state;
  }
}

export default weatherReducer;