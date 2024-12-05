import RootLayout from './layout'
import Hero from '../app/components/Hero.jsx'
import ImageSlider from '../app/components/ImageSlider.jsx'

export default function Home()
{
  return (
    <RootLayout>
       <Hero />
       <ImageSlider />
    </RootLayout>
  );
}
