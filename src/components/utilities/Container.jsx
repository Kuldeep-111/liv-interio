import React from 'react'

const Container = ({ children, className = '' }) => {
  return (
    <div className={` container px-[15px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
