import React from 'react';

function IconLogo (props){
  const{
    color,
    height,
    width,
    viewBox,
  }= props
  return(
    <svg
      fill={color}
      height={height}
      width={width}
      viewBox={viewBox}>
     {props.children}
    </svg>
  )
}

export default IconLogo
