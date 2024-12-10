import Hero from '../../components/Hero.jsx'
import HeroDescription from '../../components/HeroDescription.jsx'
import Navigation from '@/app/components/Navigation.jsx'
import Link from 'next/link'
import { FaArrowLeftLong } from "react-icons/fa6"

export default function Artist() 
{
    const navItems = [
        {
            linkText: 'Program',
            href: '/program',
        }
    ]

    return (
        <>
            <Navigation navItems={navItems} />
            <Hero>
                <HeroDescription>
                    <h2>Band Name</h2>
                    <h4>Genre</h4>
                </HeroDescription>
            </Hero>

            <Link href="/artists">
                <FaArrowLeftLong size={30} className="-mt-8 mb-12 transition-text duration-150 ease-in hover:text-orange-300" />
            </Link>
            

            <div className="container band-desc-container mx-auto flex flex-col justify-center w-[50vw]">
                <h4 className="text-orange-300">Band name</h4>
                <p className="band-description text-base text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, commodi quam? Sunt consectetur id voluptatem nam nostrum expedita recusandae iusto, neque dicta saepe aperiam quod! Nam accusantium cumque laudantium cupiditate omnis iure vel, deleniti praesentium itaque dolore in fugit nostrum rerum, id repudiandae culpa modi sit eos suscipit ipsum nemo consequuntur reprehenderit sunt optio! Eius et ab voluptatum, voluptatibus quis suscipit quasi adipisci praesentium assumenda hic laboriosam sapiente optio culpa eligendi temporibus quae soluta eaque reprehenderit rerum impedit neque facere, omnis repudiandae modi? Eligendi natus enim id, corrupti laborum quae cum rem minus itaque, consequatur tempore quam, excepturi totam. Laborum nam harum facilis maiores natus, dignissimos nulla autem ipsa eveniet minima nostrum nobis. Inventore, rerum. Aliquam nihil modi autem neque, fugiat repudiandae incidunt nam maxime, iste culpa iusto ipsum voluptates dolor soluta laudantium minima labore, ex quod debitis! Veniam, id consectetur. Fuga quibusdam sit eius doloremque quisquam nobis. Atque, veritatis?
                </p>
                
                <div className="container stage-and-members-container flex justify-between gap-4 mt-6 max-md:flex-col max-md:justify-center max-md:text-center">
                    <div>
                        <h5 className="text-orange-300">
                            Perfomance:
                        </h5>
                        <span>Stage X, 09:30 PM</span>
                    </div>

                    <div className="text-right max-md:text-center">
                        <h5 className="text-orange-300">
                            Members:
                        </h5>
                        <span>
                            Member X, Member Y, Member Z
                        </span>
                    </div>
                </div>
            </div>
        </>
    ) 
}