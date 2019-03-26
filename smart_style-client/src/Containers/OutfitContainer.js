import React, { Component } from 'react';
import OutfitCard from '../Components/OutfitCard'

class OutfitContainer extends React.Component {
  debugger

  render(){
    return(
      <div className="outfitContainer">
        {this.props.bodyParts.map((bp, idx) =>{
           return <OutfitCard
             className="outfitCard"
             key={idx}
             bodyPart={bp}
             ootd={this.props.ootd}
            />


        })}
      </div>
    )
  }


}

export default OutfitContainer
