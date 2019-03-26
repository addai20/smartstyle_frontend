import React, { Component } from 'react'
import RowContainer from './RowContainer'

class ClothingContainer extends Component {



  render(){
    return(
      <div>
      <h2 className="clothingTitle" > Recommended Clothing </h2>
      <div className="d-flex flex-row bd-highlight mb-3 clothingContainer">
        <RowContainer onClickHandler={this.props.onClickHandler} items={this.props.closet.filter(item => item.body_part === "head")} bodyPart={"Head"}/>

        <RowContainer onClickHandler={this.props.onClickHandler} items={this.props.closet.filter(item => item.body_part === "torso")}bodyPart={"Torso"}/>

        <RowContainer onClickHandler={this.props.onClickHandler} items={this.props.closet.filter(item => item.body_part === "legs")}bodyPart={"Legs"}/>

        <RowContainer onClickHandler={this.props.onClickHandler} items={this.props.closet.filter(item => item.body_part === "feet")}bodyPart={"Feet"}/>

      </div>
  </div>
    )
  }
}

export default ClothingContainer
