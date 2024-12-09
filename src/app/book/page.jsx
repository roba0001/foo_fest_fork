'use client'

import Navigation from '../../app/components/Navigation.jsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Book() 
{
    const navItems =
    [
      {
        href: '/',
        linkText: 'Home'
      },
      {
        href: '/program',
        linkText: 'Program'
      },
    ]

    return (
        <>
            <Navigation navItems={navItems} />
        </>
    )
}