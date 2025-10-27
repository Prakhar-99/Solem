import Applayout from "../layout/Applayout";
import Home from "../pages/Home";
import Docx from "../pages/Docx";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";


import DocsLayout from "../layout/DocsLayout";
import GettingStarted from "../pages/DocsPages/GettingStarted";
import InstallationGuide from "../pages/DocsPages/InstallationGuide"
import MeintananceGuide from "../pages/DocsPages/MeintananceGuide";
import SystemComponent from "../pages/DocsPages/SystemComponent";
 
export const routes = [
  {
    element: <Applayout />, // Normal pages layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Product /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },

    {
        path: "/document",
        element: <DocsLayout />,    
        children: [
              
              { path: "getting-started", element: <GettingStarted /> },
              { path: "installation", element: <InstallationGuide /> },
              { path: "Maintanance", element: <MeintananceGuide/> },
              {path: "system-component", element: <SystemComponent />}
            
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />, // 404 page without layout
  },
];
