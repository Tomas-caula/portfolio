import React, { useState } from 'react';
import "./cmd.css"
import { ReactDOM } from 'react';
import { motion } from "framer-motion";


export default function Cmd(props) {

  return (
<div className='item modal'> 
    <div className='NavBar'> 
      <div className='left'> 
      <img src={props.ico}/>
      <h1>{props.name}</h1>
      </div>

      <div className='right'> 
        <button onClick={() =>  { 
          props.close(props.id)
        }}> 
          X
        </button>
       </div>
    </div>

    <h1>Tomás Caula 2023</h1>
    <h1>c:\Projects\{props.name}</h1>
    <img draggable= "false" src= {props.image} alt="" />
    <h1> 
      {props.texto}
    </h1>
</div>
  );
}