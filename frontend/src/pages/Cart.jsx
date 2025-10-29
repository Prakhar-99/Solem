import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name} (₹{item.price}) × {item.qty}</p>

          <button onClick={() => dispatch({ type: "DECREASE_QTY", payload: item.id })}>-</button>
          <button onClick={() => dispatch({ type: "INCREASE_QTY", payload: item.id })}>+</button>
          <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
