import React, { useState } from 'react';
import "./App.css"
import zone from "../zone.png"
import { motion } from "framer-motion";

export default function Cmd(props) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [isDragging, setIsDragging] = useState(false);
  return (
    <motion.div
    className="item modal"
    drag
    dragConstraints  =  {props.body}
    style={{
    }}
  >
    <div className='NavBar'> 
      <div className='left'> 
      <img src={zone}/>
      <h1>zone</h1>
      </div>

      <div className='right'> <h1 onClick={() => handleClose()} >X</h1> </div>
    </div>

    <h1>Tomás Caula 2023</h1>
    <h1>c:\Projects\Zone</h1>
  </motion.div>
  );
}