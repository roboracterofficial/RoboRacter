import React, { useState } from "react";
import { Link } from "react-router-dom";

const fredokaStyle = { fontFamily: "'Fredoka', sans-serif" };
const menuStyle = { fontFamily: "'Roboto Slab', serif", fontSize: '18px', fontWeight: 700 };
const mobileMenuStyle = { fontFamily: "'Montserrat', sans-serif", fontSize: '16px' };

const Navbar = (props) => {
  const onContactClick = props.onContactClick || (() => {});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToCourses = (e) => {
    e.preventDefault();
    const section = document.getElementById('courses');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToServices = (e) => {
    e.preventDefault();
    const section = document.getElementById('offerings');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToFooter = (e) => {
    e.preventDefault();
    const section = document.querySelector('footer');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const bgClass = "bg-yellow-400";

  return (
    <nav className={`${bgClass} w-full fixed top-0 left-0 z-30 border-b-4 border-yellow-400`}>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex justify-between h-12 sm:h-14 md:h-16 items-center relative mt-0">
          {/* Logo on extreme left */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/roboracter-logo.png" alt="Roboracter Logo" className="w-14 h-[56px] sm:w-14 sm:h-[56px] md:w-16 md:h-[64px] lg:w-20 lg:h-[80px] mt-2" />
            </Link>
          </div>
          {/* Navigation links centered - hidden on mobile, visible on tablet+ */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-4 xl:space-x-8">
            <a href="#courses" onClick={scrollToCourses} className="text-white uppercase hover:text-gray-200 text-xs md:text-xs lg:text-sm xl:text-base font-medium" style={menuStyle}>Workshops</a>
            <a href="#offerings" onClick={scrollToServices} className="text-white uppercase hover:text-gray-200 text-xs md:text-xs lg:text-sm xl:text-base font-medium" style={menuStyle}>Services</a>
            <a href="#gallery" className="text-white uppercase hover:text-gray-200 text-xs md:text-xs lg:text-sm xl:text-base font-medium" style={menuStyle}>Gallery</a>
            <a href="#demo-class" onClick={(e) => { e.preventDefault(); onContactClick(); }} className="text-white uppercase hover:text-gray-200 text-xs md:text-xs lg:text-sm xl:text-base font-medium" style={menuStyle}>Demo Class</a>
            <a href="#footer" onClick={scrollToFooter} className="text-white uppercase hover:text-gray-200 text-xs md:text-xs lg:text-sm xl:text-base font-medium" style={menuStyle}>About Us</a>
          </div>
          {/* Mobile menu button - visible only on mobile and tablet */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Contact Us button on extreme right - hidden on mobile and tablet */}
          <div className="hidden lg:block">
            <button
              onClick={onContactClick}
              className="bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-lg hover:bg-blue-700 font-medium text-sm sm:text-base md:text-lg"
              style={fredokaStyle}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 rounded-lg mt-2 p-4">
          <div className="flex flex-col space-y-3">
            <a href="#courses" onClick={scrollToCourses} className="text-white uppercase hover:text-gray-200 font-medium" style={mobileMenuStyle}>Workshops</a>
            <a href="#offerings" onClick={scrollToServices} className="text-white uppercase hover:text-gray-200 font-medium" style={mobileMenuStyle}>Services</a>
            <a href="#gallery" className="text-white uppercase hover:text-gray-200 font-medium" style={mobileMenuStyle}>Gallery</a>
            <a href="#demo-class" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onContactClick(); }} className="text-white uppercase hover:text-gray-200 font-medium" style={mobileMenuStyle}>Demo Class</a>
            <a href="#footer" onClick={scrollToFooter} className="text-white uppercase hover:text-gray-200 font-medium" style={mobileMenuStyle}>About Us</a>
            <button
              onClick={() => { setIsMenuOpen(false); onContactClick(); }}
              className="text-white uppercase hover:text-gray-200 font-medium text-left" style={mobileMenuStyle}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 