import { useCart } from "../context/CartContext";

const CartCard = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white border rounded-xl p-4 shadow-sm lg:min-w-[700px] lg:max-w-full  ">

      {/* Image + Info */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-800 leading-tight">{item.name}</h3>
          <p className="text-gray-600 text-sm">₹{item.price}</p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch({ type: "DECREASE_QTY", payload: item.id })}
          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center text-lg font-bold"
        >
          -
        </button>

        <span className="text-lg font-medium">{item.qty}</span>

        <button
          onClick={() => dispatch({ type: "INCREASE_QTY", payload: item.id })}
          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center text-lg font-bold"
        >
          +
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
        className="text-red-600 hover:text-red-800 font-medium"
      >
        Remove
      </button>

    </div>
  );
};

export default CartCard;
