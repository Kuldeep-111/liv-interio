import React from 'react'

const Section = ({ children, className = '',id='' }) => {
  return (
     <section id={id} className={` py-[80px] ${className}`}>
      {children}
    </section>
  )
}

export default Section
