import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import ClothingContainer from './Containers/ClothingContainer'
import OutfitContainer from './Containers/OutfitContainer'
import Jumbotron from './Components/Jumbotron'
const kelvinToFahrenheit = require('kelvin-to-fahrenheit');


class App extends Component {
  constructor(){
    super()

    this.state = {
      userInfo:{},
      bodyParts: ["head", "torso", "legs", "feet"],
      cityName: "",
      todaysDate: {},
      weather:[],
      allItems: [],
      weatherMain: null,
      currentOutfit: [],
      currentTemp: null,
      forecast: [],
      closet:[],
      ootd: [{body_part: "head"},{img_url: ""},{},{}]
    }
  }

  getCurrentTime(){
    return new Date();
  }

  onClickHandler = (itemObj) =>{
    debugger
    console.log("On click handler invoked!");
    let ootdNow = this.state.ootd
    debugger
  }


  componentDidMount(){
    // console.log("Component Mounted")
    // api address for forcast for washington D.C
    let forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?id=4140963&APPID=a2887188e8efc5d9f1e014fe7b8fc943"
    fetch(forecastUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // debugger
      this.setState({
        cityName: data.city.name,
        forecast: data.list,
        todaysDate: this.getCurrentTime(),
        currentTemp: kelvinToFahrenheit(data.list[0].main.temp),
        weather: data.list[0].weather,
        weatherMain: data.list[0].weather[0].main,
        weatherDesc: data.list[0].weather[0].description
      },()=> this.clothesFetch())
    })
}

 clothesFetch=()=>{
let currentData = {weather: this.state.weatherMain, currentTemp: this.state.currentTemp}
console.log(currentData)
 fetch('http://localhost:3001/hello', {
   method: "POST",
   headers: {
     "Content-Type": "application/json"
   },
   body: JSON.stringify(currentData)
 })
   .then(response => response.json())
   .then(items => this.setState({
     closet: items.items
   }))
 }

  render() {
    return (
      <div className="App">
        <Nav
        />
        <Jumbotron
          todaysDate={this.state.todaysDate}
          weatherDesc={this.state.weatherDesc}
          currentTemp={this.state.currentTemp}
          cityName={this.state.cityName}
          />
        <ClothingContainer
          closet={this.state.closet}
          forecast={this.state.forecast}
          onClickHandler={this.onClickHandler}
          />
        <OutfitContainer
          bodyParts={this.state.bodyParts}
          ootd={this.state.ootd}
          />



      </div>
    );
  }
}

export default App;
