import { createContext, useContext, useReducer , useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.find(item => item.id === action.payload.id);
      if (exist) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, qty: 1 }];

    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload);

    case "INCREASE_QTY":
      return state.map(item =>
        item.id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item
      );

    case "DECREASE_QTY":
      return state
        .map(item =>
          item.id === action.payload
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0);

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {



  const [cart, dispatch] = useReducer(cartReducer, [] , () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
});

    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
