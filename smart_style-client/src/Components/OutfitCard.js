import React, { Component } from 'react';


class OutfitCard extends Component {

  render(){
    return(

      <div>
      <h3> {this.props.bodyPart.toUpperCase()}</h3>
      <h4> Hello World</h4>
      <img
        src="https://i.imgur.com/QF12xFEt.jpg"
      />
      </div>
    )
  }
}

export default OutfitCard
