import axios from 'axios'
//axios is like superagent that gets the url

const API_KEY = 'f2d04e437c26a7179fca75252262043f'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&APPID=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},nz`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}