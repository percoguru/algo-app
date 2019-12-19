import React from 'react';
import { motion } from "framer-motion";

import './Bar.css';


const spring = {
  type: "spring",
  damping: 50,
  stiffness: 100
};


function Bar (props){
  var divStyle = {
    height: props.length,
    top: (199-props.length),
  };
  if( (props.id == props.cu) || (props.id == (props.cu - 1)))
    return (
      <motion.div className="col" style={divStyle} id = 'sel'
      layoutTransition={spring}>
          {props.length/2}
        </motion.div>
    )
  else
    return (
      <motion.div className="col" style={divStyle} id = 'nosel' 
      layoutTransition={spring}>
          {props.length/2}
        </motion.div>
    )
}


  


export default Bar;