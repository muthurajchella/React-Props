import React, { Component } from 'react';
import Fourth from './Fourth';

export default class Third extends Component {

  getData = (data) => {
    console.log(data);
  };

  render() {
    console.log("this", this);
    return (
      <div>
        Class Components parent {<br/>}{this.props.name} {this.props.age}
        <Fourth name = {this.props.name}  get={this.getData}/>
       
      </div>
    )
  }
}
