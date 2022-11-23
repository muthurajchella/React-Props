import React, { Component } from 'react'

export default class First123 extends Component {      //extends parent to components propertice dirve or use pannrom
  constructor() {
    super();                                           // same as super key word
    console.log(this);
    this.getDataUseCons = this.getDataUseCons.bind(this)
  }

  getDataUseCons(){
    console.log("data", this);
  }

  getData(){
    console.log("data", this);
  }

  render() {
    // console.log(this);
    return (
      <div>
        {this.props.name}
        <button onClick={this.getData.bind(this)}>getData</button>
        <button onClick={this.getDataUseCons}>getDataUseCons</button>
      </div>
    )
  }
}
