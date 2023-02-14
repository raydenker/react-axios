import axios from 'axios'
import {WeatherContainer,City, Temp, Icon}  from './WeatherStyles'
import React, { useEffect, useState } from 'react'
import { WEATHER_API_KEY } from '../config'
const url =
  `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=dnepropetrovsk&lang=uk`

function Weather() {
  const [data, setData] = useState(null) 
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
       // eslint-disable-next-line
  }, [])
  if (!data) return null

  return (
    <WeatherContainer>
      
      <Temp>{data.current.temp_c}&#176; <Icon
        src={data.current.condition.icon}
        alt={data.current.condition.text}
      /></Temp>
      <City>Днiпро</City>
    </WeatherContainer>
  )
}

export default Weather
