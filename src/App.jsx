import { useState, useEffect } from 'react'
import { inputStyle, labelStyle, buttonStyle } from './style'
import WeatherCard from './components/WeatherCard'
const API_KEY = "c7babac28e414a38afd104600241408"


const App = () => {
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState({})

  const getWeather = async (city = "Ambarawa") => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`)
    const data = await response.json()
    setWeather(data)
    console.log(data)
  }

  useEffect(() => {
    getWeather()
  }, [])


  return (
    <>
      <div className="mx-auto w-3/6 flex mt-5 gap-3">
        <div className="relative w-full h-10">
          <input className={inputStyle} type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          <label className={labelStyle}>City</label>
        </div>
        <button className={buttonStyle} onClick={() => getWeather(location)}>Search</button>
      </div>
      <div className="mx-auto">
        {
          weather.location && <WeatherCard weather={weather} />
        }
      </div>


    </>
  )
}

export default App