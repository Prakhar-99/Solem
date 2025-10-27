import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Assuming you're using React Router for navigation
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Install @heroicons/react if not already

const DocsNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const navItems = [ 
    { name: 'GettingStarted', path: 'getting-started' },
    { name: 'InstallationGuide', path: 'installation'  },
    { name: 'MaintenanceGuide', path: 'Maintanance'  },
    { name: 'SystemComponent', path:  "system-component"},
  ];

  return (
    <nav className=" w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({isActive}) => `text-gray-900 hover:text-primary-green px-3 py-2 rounded-md text-sm font-medium transition-colors  ${isActive? "bg-complement text-primary" : ""}  `}
              >
                {item.name}
              </ NavLink>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden absolute left-0">
        <button
              onClick={toggleMenu}
              className={`text-element hover:text-gray-900 p-2 rounded-md hover:bg-gray-100 transition-colors   ${!isOpen ? 'block' : 'hidden'}`}
              aria-label="Toggle menu"

            >
             Documentations
            </button>

            <button
            onClick={toggleMenu}
              className={`text-element hover:text-gray-900 p-2 rounded-md hover:bg-gray-100 transition-colors   ${isOpen ? 'block' : 'hidden'}`}
              aria-label="Toggle menu">
                close
              </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-900 hover:text-primary-green block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DocsNavbar;
