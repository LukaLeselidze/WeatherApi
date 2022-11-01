import React, { useEffect, useState } from 'react'
import './FetchCities.css'
import waterdrop from '../icons/water-drop.svg'
import thermometer from '../icons/thermometer.svg'
import air from '../icons/air.svg'
import rainy from '../icons/rainy.svg'
import sunny from '../icons/sunny.svg'


function FetchApis({ name }) {
    const [cityData, setCityData] = useState({});
    const [searched, setSearched] = useState(false);

    const cityWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Batumi&appid=029cc9c1b544f341ab25d75d65e9f4cf`

    useEffect(() => {
        fetch(cityWeatherUrl).then(res => {
            return res.json()
        }).then(data => {
            setCityData(data)
            setSearched(true)
        })
    }, [])


    return (
        <>
            <div className='city-container'>
                <h1>{name}</h1>
                <div>{searched && <p>{cityData.weather[0].main}</p>}</div>
                <div className='temp-cont'>
                    <div>{searched && <h2> {Math.round(cityData.main.temp)}</h2>}</div>
                    <span>o</span>
                    <img src={searched && cityData.weather[0].main === 'Clear' ? sunny : rainy || cityData.weather[0].main === 'Clear' && thermometer}></img>
                </div>
            </div>
            <div className='details-container'>

                <div className='second-container'>
                    <img src={thermometer}></img>
                    {searched && <h1><span>Feels Like:</span> {cityData.main.feels_like}</h1>}
                </div>
                <div className='second-container'>
                    <img src={waterdrop}></img>
                    {searched && <h1><span>Humidity:</span> {cityData.main.humidity}%</h1>}
                </div>
                <div className='second-container'>
                    <img src={air}></img>
                    {searched && <h1><span>Wind:</span>  {`${cityData.wind.speed + ' km/h'}`}</h1>}
                </div>
                {/* {searched && <h2>Humidity: {cityData.main.humidity > 2 ? 'cold' : 'hot'}</h2>} */}
                <div className='more-details'>
                    <h1><span>High:</span> {searched && Math.round(cityData.main.temp_max)}</h1>
                    <p></p>
                    <h1><span>Low:</span> {searched && Math.round(cityData.main.temp_min)}</h1>
                    <p className='p'></p>
                </div>
                <div className='data-changes'>
                    <h1 >Data changes in every 10 minutes</h1>
                </div>
            </div>
        </>
    )
}

export default FetchApis