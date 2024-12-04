'use client'

import { FaArrowUpLong } from "react-icons/fa6"
import { useWindowScroll } from '@uidotdev/usehooks'

export default function () 
{
    const scrollToTopBtn = document.querySelector('.scroll-to-top-btn')

    window.addEventListener('scroll', () =>
    {   if(window.scrollY > 200)
        {
            scrollToTopBtn.classList.add('active')
        }
        else
        {
            scrollToTopBtn.classList.remove('active')
        }
    })

    const scrollToTop = () =>
    {
        window.scrollTo({ top: 0, behavior:'smooth' })
    }

    return (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
            <FaArrowUpLong size={20} />
        </button>
    ) 
}
