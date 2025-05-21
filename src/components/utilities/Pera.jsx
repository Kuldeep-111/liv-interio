import React from 'react'

const Pera = ({ children, className = '' }) => {
  return (
    <p className={`text-[16px] tracking-[1px] font-montserrat ${className}`}>
      {children}
    </p>
  )
}

export default Pera
