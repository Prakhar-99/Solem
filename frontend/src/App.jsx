import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import { ProductProvider } from "./context/ProductContext";

function AppRoutes() {
  return useRoutes(routes);
}

export default function App() {
  return (
    
    <Router>
      <ProductProvider>   
      <AppRoutes />
          </ProductProvider>
    </Router>
    
  );
}
