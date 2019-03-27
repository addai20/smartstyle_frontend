import React, { Component } from 'react'

class ItemForm extends Component {
  render(){
    return (
  <form onSubmit={(event)=>this.props.patchItems(event)}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Item Name</label>
    <input className="Name" type="text" class="form-control" id="name" placeholder="Ex: Grey Shirt"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Which area of the body do you wear this?</label>
    <select class="form-control" id="body_part">
      <option>Head</option>
      <option>Torso</option>
      <option>Legs</option>
      <option>Feet</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Min-Temp</label>
    <select class="form-control" id="Min">
      <option>0</option>
      <option>32</option>
      <option>45</option>
      <option>60</option>
      <option>75</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Max-Temp</label>
    <select class="form-control" id="Max">
      <option>32</option>
      <option>45</option>
      <option>60</option>
      <option>80</option>
      <option>120</option>
    </select>
  </div>
  <div class="form-group">
  <label for="exampleFormControlInput2">Item URL</label>
  <input type="text" class="form-control" id="URL" placeholder="Please upload a .jpg, or we will break"/>
  </div>
  <input type="submit"/>
</form>
)
}
}

export default ItemForm
