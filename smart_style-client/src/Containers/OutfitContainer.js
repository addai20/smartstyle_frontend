import React, { Component } from 'react';
import OutfitCard from '../Components/OutfitCard'

class OutfitContainer extends React.Component {
  debugger


  render(){
    return(
      <div className="outfitContainer">

           <OutfitCard
             className="outfitCard"
             bodyPart="head"
             items={this.props.head}
             removeItem={this.props.removeItem}
            />

            <OutfitCard
              className="outfitCard"
              bodyPart="torso"
              items={this.props.torso}
              removeItem={this.props.removeItem}
             />

             <OutfitCard
               className="outfitCard"
               bodyPart="legs"
               items={this.props.legs}
              removeItem={this.props.removeItem}
              />

              <OutfitCard
                className="outfitCard"
                bodyPart="feet"
                items={this.props.feet}
                removeItem={this.props.removeItem}
               />




      </div>
    )
  }


}

export default OutfitContainer
