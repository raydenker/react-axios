import axios from 'axios'
import {WeatherContainer,City, Temp, Icon}  from './WeatherStyles'
import React, { useEffect, useState } from 'react'
const url =
  'https://api.weatherapi.com/v1/current.json?key=8bf8cf3d704243ed8ba224040231302&q=dnepropetrovsk&lang=uk'

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
