import WhyChooseUs from '../components/HomeComponent/WhyChooseUs'
import HeroSec from '../components/HomeComponent/HeroSec'
import HomeProducts from '../components/HomeComponent/HomeProducts'
import HomeAboutSec from '../components/HomeComponent/HomeAboutSec'

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