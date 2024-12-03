import Section from './Section.jsx'
import HeroDescription from './HeroDescription.jsx'
import Image from 'next/image'

export default function Hero() 
{
    return (
        <Section>
            <div className="h-[100%]">
                <HeroDescription>
                    <h2>This is the hero header</h2>
                    <p>This is the hero paragraph</p>
                </HeroDescription>
            </div>
        </Section>
    )
}