"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({href,className,children}) => {
  const pathName=usePathname();
  console.log(pathName,'pathName');

  const isActive=href===pathName
  return (
    <Link href={href} className={`${isActive?"border-b-2 border-b-purple-500":""} ${className}`}>
      {children}
    </Link>
  )
}

export default NavLink