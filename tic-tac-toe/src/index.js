import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
  return(
    <botton className="square" onClick={props.onClick}>
      {props.value}
    </botton>
  );
}
