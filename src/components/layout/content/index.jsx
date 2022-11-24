import React from 'react';
import "./index.css";

export default function Content(props) {
  return <>
    <div className='content-container'>
      {props.children}
    </div>
  </>
}