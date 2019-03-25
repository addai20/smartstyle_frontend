import React, { Component } from 'react'

class ClothingCard extends Component {
  render(){
    return (
      <div className="p-2 bd-highlight" >
        <div className="card-body">
          <img
            src={this.props.item.img_url}
          />
          <h6 className="card-title">{this.props.item.name}</h6>
          <h7 className="card-subtitle mb-2 text-muted">{this.props.item.body_part}</h7>
        </div>
      </div>
    )
  }
}

export default ClothingCard
