import Link from 'next/link'
import React from 'react'

const NavLink = ({ href, children, className = '',isHoverBorder = true,showHeader }) => {
  return (
    <Link
      href={href}
      className={`relative group uppercase ${ showHeader ? 'text-[var(--text-primary)]' : 'text-white'}  text-center font-[SangBleu Sunrise] text-[12px] 2xl:text-[18px] font-normal not-italic leading-none tracking-[2px] ${className}`}
    >
      {children}

      {/* underline */}
      {isHoverBorder &&
      <span className={`absolute bottom-[-5px] left-0 h-[1px] w-0 ${ showHeader ? 'bg-[var(--text-primary)]' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
      }
    </Link>
  )
}

export default NavLink
