import React from 'react'

const Heading = ({ children, className = '' }) => {
  return (
    <h1 className={`text-[var(--text-primary)] text-center md:text-left text-[20px] md:text-[24px] lg:text-[26px] xl:text-[30px] tracking-[2px] ${className}`}>
      {children}
    </h1>
  )
}

export default Heading
