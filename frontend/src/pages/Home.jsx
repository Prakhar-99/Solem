import WhyChooseUs from '../components/WhyChooseUs'
import HeroSec from '../components/HeroSec'
import HomeProducts from '../components/HomeProducts'
import HomeAboutSec from '../components/HomeAboutSec'

function Home() {
  return (
    <div>
      <HeroSec />
      <HomeProducts limit={4}/>
      <HomeAboutSec />
      <WhyChooseUs />
      
    </div>
  )
}

export default Home