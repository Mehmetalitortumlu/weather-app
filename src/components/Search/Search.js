import React,{useState} from 'react'
import { useWeather } from '../../context/WeatherContext';

function Search() {
    const { setWeather } = useWeather()

    const api = {
        key: '2820eceabe60a4c156d25f45d6e2db76',
        base: `https://api.openweathermap.org/data/2.5/weather`
    };

    const [input, setInput] = useState('');

    const ara = (e) => {
        if (e.key === 'Enter') {
            fetch(`${api.base}?q=${input}&units=metric&lang=tr&appid=${api.key}`)
                .then((veri) => veri.json())
                .then(sonuc => {
                    setInput('');
                    setWeather(sonuc);
                });
        };
    };

    return (
        <div className='arama'>
            <input
                placeholder='Şehir'
                className='arama-input'
                onChange={(e) => setInput(e.target.value)}
                value={input}
                onKeyPress={ara}
            />
        </div>
    )
}

export default Search
