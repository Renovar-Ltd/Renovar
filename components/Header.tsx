"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-dark shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#home" onClick={closeMobileMenu}>
              <div className="glass rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-agri-light-green flex items-center gap-1.5 sm:gap-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-agri-green"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 8C8 10 5.9 15.17 3.82 21.34l1.89.66.95-2.3c.48.17 1 .26 1.53.26C17 20 22 13.26 22 11c0-1-2-3-5-3zM2 13c0 5.18 3.95 9 9 9 .34 0 .67-.03 1-.08-1.17-4.15-1.5-7.83-1.5-10.92 0-2.52.5-4.75 1.5-6.68C9.5 4.5 8 6.5 8 9c0 1.78.79 2.9 1.5 3.53C8.5 13.5 5 13 2 13z" />
                </svg>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-agri-green">
                  Renovar
                </span>
              </div>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-agri-cream transition-colors font-medium drop-shadow-lg"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-agri-cream transition-colors font-medium drop-shadow-lg"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white hover:text-agri-cream transition-colors font-medium drop-shadow-lg"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white text-2xl focus:outline-none drop-shadow-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-dark rounded-lg mt-4 mb-4 border border-white/20">
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#home"
                onClick={closeMobileMenu}
                className="text-white hover:text-agri-cream transition-colors font-medium py-2"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="text-white hover:text-agri-cream transition-colors font-medium py-2"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="text-white hover:text-agri-cream transition-colors font-medium py-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
