import React from 'react'

const Pera = ({ children, className = '' }) => {
  return (
    <p className={`text-[13px] 2xl:text-[13px] text-center md:text-left tracking-[1px] font-montserrat text-[#000] leading-[22px]  ${className}`}>
      {children}
    </p>
  )
}

export default Pera
