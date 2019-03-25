import React, { Component } from 'react'
import ForecastCard from '../Components/ForecastCard'

class ForecastContainer extends Component {

  render(){
    return(
      <div className="container">
        {this.props.forecast.map(ele=> {
          return <ForecastCard

          />
        })}
      </div>
    )
  }
}

export default ForecastContainer
