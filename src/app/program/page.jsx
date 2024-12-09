import RootLayout from "../layout"
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