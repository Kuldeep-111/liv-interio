import React from 'react'

const Heading = ({ children, className = '' }) => {
  return (
    <h1 className={`text-[var(--text-primary)] text-center md:text-left text-[20px] md:text-[22px] lg:text-[24px] 2xl:text-[30px] tracking-[2px] ${className}`}>
      {children}
    </h1>
  )
}

export default Heading
