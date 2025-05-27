import React from 'react'

const Section = ({ children, className = '',id='',ref }) => {
  return (
     <section id={id} ref={ref} className={`py-[40px] md:py-[100px] ${className}`}>
      {children}
    </section>
  )
}

export default Section
