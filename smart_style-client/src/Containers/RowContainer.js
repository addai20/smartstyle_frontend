import React, { Component } from 'react'
import ClothingCard from '../Components/ClothingCard'

class RowContainer extends Component {

  render(){
    return(
      <div className= "rowContainer">
      <h2 className="clothingTitle" > {this.props.bodyPart} </h2>
      <div className="d-flex flex-row bd-highlight mb-3">
        {this.props.items.map((ele, idx)=> {
          return <ClothingCard
            key={idx}
            item={ele}
            onClickHandler={this.props.onClickHandler}
          />
      }
    )
}
</div>
</div>
)
}
}

export default RowContainer
