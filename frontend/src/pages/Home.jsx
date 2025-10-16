import WhyChooseUs from '../components/WhyChooseUs'
import HeroSec from '../components/HeroSec'
import HomeProducts from '../components/HomeProducts'

function Home() {
  return (
    <div>
      <HeroSec />
      <WhyChooseUs />
      <HomeProducts limit={4}/>
    </div>
  )
}

export default Home