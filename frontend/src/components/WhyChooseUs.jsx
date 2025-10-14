import WhyCard from "./WhyCard";

const WhyChooseUs = () => {
  return (
    <section className="font-manrope bg-bgg">
      
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-20 text-center">
        <h2 className="text-3xl font-semibold text-secondary mb-10">
          Why Choose <span className="text-complement">Solem</span>?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <WhyCard
            symbol="⚡"
            heading="High Efficiency"
            description="Our solar panels produce more energy even in low sunlight conditions."
          />
          <WhyCard
            symbol="🛡️"
            heading="25-Year Warranty"
            description="We offer a long-term warranty ensuring your investment stays protected."
          />
          <WhyCard
            symbol="🌿"
            heading="Eco Friendly"
            description="Sustainable technology that helps you reduce your carbon footprint."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
