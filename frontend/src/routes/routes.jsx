import Applayout from "../layout/Applayout";
import Home from "../pages/Home";
import Docs from "../pages/Docx";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

export const routes = [
  {
    element: <Applayout />, // Normal pages layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/document", element: <Docs /> },
      { path: "/products", element: <Product /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />, // 404 page without layout
  },
];
