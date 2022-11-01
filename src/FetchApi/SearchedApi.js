import React from 'react'
import './FetchCities.css'
import waterdrop from '../icons/water-drop.svg'
import thermometer from '../icons/thermometer.svg'
import air from '../icons/air.svg'

function SearchedApi({ temperature, high, low, feelsLike, humidity, wind, weather, name }) {

    return (
        <>
            <div className='city-container'>
                <h1>{name}</h1>
                <div><p>{weather}</p></div>
                <div className='temp-cont'>
                    <div> <h2>{Math.round(temperature)}</h2></div>
                    <span>o</span>
                </div>

            </div>
            <div className='details-container'>
                <div className='second-container'>
                    <img src={thermometer}></img>
                    <h1><span>Feels Like:</span> {feelsLike}<span className='o-span'>o</span></h1>
                </div>
                <div className='second-container'>
                    <img src={waterdrop}></img>
                    <h1><span>Humidity:</span> {humidity}%</h1>
                </div>
                <div className='second-container'>
                    <img src={air}></img>
                    <h1><span>Wind:</span>  {`${wind + ' km/h'}`}</h1>
                </div>
                {/* {searched && <h2>Humidity: {cityData.main.humidity > 2 ? 'cold' : 'hot'}</h2>} */}
            </div>
            <div className='more-details'>
                <h1><span>High:</span> {Math.round(high)}</h1>
                <p></p>
                <h1><span>Low:</span> {Math.round(low)}</h1>
                <p className='p'></p>
            </div>
            <div className='data-changes'>
                <h1 >Data changes in every 10 minutes</h1>
            </div>
        </>
    )
}



export default SearchedApi