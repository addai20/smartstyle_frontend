import React, { Component } from 'react';
import OutfitCard from '../Components/OutfitCard'

class OutfitContainer extends React.Component {

  render(){
    return(
      <div>
        {this.props.bodyParts.map(bp=>{
           return <OutfitCard
             bodyPart={bp}
            />


        })}
      </div>
    )
  }


}

export default OutfitContainer
