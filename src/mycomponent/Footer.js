import React from 'react'

export const Footer = () => {
  let footerStyle ={
    position: 'relative',
    top:"100vh",
    width:"100%",
  }
  return (
    <div className="bg-dark text-light" style={footerStyle}>
      <p className="text-center">
      copyright  &copy; my todos list 
      </p>
       </div>
  )
}
