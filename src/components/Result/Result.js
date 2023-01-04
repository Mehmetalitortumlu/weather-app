import React from 'react'
import { useWeather } from '../../context/WeatherContext'

function Result() {
    const {weather}=useWeather()
  return (
    <div>
        <>
            {typeof weather.main != 'undefined' && (
                <div className='sonuc'>
                    <div className='sehir'>{weather.name} {weather.sys.country} </div>
                    <div className='detay'>
                        <div className='derece'> {Math.round(weather.main.temp)} °C </div>
                        <div className='statu'> {weather.weather[0].description} </div>
                    </div>
                </div>
            )}
        </>
    </div>
  )
}

export default Result
