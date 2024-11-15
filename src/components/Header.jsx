import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu after clicking a link
  const handleNavigation = (section) => {
    onNavClick(section);
    setIsMenuOpen(false);
  };

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 bg-purple-900 text-yellow-300 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold italic">KenTobias.</div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-yellow-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-9">
          {["home", "about", "skill", "work", "client", "contact"].map(
            (item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavigation(item)}
                  className="hover:text-white transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 px-2">
          {["home", "about", "skill", "work", "client", "contact"].map(
            (item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left py-2 hover:text-white transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
