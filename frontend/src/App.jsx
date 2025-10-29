import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";

function AppRoutes() {
  return useRoutes(routes);
}

export default function App() {
  return (
    
    <Router>
      <ProductProvider> 
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      
          </ProductProvider>
    </Router>
    
  );
}
