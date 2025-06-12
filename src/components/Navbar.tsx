import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 py-2 sm:py-3 md:py-4 transition-all duration-300",
          isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-sm" 
            : "bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <a 
            href="#" 
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            aria-label="YourHSEPartner"
          >
            <span className="text-xl font-bold text-pulse-600">YourHSEPartner</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              Why YourHSEPartner
            </a>
            <a href="#features" className="nav-link">Products</a>
            <a href="#applications" className="nav-link">Industries</a>
            <a href="#faq" className="nav-link">Resources</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 p-3 focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMenu}
      />

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "fixed inset-y-0 right-0 z-50 w-[300px] bg-white flex flex-col md:hidden transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-end p-4">
          <button 
            className="p-2" 
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-6">
          <a 
            href="#" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Why YourHSEPartner
          </a>
          <a 
            href="#features" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Products
          </a>
          <a 
            href="#applications" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Industries
          </a>
          <a 
            href="#faq" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Resources
          </a>
          <a 
            href="#contact" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
