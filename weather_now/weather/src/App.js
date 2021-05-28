import React, { useState } from 'react';

const api = {
  key: "5bf4fafff45fcba466699c5e57f32492",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState({});

  const search = evt => {
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then (res => res.json())
      .then (result => {
        setWeather(result)
        setQuery('');
        //console.log(result);
      });
    }
  }
  const choseWeath = () => {

    if(typeof weather.main != "undefined")
  {  
    switch (weather.weather[0].main)
    {
      case "Clear":
        if (weather.main.temp > 16) return 'app warm'
        else return 'app'
      case "Rain":

        return 'app rain';
      case "Clouds":

        return 'app clouds';
      
        default: return 'app';
    }
  } else return 'app';
    
  }
  const dataBuilder = (d) => {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className= {choseWeath()}
    /*{(typeof weather.main != "undefined")
    ? ((weather.main.temp > 16)
      ? 'app warm' : 'app') 
        : 'app'}*/

    >
      <main>
        <div className = "search_box">
          <input
          type = "text"
          className= "search_bar"
          placeholder="Search ..."
          onChange = {e => setQuery(e.target.value)}
          value = {query}
          onKeyPress = {search}
          />
        </div>
        {(typeof weather.main != "undefined")? (
          <div>
            <div className = "location-box">
              <div className = "location">{weather.name}, {weather.sys.country}</div>
              <div className = "data">{dataBuilder(new Date())}</div>
            </div>
            <div className = "weather-box">
              <div className = "temp">
                {Math.round(weather.main.temp)}ºC
              </div>
              <div className ="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
