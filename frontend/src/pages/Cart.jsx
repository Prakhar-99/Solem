import { useCart } from "../context/CartContext";
import CartCard from "../components/CartCard";

const Cart = () => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="w-full lg:min-h-[90vh] flex  justify-center items-center py-8 lg:my-16">
      <div className=" max-w-3xl lg:max-w-7xl">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Your Cart</h2>

      {cart.length === 0 && (
        <p className="text-center text-gray-600 text-lg">Your cart is empty 🛒</p>
      )}

      <div className="space-y-4">
        {cart.map(item => (
          <CartCard key={item.id} item={item} />
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded-xl text-right text-lg font-bold">
          Total: ₹{total}
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart;
