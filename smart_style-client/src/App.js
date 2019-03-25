import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import ForecastContainer from './Containers/ForecastContainer'
const kelvinToFahrenheit = require('kelvin-to-fahrenheit');


class App extends Component {
  constructor(){
    super()

    this.state = {
      userInfo:{},
      todaysDate: {},
      weather:[],
      allItems: [],
      currentOutfit: [],
      currentTemp: null,
      forecast: []
    }
  }

  getCurrentTime(){
    return new Date();
  }


  componentDidMount(){


    // console.log("Component Mounted")
    // api address for forcast for washington D.C
    let forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?id=4140963&APPID=a2887188e8efc5d9f1e014fe7b8fc943"
    fetch(forecastUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        forecast: data.list,
        todaysDate: this.getCurrentTime(),
        currentTemp: kelvinToFahrenheit(data.list[0].main.temp)
      })
    })
  }



  render() {
    return (
      <div className="App">
        <Nav
          todaysDate={this.state.todaysDate}
        />
        <ForecastContainer
          forecast={this.state.forecast}
        />



      </div>
    );
  }
}

export default App;
