import axios from "axios"

const weatherapi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    units: 'metric',
    APPID: process.env.REACT_APP_OWM_API_KEY
  }
})

export default weatherapi