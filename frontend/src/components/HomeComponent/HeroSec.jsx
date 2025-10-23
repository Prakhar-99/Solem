import { useNavigate } from 'react-router-dom';
import Myimg from '../../assets/media/image/hero.png';
import { motion } from "framer-motion";

function HeroSec() {
  const navigate = useNavigate();
  return (
    <section className="w-full  flex md:items-center justify-center overflow-hidden  font-Manrope bg-secondarybg mb-12 md:mt-0 h-[80vh] lg:h-screen ">
      <div className="h-full flex flex-col-reverse md:flex-col  lg:flex-row w-full">
        {/* Left Side: Text Section - Centered on Small, Left-Aligned on md+ */}
        <motion.div 
          className="flex-1 w-full flex flex-col justify-center items-center px-4  md:px-8 py-6 md:"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full  md:max-w-md space-y-4 md:space-y-6 mx-auto md:mx-0 md:pl-4 md:pr-8 text-center lg:text-left">
            <motion.h1 
              className="text-[42px]  font-extrabold tracking-tight text-secondary leading-[1]"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Switch to Smart, Clean Solar 
            </motion.h1>
            <motion.p
              className="text-secondarylite text-[14px] py-3 md:py-0  leading-[1.5] "
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Save money and the planet with high-efficiency solar panels.
              Easy installation and long-lasting performance.
              Power your home the smarter way.
            </motion.p>
            <motion.div className="flex justify-center lg:justify-start mt-2 md:mt-0 py-3">
              <motion.button
                className="bg-complement text-primary font-medium px-8 py-3 rounded-md shadow-md  hover:shadow-lg transition-shadow"
                onClick={() => navigate("/products")}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                Explore Products
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Image - Starts from Top on Small, Centered on md+ */}
        <div className="flex-1 lg:flex-1 w-full  overflow-hidden flex items-center  justify-center md:px-8 lg:px-0">
          
          <img src={Myimg} alt="Solar panels hero" className=" object-cover  md:h-[350px] w-full  lg:h-full" />
        
        </div>
      </div>
    </section>
  );
}

export default HeroSec;
