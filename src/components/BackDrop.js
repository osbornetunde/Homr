import React from 'react';
import './BackDrop.css';


const backDrop = props => (
    <div onClick={props.click} className="backdrop" />
)

export default backDrop;