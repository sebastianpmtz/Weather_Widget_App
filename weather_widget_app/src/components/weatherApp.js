import { useState, useEffect } from 'react';
import WeatherForm from './weatherForm';
import WeatherMainInfo from './weatherMainInfo'

import s from './weatherApp.module.css'

const URL = 'http://api.weatherapi.com/v1/current.json?'
const KEY = '38f850ab1381464d997232036220911'

export default function WeatherApp() {
  const [weather, setWeather] = useState(null)
  console.log(s);
  useEffect(() => {
    loadInfo();
  }, []);
  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`
  }, [weather]);
  
  async function loadInfo(city = 'london') {
    try {
      const request = await fetch(`${URL}&key=${KEY}&q=${city}&aqi=no`);
      console.log(request);
      const json = await request.json();
      setWeather(json);
    } catch (e) {
      throw Error(e)
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={s.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={ weather } />
    </div>
  )
}
// ${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no