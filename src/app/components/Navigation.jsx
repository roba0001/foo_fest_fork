'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Logo from './Logo.jsx'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import Login from './Login.jsx'

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
            <button
                className={`fixed top-[20px] right-[20px] z-50 cursor-pointer transition-right duration-150 ease-in max-md:block md:hidden ${navigationOpenState ? "max-md:right-[210px]" : "max-md:right-[40px]"
                    }`}
                onClick={toggleNavigation}
            >
                {navigationOpenState ? (
                    <IoMdClose
                        size={30}
                        className="text-black transition-all duration-300 ease-in-out hover:text-orange-300"
                    />
                ) : (
                    <GiHamburgerMenu
                        size={30}
                        className="text-black transition-all duration-300 ease-in-out hover:text-orange-300"
                    />
                )}
            </button>

            {/* Navigation Menu */}
            <nav
                className={`fixed top-0 right-0 flex justify-between items-center text-center z-50 bg-white shadow-md h-[70px] px-12 
              w-full transition-all duration-300 
              max-md:h-screen max-md:w-[200px] max-md:top-0 max-md:shadow-lg max-md:duration-300 ${navigationOpenState ? "max-md:right-0" : "max-md:-right-[200px]"
                    }`}
            >
                <Logo>
                    <a href="/" className="max-md:absolute left-[35%] bottom-8 cursor-pointer">
                        <span className="text-black">Foo</span><span className="text-orange-300">Fest</span>
                    </a>
                </Logo>
                <div className="flex gap-12 items-center">
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
                    <div className="max-md:absolute top-8 left-[45%]">
                        <Login />
                    </div>
                </div>
            </nav>
        </>
    );
}
