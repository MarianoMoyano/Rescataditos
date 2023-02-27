import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "/src/images/logo.jpg"

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <a href="#home" className="block" aria-label="Cruip">
              <img className={`ease-transition duration-300 ease-in-out-out  ${!top ? 'cssLogo' : 'cssLogoBig translate-y-10'}`} src={logo} alt="logo" />
            </a>
          </div>

          {/* Site navigation */}
 
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to="https://docs.google.com/forms/d/1E2zJnvBNi6am_x8IpFVC54jUqK4OGgHEhIMadtJRN-o/viewform?chromeless=1&edit_requested=true" target='_blank' className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">Formulario de adopción</Link>
              </li>
            </ul>
          </nav>
 
        </div>
      </div>
    </header>
  );
}

export default Header;
