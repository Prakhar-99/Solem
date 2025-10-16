// src/context/ProductContext.jsx
import  { createContext, useState, useEffect } from "react";
import productsData from "../data/products.json"; // default import from JSON

export const ProductContext = createContext();

// 2. provider component
export const ProductProvider = ({ children }) => {
  // state to hold all products
  const [products, setProducts] = useState([]);
  // loading flag 
  const [loading, setLoading] = useState(true);

  // simulate API call on mount
  useEffect(() => {
    // simulate network delay
    const timer = setTimeout(() => {
      setProducts(productsData); // load JSON data
      setLoading(false);
    }, 700); // change delay if you want

    return () => clearTimeout(timer);
  }, [productsData]);

  // export whatever helpers you want later (filter, getById, etc.)
  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
