import React from 'react';
import Second from './Second';


const First = (props) => {
  return (
    <div>
        <h1>First</h1>
        {props.name}
        <Second />
    </div>
  )
}

export default First