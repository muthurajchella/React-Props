import React, { Component } from 'react';

export default class Fourth extends Component {

  render() {
    return (
      <div>
        CC child {<br/>}
        {this.props.name}
        <button onClick={() => this.props.get("react")}>Click</button>

      </div>
    )
  }
}
