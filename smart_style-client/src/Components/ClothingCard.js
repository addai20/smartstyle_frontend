import React, { Component } from 'react'

class ClothingCard extends Component {
  render(){
    return (
      <div className="p-2 bd-highlight" onClick={()=>this.props.onClickHandler(this.props.item)}>
        <div className="card-body">
          <img
            src={this.props.item.img_url}
          />
          <h5 className="card-title">{this.props.item.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.item.body_part}</h6>
        </div>
      </div>
    )
  }
}

export default ClothingCard
