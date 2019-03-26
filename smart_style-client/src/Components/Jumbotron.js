import React, { Component } from 'react'

class Jumbotron extends Component {

  render(){
    return(
      <div className="jumbotron jumbotron-fluid">
        <div className="container">

          <img alt="weather icon" src="https://media1.tenor.com/images/a9b3e91e8db7b177b0e3fa7c67a2ecfa/tenor.gif?itemid=4710146"/>
          <h1 className="display-4">{this.props.weatherDesc}</h1>
          <p className="lead">{this.props.currentTemp} °F</p>
          <p className="lead">{this.props.cityName}</p>
        </div>
      </div>
    )
  }
}

export default Jumbotron
