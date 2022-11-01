import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import FetchCities from './FetchApi/FetchCities';
import SearchedApi from './FetchApi/SearchedApi';
import FetchTbilisi from './FetchApi/FetchTbilisi'
import FetchKutaisi from './FetchApi/FetchKutaisi'
import FetchBakuriani from './FetchApi/FetchBakuriani'


function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [searched, setSearched] = useState(false);
  const [forecast, setForecast] = useState({})

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=029cc9c1b544f341ab25d75d65e9f4cf`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        setSearched(true)
      })
    }
  }

  const daysForecastUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Batumi&appid=029cc9c1b544f341ab25d75d65e9f4cf`

  useEffect(() => {
    fetch(daysForecastUrl).then(res => {
      return res.json()
    }).then(forecast => {
      setForecast(forecast)
    })
  }, [])

  console.log(forecast)


  console.log(data)


  return (

    <div className="App">
      <div className='input-container'>
        <input placeholder='Search and press Enter' value={location} onKeyPress={searchLocation} type='text' onChange={event => setLocation(event.target.value)}></input></div>

      <div className='card-container'>
        <div className='card'>
          <div className='name-container'>
            <Link to={`about${data.name}`}> {data.name} </Link>
            <Link to='/'> Batumi </Link>
            <Link to='/aboutTbilisi'> Tbilisi </Link>
            <Link to='/aboutKutaisi'> Kutaisi </Link>
            <Link to='/aboutBakuriani'> Bakuriani </Link>
          </div>

          <Routes>
            <Route path='/' element={<FetchCities name={'Batumi'} />} />
            <Route path="/aboutTbilisi" element={<FetchTbilisi name={'Tbilisi'} />} />
            <Route path="/aboutKutaisi" element={<FetchKutaisi name={'Kutaisi'} />} />
            <Route path="/aboutBakuriani" element={<FetchBakuriani name={'Bakuriani'} />} />
            <Route path={`about${data.name}`} element={<SearchedApi weather={searched ? data.weather[0].description : ''} humidity={searched ? data.main.humidity : ''} wind={searched ? data.wind.speed : ''} feelsLike={searched ? data.main.feels_like : ''} high={searched ? data.main.temp_max : ''} low={searched ? data.main.temp_min : ''} temperature={searched ? data.main.temp : ''} name={data.name} />} />
            {/* <Route path={`about${data.name}`} element={<SearchedApi name={data.name} />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
