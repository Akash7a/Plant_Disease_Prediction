import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-green-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">🌿</span>
          <h1 className="text-2xl font-semibold">PlantLeafAI</h1>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {/* Conditional rendering of hamburger (three dots) or close (X) icon */}
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation links */}
        <nav className="lg:flex space-x-6 hidden lg:block">
          <Link to="/" className="hover:underline">Home</Link>
          <a href="#features" className="hover:underline">Features</a>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-100">
          <Link to="/signin" className="hover:underline">
            Sign In
          </Link>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 px-16">
          <nav className="space-y-4">
            <Link to="/" className="block hover:underline">Home</Link>
            <a href="#features" className="block hover:underline">Features</a>
            <Link to="/contact" className="block hover:underline">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;