import  { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Simple cart icon using SVG
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="  lg:absolute  w-full z-50  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-secondary">
        <div className="flex justify-between items-center py-4">
          {/* Left: Site Name */}
          <div className=" flex hidden lg:flex items-center justify-evenly">
            <div>
            <NavLink to="/" className="text-4xl font-medium  text-complement transition-colors">
             SOLEM
            </NavLink>
            </div>
             <div className="hidden md:flex space-x-4 mx-8">
            <NavLink 
            to='/'
            className= {({isActive}) => `hover:text-primary hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-secondary hover:text-complement':'' }`} 
             >
              Home
            </NavLink>
             <NavLink 
            to='/document'
            className= {({isActive}) => `hover:text-primary hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-secondary  hover:text-complement':'' }`} 
             >
              Docs
            </NavLink>
             <NavLink 
            to='/products'
            className= {({isActive}) => `hover:text-primary hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-secondary  hover:text-complement':'' }`} 
             >
              Products
            </NavLink>
             <NavLink 
            to='/contact'
            className= {({isActive}) => `hover:text-primary hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-secondary  hover:text-complement':'' }`} 
             >
              Contact
            </NavLink>
          </div>

          </div>

          {/* Center: Desktop Links (hidden on mobile) */}
         
          {/* Right: Cart Icon (visible on all screens) */}
          <div className="flex items-center ">
            <NavLink
              to="/cart"
              className={({isActive}) => ` text-element hover:text-secondary p-2 rounded-full hover:bg-primary transition-colors ${isActive ? ' text-secondary' : ''}`}
              title="View Cart"
            >
              {/* Simple SVG cart icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l-1.5-1.5M16 13l-1.5-1.5M16 13l1.5 1.5M16 13l-1.5 1.5m-1.5-1.5L18 13m-1.5-1.5L20 13m-1.5-1.5L22 13"
                />
              </svg>
            </NavLink>
          </div>

          {/* Mobile Menu Button (Hamburger) - visible only on mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-element hover:text-gray-900 p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {/* Simple SVG hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className={!isOpen ? 'block' : 'hidden'}
                  d="M4 6h16M4 12h16M4 18h16"
                />
                {/* Close icon (X) when menu is open */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className={isOpen ? 'block' : 'hidden'}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - visible only on mobile when open */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <NavLink
                to="/"
                className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

