import React from 'react'

const Pera = ({ children, className = '' }) => {
  return (
    <p className={`text-[14px] text-center md:text-left tracking-[1px] font-montserrat text-[#000] leading-[28px] md:leading-[32px] ${className}`}>
      {children}
    </p>
  )
}

export default Pera
