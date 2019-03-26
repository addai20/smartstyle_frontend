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
      ootdHead: [],
      ootdTorso: [],
      ootdLegs: [],
      ootdFeet: []

    }
  }

  getCurrentTime(){
    return new Date();
  }

  onClickHandler = (itemObj) =>{


    // debugger
    console.log("On click handler invoked!");

    // get item body part from itemObj
    let itemBp = itemObj.body_part

    switch(itemBp){
      case "head":
        let ootdHead1 = this.state.ootdHead
          if (ootdHead1.includes(itemObj)){
            alert("Duplicate item clicked, plase choose another!")

            break;
          } else{
            ootdHead1.push(itemObj)
            this.setState({ootdHead: ootdHead1})
            window.alert(`${itemObj.name} added to outfit!`)
            break;}
      case "torso":
        let ootdTorso1 = this.state.ootdTorso
        ootdTorso1.push(itemObj)
        this.setState({ootdTorso: ootdTorso1})
        window.alert(`${itemObj.name} added to outfit!`)
        break
      case "legs":
        let ootdLegs1 = this.state.ootdLegs
        ootdLegs1.push(itemObj)
        this.setState({ootdLegs: ootdLegs1})
        window.alert(`${itemObj.name} added to outfit!`)
        break
      case "feet":
        let ootdFeet1 = this.state.ootdFeet
        ootdFeet1.push(itemObj)
        this.setState({ootdFeet: ootdFeet1})
        window.alert(`${itemObj.name} added to outfit!`)
    }

    let ootdNow = this.state.ootd
    debugger

  }

  removeItemHandler = (itemObj)=> {

    console.log("removeItemHandler invoked!!", itemObj);

  //get body_part from item
    let body = itemObj.body_part
    let currentState;
    let newArr;

    switch(body){
      case "head" :
        currentState = this.state.ootdHead
        newArr = currentState.filter(obj => obj.name !== itemObj.name)
        this.setState({ootdHead: newArr})
        break;
      case "torso" :
        currentState = this.state.ootdTorso
        newArr = currentState.filter(obj => obj.name !== itemObj.name)
        this.setState({ootdTorso: newArr})
        break;
      case "legs" :
        currentState = this.state.ootdLegs
        newArr = currentState.filter(obj => obj.name !== itemObj.name)
        this.setState({ootdLegs: newArr})
        break;
      case "feet" :
        currentState = this.state.ootdFeet
        newArr = currentState.filter(obj => obj.name !== itemObj.name)
        this.setState({ootdFeet: newArr})
        break;
    }

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
        <div className="masterCont">
          <ClothingContainer
            closet={this.state.closet}
            forecast={this.state.forecast}
            onClickHandler={this.onClickHandler}
            />
          <OutfitContainer
            removeItem={this.removeItemHandler}
            bodyParts={this.state.bodyParts}
            head={this.state.ootdHead}
            torso={this.state.ootdTorso}
            legs={this.state.ootdLegs}
            feet={this.state.ootdFeet}
            />
        </div>



      </div>
    );
  }
}

export default App;
