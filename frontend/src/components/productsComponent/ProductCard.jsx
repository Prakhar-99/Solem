import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-primary rounded-2xl border border-[2px] border-secondarylite shadow-md p-4 hover:shadow-lg transition-all duration-300 ">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl mb-3 w-full h-40 object-cover w-full"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-secondarylite mb-2">{product.description}</p>
      <div className="flex justify-between items-center pt-4">
        <span className="text-lg font-bold text-complement">₹{product.price}</span>
        <button className="bg-complement text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
