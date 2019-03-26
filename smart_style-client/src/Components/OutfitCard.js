import React, { Component } from 'react';


class OutfitCard extends Component {

  render(){
    return(

      <div>
      <h3> {this.props.bodyPart.toUpperCase()}</h3>
      {this.props.items.map(obj => {
        return <div className="card-body" >
          <img
            alt="item"
            src={obj.img_url}
          />
          <button type="button" className="btn btn-dark" onClick={()=>{this.props.removeItem(obj)}}> - </button>
        </div>
      })}

      </div>
    )
  }
}

export default OutfitCard
