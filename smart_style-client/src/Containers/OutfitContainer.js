import React, { Component } from 'react';
import OutfitCard from '../Components/OutfitCard'

class OutfitContainer extends React.Component {
  debugger


  render(){
    return(
      <div className="outfitContainer">
          <h2>Current Outfit</h2>

           <OutfitCard
             className="d-flex flex-row bd-highlight mb-3"
             bodyPart="head"
             items={this.props.head}
             removeItem={this.props.removeItem}
            />

            <OutfitCard
              className="d-flex flex-row bd-highlight mb-3"
              bodyPart="torso"
              items={this.props.torso}
              removeItem={this.props.removeItem}
             />

             <OutfitCard
               className="d-flex flex-row bd-highlight mb-3"
               bodyPart="legs"
               items={this.props.legs}
              removeItem={this.props.removeItem}
              />

              <OutfitCard
                className="d-flex flex-row bd-highlight mb-3"
                bodyPart="feet"
                items={this.props.feet}
                removeItem={this.props.removeItem}
               />




      </div>
    )
  }


}

export default OutfitContainer
