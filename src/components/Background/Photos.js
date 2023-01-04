import React from 'react'
import { useWeather } from '../../context/WeatherContext'

function Photos() {
    const { weather } = useWeather();
    switch (weather.weather && weather.weather[0].main)
     {
        case 'Rain':
            return <img className='arkaplan-resim' src='https://post.healthline.com/wp-content/uploads/2020/10/rain-hand-umbrella-1200x628-facebook-1200x628.jpg' alt='yagmurlu' />
        case 'Drizzle':
            return <img className='arkaplan-resim' src='https://static.toiimg.com/photo/msid-82008095/82008095.jpg' alt='yagmurlu' />
        case 'Clear':
            return <img className='arkaplan-resim' src='http://yakintakipgazetesi.com/uploads/2020/04/17/123150_4-281.jpg' alt='yagmurlu' />
        case 'Mist':
            return <img className='arkaplan-resim' src='https://images.unsplash.com/photo-1603794052293-650dbdeef72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWlzdHxlbnwwfHwwfHw%3D&w=1000&q=80' alt='yagmurlu' />
        case 'Snow':
            return <img className='arkaplan-resim' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzgIV6PM2kqhLSfoLVI6JUdjTRUtolRd96ViwDuaCi8tBgwXAOjfeNXzFRUltwaxueCgc&usqp=CAU' alt='yagmurlu' />
        case 'Storm':
            return <img className='arkaplan-resim' src='http://c.files.bbci.co.uk/7C9E/production/_86220913_stuartedwards.jpg' alt='yagmurlu' />
        case 'Clouds':
            return <img className='arkaplan-resim' src='https://services.meteored.com/img/article/clouds-for-dummies-a-quick-primer-on-cloud-names-179762-1_1280.jpg' alt='yagmurlu' />
        default:
            return <img className='arkaplan-resim' src='https://services.meteored.com/img/article/clouds-for-dummies-a-quick-primer-on-cloud-names-179762-1_1280.jpg' alt='yagmurlu' />
    }
}

export default Photos;
