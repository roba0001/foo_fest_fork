'use client'
import { useState } from 'react'
import Logo from './Logo.jsx'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"

export default function Navigation({ children })
{
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
                className={`flex justify-between items-center h-[70px] px-12 bg-white shadow-md z-50 
                            max-md:h-screen max-md:flex-col max-md:justify-center max-md:w-[200px] max-md:absolute 
                            transition-all duration-300 ease-in-out ${navigationOpenState ? "max-md:right-0" : "max-md:-right-[200px]"
                    }`}
            >
                <Logo>
                    <Link href="/">
                        <div className="max-md:absolute max-md:bottom-4 max-md:-translate-x-[50%]">
                            <span>Foo</span><span className="text-orange-300">Fest</span>
                        </div>
                    </Link>
                </Logo>
                {children}
            </nav>
        </>
    );
}
