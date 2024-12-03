import Logo from './Logo.jsx'
import Link from 'next/link'

export default function Navigation({ children }) 
{
    return (
        <nav className="sticky flex justify-between items-center h-[70px] px-12 bg-white shadow-md">
            <Logo>
                <Link href="/">
                    <span>Foo</span><span className="text-orange-300">Fest</span>
                </Link>
            </Logo>
            {children}
        </nav>
    )
}