import React, { Component } from 'react';
import RowContainer from '../Components/OutfitCard'

class OutfitContainer extends React.Component {
  debugger


  render(){
    return(
      <div className="outfitContainer">
          <h2>Today's Outfit</h2>

           <RowContainer
             bodyPart={"Head"}
             items={this.props.head}
             removeItem={this.props.removeItem}
            />

            <RowContainer
              bodyPart={"Torso"}
              items={this.props.torso}
              removeItem={this.props.removeItem}
             />

             <RowContainer
               bodyPart={"Legs"}
               items={this.props.legs}
              removeItem={this.props.removeItem}
              />

              <RowContainer
                bodyPart={"Feet"}
                items={this.props.feet}
                removeItem={this.props.removeItem}
               />




      </div>
    )
  }


}

export default OutfitContainer
