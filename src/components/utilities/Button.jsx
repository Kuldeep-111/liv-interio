import Link from 'next/link'
import React from 'react'

const Button = ({children,className="",href='',button=false,onOpen}) => {
  return (
    <>
    {button 
    ?
    <button onClick={onOpen} className={`text-[#000] w-fit block  mx-auto md:mx-0 text-[12px] h-fit rounded bg-[#FBF6E5] uppercase border border-[var(--text-primary)] py-[15px] px-[40px] ${className}`}>
      {children}
    </button>
    :
    <Link href={href} className={`text-[#000] w-fit block  mx-auto md:mx-0 text-[12px] h-fit rounded bg-[#FBF6E5] uppercase border border-[var(--text-primary)] py-[15px] px-[40px] ${className}`}>
      {children}
    </Link>
    }
    </>
  )
}

export default Button
