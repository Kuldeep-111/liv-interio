import Link from 'next/link'
import React from 'react'

const Button = ({children,className="",href=''}) => {
  return (
    <Link href={href} className={`${className}`}>
      {children}
    </Link>
  )
}

export default Button
