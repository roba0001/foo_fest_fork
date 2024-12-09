'use client'

import Navigation from '../app/components/Navigation.jsx';
import { usePathname } from 'next/navigation'

export default function Home()
{
  const currentPath = usePathname()
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
