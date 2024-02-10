'use client';
import Link from 'next/link'
import React from 'react'
import  Style  from './ActiveLink.module.css'
import { usePathname } from 'next/navigation'

export const ActiveLink = ({ path , title }:any) => {
    const pathName = usePathname()      

  return (
    <button className={`${Style.link} ${(pathName === path) && (Style.activeLink)} transition-colors mr-4 bg-white border border-blue-500 rounded-full px-4 py-2 text-black text-xl hover:border-blue-500`}> 
    <Link href={path}>{title}</Link>
    </button>

  )
}
