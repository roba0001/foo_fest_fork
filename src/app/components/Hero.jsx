import Section from './Section.jsx'
import HeroDescription from './HeroDescription.jsx'
import Image from 'next/image'
import heroBg from '@/images/hero/hero_bg.jpg'

export default function Hero()
{
    return (
        <Section>
            <div className="h-[700px] full-width">
                <Image
                    src={heroBg}
                    alt="Hero background"
                    layout="fill"
                    className="object-cover h-full"
                />
                <div className="absolute bottom-12 right-12 text-right z-10 text-white">
                    <HeroDescription>
                        <h2>Band name</h2>
                        <h4>Genre</h4>
                    </HeroDescription>
                </div>
            </div>
        </Section>
    );
}