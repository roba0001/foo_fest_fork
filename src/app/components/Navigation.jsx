'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Logo from './Logo.jsx'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"

export default function Navigation({ navItems = [] })
{
    const currentPath = usePathname();

    const [navigationOpenState, setNavigationOpenState] = useState(false);

    const toggleNavigation = () =>
    {
        setNavigationOpenState(!navigationOpenState);
    };

    return (
        <>
            {/* Toggle Button */}
            <button className={`z-50 cursor-pointer hidden max-md:block transition-right duration-150 ease-in ${
                    navigationOpenState ? "max-md:right-0" : "max-md:-right-[200px]"
                }`} onClick={toggleNavigation}>
                {navigationOpenState ? (
                    <IoMdClose
                        size={30}
                        className="text-black transition-all duration-300 ease-in-out hover:text-orange-300 cursor-pointer max-md:block max-md:absolute max-md:top-[20px] max-md:right-[220px]"
                    />
                ) : (
                    <GiHamburgerMenu
                        size={30}
                        className="text-black transition-all duration-300 ease-in-out hover:text-orange-300 cursor-pointer max-md:block max-md:absolute max-md:top-[20px] max-md:right-[20px]"
                    />
                )}
            </button>

            {/* Navigation Menu */}
            <nav
                className={`fixed  w-screen flex justify-between items-center text-center shadow-md h-[70px] px-12 max-md:h-screen max-md:w-[200px] transition-all duration-300 ${
                    navigationOpenState ? "max-md:right-0" : "max-md:-right-[200px]"
                }`}
            >
                <Logo>
                    <a href="/" className="max-md:absolute left-[35%] bottom-8 cursor-pointer">
                        <span className="text-black">Foo</span><span className="text-orange-300">Fest</span>
                    </a>
                </Logo>
                <ul className="flex gap-12 text-xl max-md:flex-col max-md:text-center max-md:justify-center">
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className={`transition-text duration-150 ease-in ${currentPath !== item.href ? 'hover:text-orange-300 hover:border-b-2 border-b-orange-300' : ''
                                }`}
                        >
                            <Link
                                href={item.href}
                                className={`block ${currentPath === item.href
                                    ? 'border-b-2 border-orange-300 text-orange-300 pointer-events-none'
                                    : 'border-none'
                                    }`}
                                style={{ lineHeight: '1.2', padding: '0 2px' }}
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
