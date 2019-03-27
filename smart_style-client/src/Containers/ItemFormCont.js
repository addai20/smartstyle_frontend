import React, { Component } from 'react';
import ItemForm from '../Components/ItemForm'
import Nav from "../Components/Nav"

class ItemFormCont extends React.Component {
  debugger


  render(){
    return(
      <div className="ItemFormCont">
        <ItemForm patchItems={this.props.patchItems}/>



      </div>
    )
  }


}

export default ItemFormCont
