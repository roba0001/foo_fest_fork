'use client'
import { useState } from 'react'
import Logo from './Logo.jsx'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import { usePathname } from 'next/navigation'

export default function Navigation({ children })
{
    const currentPath = usePathname()

    const [navigationOpenState, setNavigationOpenState] = useState(false);

    const toggleNavigation = () =>
    {
        setNavigationOpenState(!navigationOpenState);
    };

    return (
        <>
            {/* Toggle Button */}
            <button onClick={toggleNavigation}>
                {
                    navigationOpenState ? (
                        <IoMdClose
                            size={30}
                            className={`text-black hidden transition-all duration-300 ease-in-out hover:text-orange-300 cursor-pointer max-md:block max-md:absolute max-md:top-[20px] ${navigationOpenState ? "max-md:right-[220px]" : "max-md:right-[20px]"
                                }`}
                        />
                    )
                        :
                        (
                            <GiHamburgerMenu
                                size={30}
                                className={`text-black hidden transition-all duration-300 ease-in-out hover:text-orange-300 cursor-pointer max-md:block max-md:absolute max-md:top-[20px] ${navigationOpenState ? "max-md:right-[220px]" : "max-md:right-[20px]"
                                    }`}
                            />
                        )
                }

            </button>
            {/* Navigation Menu */}
            <nav
                className={`fixed top-0 right-0 flex justify-between items-center h-[70px] w-full px-12 bg-white shadow-md z-50 
                            max-md:h-screen max-md:flex-col max-md:justify-center max-md:w-[200px] transition-all duration-300 ease-in-out 
                            ${navigationOpenState ? "max-md:right-0" : "max-md:-right-[200px]"}`}
            >
                <Logo>
                    <Link href="/">
                        <div className="max-md:absolute max-md:bottom-4 max-md:-translate-x-[50%]">
                            <span>Foo</span><span className="text-orange-300">Fest</span>
                        </div>
                    </Link>
                </Logo>
                <ul className="flex flex-row align-center items-center gap-8 max-md:flex-col">
                    <li className="text-lg">
                        <Link
                            href="/"
                            className={`${currentPath === '/'
                                    ? 'text-orange-300 border-b-2 border-b-orange-300'
                                    : 'text-black hover:text-orange-300 hover:border-b-2 hover:border-b-orange-300'
                                }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="text-lg">
                        <Link
                            href="/program"
                            className={`${currentPath === '/program'
                                    ? 'text-orange-300 border-b-2 border-b-orange-300'
                                    : 'text-black hover:text-orange-300 hover:border-b-2 hover:border-b-orange-300'
                                }`}
                        >
                            Program
                        </Link>
                    </li>
                    <li className="text-lg">
                        <Link
                            href="/book"
                            className={`${currentPath === '/book'
                                    ? 'text-orange-300 border-b-2 border-b-orange-300'
                                    : 'text-black hover:text-orange-300 hover:border-b-2 hover: hover:border-b-orange-300'
                                }`}
                        >
                            Book
                        </Link>
                    </li>
                </ul>
                {children}
            </nav>
        </>
    );
}
