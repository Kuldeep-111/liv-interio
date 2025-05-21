import React from 'react'

const Heading = ({ children, className = '' }) => {
  return (
    <h1 className={`text-[var(--text-primary)] text-28px xl:text-[38px] tracking-[2px] ${className}`}>
      {children}
    </h1>
  )
}

export default Heading
