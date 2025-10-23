import AboutIMg from "../../assets/media/image/aboutsola.png"


export default function SolarAbout() {
  return (
    <section className="w-full  py-16  bg-complement">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-col lg:flex-row items-center justify-between px-6 lg:px-8 gap-12">

        {/* Left Section: Text Content */}
        <div className="flex-1 md:text-center  lg:text-left ">
          <p className="text-xl uppercase tracking-wide text-element font-semibold mb-3">About Solem</p>

          <h2 className="lg:text-4xl text-5xl font-bold text-primary leading-tight mb-6">
            Clean Energy for a Brighter Tomorrow
          </h2>

          <p className="text-primary text-base leading-relaxed mb-8 lg:max-w-md">
            At Solem, we are committed to transforming how energy is produced and consumed. <br /> Our advanced solar panel systems harness the power of the sun to bring efficient, ,<br /> eco-friendly, and affordable energy to every home and business.
          </p>

          <button
            className="inline-block px-6 py-3 bg-secondarybg text-secondary text-sm font-medium  shadow-md rounded-lg hover:bg-element hover:text-primary  transition-all duration-200"
          >
            Learn More
          </button>
        </div>

        {/* Right Section: Image with Rounded Corners */}
        <div className="flex-1  ">
          <div className="rounded-[2rem] overflow-hidden shadow-xl relative">
            <img
              src={AboutIMg}
              alt="Modern home with solar panels"
              className="w-full  object-cover"
            />

          
          </div>
        </div>

      </div>
    </section>
  );
}

