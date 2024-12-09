import RootLayout from "../layout"
import Navigation from '@/app/components/Navigation.jsx'
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