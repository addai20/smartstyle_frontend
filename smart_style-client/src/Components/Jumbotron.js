import React, { Component } from 'react'

class Jumbotron extends Component {

  iconSelector = ()=>{
    let currentWeather = this.props.weatherDesc
    let iconUrl;

    switch(currentWeather){
      case "clear sky" :
        iconUrl = "https://i.imgur.com/gDiI9Mzh.png"
        break;
      case "few clouds" :
        iconUrl = "https://i.imgur.com/VMXocBVh.png"
        break;
      case "scattered clouds" :
        iconUrl = "https://i.imgur.com/CdfWaFlh.png"
        break;
      case "broken clouds" :
        iconUrl = "https://i.imgur.com/CdfWaFlh.png"
        break;
      case "shower rain" :
        iconUrl = "https://i.imgur.com/NiU2mGkh.png"
        break;
      case "rain" :
        iconUrl = "https://i.imgur.com/NiU2mGkh.png"
        break;
      case "thunderstorm" :
        iconUrl = "https://i.imgur.com/wBzNNvqh.png"
        break;
      case "snow" :
        iconUrl = "https://i.imgur.com/Ws22IcXh.png"
        break;
      case "mist" :
        iconUrl = "https://i.imgur.com/NiU2mGkh.png"
        break;
    }

    return iconUrl
  }

  

  render(){
    return(
      <div className="jumbotron jumbotron-fluid">
        <div className="container">

          <img alt="weather icon" className="image" src={`${this.iconSelector()}`}/>
          <h1 className="display-4">{this.props.weatherDesc}</h1>
          <p className="lead">{this.props.currentTemp} °F</p>
          <p className="lead">{this.props.cityName}</p>
        </div>
      </div>
    )
  }
}

export default Jumbotron
