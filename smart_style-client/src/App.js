import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'

class App extends Component {
  constructor(){
    super()

    this.state = {
      todaysDate: {},
      allItems: [],
      currentOutfit: [],
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
        forecast: data,
        todaysDate: this.getCurrentTime()
      })
    })
  }



  render() {
    return (
      <div className="App">
        <Nav
          todaysDate={this.state.todaysDate}
        />
        
      </div>
    );
  }
}

export default App;
