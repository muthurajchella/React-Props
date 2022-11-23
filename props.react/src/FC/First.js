import React from 'react';
import Second from './Second';
import Fourth from '../CC/Fourth';


const First = (props) => {
  return (
    <div>
        <h1>First fc parent </h1>
        {props.name}
        <Second />
        <Fourth />
    </div>
  )
}

export default First