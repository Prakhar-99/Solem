

const WhyCard = ({ symbol, heading, description }) => {
  return (
    <div className="bg-primary border border-complement shadow-md rounded-2xl  p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 ">
      <h1 className="text-4xl my-3">{symbol}</h1>
      <h3 className="text-lg font-semibold text-secondary mb-2">{heading}</h3>
      <p className="text-sm text-complement leading-relaxed">{description} </p>
    </div>
  );
};

export default WhyCard;
