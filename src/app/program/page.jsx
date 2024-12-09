'use client'

import Navigation from '../components/Navigation.jsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Program() 
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
      {
        href: '/book',
        linkText: 'Book'
      },
    ]

    return (
        <>
            <Navigation navItems={navItems} />
        </>
    )
}