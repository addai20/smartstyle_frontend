import React, { Component } from 'react'
import ClothingCard from '../Components/ClothingCard'

class ClothingContainer extends Component {



  render(){
    return(
      <div>
      <h2 className="clothingTitle" > Recommended Clothing </h2>
      <div className="d-flex flex-row bd-highlight mb-3 clothing">
        {this.props.closet.map((ele, idx)=> {
          return <ClothingCard
            key={idx}
            item={ele}
            onClickHandler={this.props.onClickHandler}

          />
        })}
      </div>
      </div>
    )
  }
}

export default ClothingContainer
