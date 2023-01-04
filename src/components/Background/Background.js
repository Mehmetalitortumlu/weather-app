import React from 'react'
import { useWeather } from '../../context/WeatherContext'
import Photos from './Photos'

function Background() {
    const {weather} = useWeather()

    return (
        <div>
            <div className='arkaplan'>
                <div className='overlay'></div>
                <Photos />
            </div>
        </div>
    )
}

export default Background
