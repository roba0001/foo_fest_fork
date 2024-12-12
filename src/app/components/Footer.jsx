import { FaInstagram, FaFacebookSquare } from "react-icons/fa"
import { CiGlobe } from "react-icons/ci"

export default function Footer() 
{
    return (

        <footer className="sticky top-[100vh] flex flex-wrap justify-between items-center gap-4 p-4 bg-white border-t-2 border-t-orange-300">
            {/* Logo Section */}
            <div className="logo flex flex-col items-center order-1 md:order-2 w-full md:w-auto">
                <CiGlobe size={40} />
                <span>FooFest</span>
            </div>

            {/* Address and Socials Section */}
            <div className="address-and-socials flex flex-col items-center md:items-start order-2 md:order-1 w-full md:w-auto">
                <span className="address">Main Street 55, 5555 Some City</span>
                <div className="flex gap-2">
                    <FaInstagram size={25} className="cursor-pointer transition-text duration-150  hover:text-orange-300" />
                    <FaFacebookSquare size={25} className="cursor-pointer transition-text duration-150 hover:text-orange-300" />
                </div>
            </div>

            {/* Contacts Section */}
            <div className="contacts flex flex-col items-center md:items-end order-3 w-full md:w-auto text-center md:text-right">
                <a href="#">
                    <span>Mail: </span>
                    foofest@gmail.com
                </a>
                <a href="#">
                    <span>Phone: </span>
                    555-5555
                </a>
            </div>
        </footer>


    )
}