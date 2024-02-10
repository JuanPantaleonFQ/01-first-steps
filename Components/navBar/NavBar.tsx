import Link from 'next/link'
import { ActiveLink } from '../Active-link/ActiveLink'
import React from 'react'

  interface navItem {
    path: string
    title: string
  }

  const navItems: navItem[] = [
    { path: "/", title: "Home" },
    { path: "/contact", title: "Contact" },
    { path: "/pricing", title: "Pricing" },
    { path: "/about", title: "About" }
    
  ];
  

 const NavBar = () => {
  return (
    <nav className='flex justify-between bg-neutral-900 bg-opacity-20 p-4 m-2'>
      {
        navItems.map((navItem) =>(<ActiveLink key={navItem.path} {...navItem}/>))
      }
    </nav>
  )
}

export default NavBar
