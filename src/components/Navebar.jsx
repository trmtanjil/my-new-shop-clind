import React, { useState } from "react";
import { Link } from "react-router";
 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo & Desktop Links */}
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="ml-2 text-gray-800 font-semibold">Logo</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex items-center sm:space-x-4">
               
         
             <button className="btn bg-gray-400 border-none">   <Link to='/'>Home </Link></button>
             <button className="btn bg-gray-400 border-none">   <Link to='addproduct'>Add Product </Link></button>
             <button className="btn bg-gray-400 border-none">   <Link to='addproduct'>Add Product </Link></button>
           
            </div>
          </div>

          {/* Right side - Desktop Auth Buttons */}
          <div className="hidden sm:flex sm:items-center space-x-3">
            <Button variant="outline">Sign in</Button>
            <Button>Sign up</Button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6 " />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (responsive) */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1 px-4">
          <Link >Home</Link>
          <Link>About</Link>
          <Link>Services</Link>
          <Link>Contact</Link>
        </div>
        <div className="pb-3 pt-2 border-t border-gray-200 px-4 space-y-2">
          <Button fullWidth variant="outline">Sign in</Button>
          <Button fullWidth>Sign up</Button>
        </div>
      </div>
    </nav>
  );
};

// Reusable components for cleaner code
const NavLink = ({ href, children, active = false }) => (
  <a
    href={href}
    className={`${active ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-100'} px-3 py-2 rounded-md text-sm font-medium`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, active = false }) => (
  <a
    href={href}
    className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-100'} block px-3 py-2 rounded-md text-base font-medium`}
  >
    {children}
  </a>
);

const Button = ({ children, variant = 'primary', fullWidth = false }) => (
  <button
    className={`${variant === 'primary' 
      ? 'bg-gray-600 text-white hover:bg-gray-700' 
      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
    } ${fullWidth ? 'w-full' : ''} px-4 py-2 rounded-md text-sm font-medium shadow-sm`}
  >
    {children}
  </button>
);

// Icons (you can replace with actual icons from your library)
const MenuIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default Navbar;