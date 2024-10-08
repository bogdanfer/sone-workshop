import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import Link from 'next/link';

const Header = ({ slogan, onLogoHover, variant, size, isProject }) => {
    const [ showExcerpt, setShowExcerpt ] = useState(false);
    const [ tempHideIfSlogan, setTempHideIfSlogan ] = useState(false);
    const [ isMenuOpen, setMenuOpen ] = useState(false);

    const toggleMenu = (menuState) => {
      onLogoHover(menuState, false)
    }

    const logoVariant = variant === "white" ? "#fff" : "#000";

  return (
    <header className="header-wrapper" data-size={size}>
      <nav className="header-nav">
        <ul className="flex relative">
          {isProject 
            ? <Link href={"/projects"} className='sone-menu-backtoprojects'><span>Back to Projects</span></Link>
             
            : <li 
              onMouseEnter={() => {
                if (slogan) {
                  onLogoHover(true, true)
                  setShowExcerpt(true)
                  setTempHideIfSlogan(true)
                }
              }} 
              onMouseLeave={() => {
                if (slogan) {
                  onLogoHover(isMenuOpen, false)
                  setShowExcerpt(false)
                  setTempHideIfSlogan(false)
                }
              }} 
            >
              <Link href={"/"}>
                <svg className="logo-svg" fill="none" viewBox="0 0 134 50"><g clipPath="url(#a)" fill="#000"><path d="M14.15 49.94c-4.24 0-7.62-.92-10.14-2.76C1.49 45.34.15 42.81 0 39.59h8.75c.34 2.88 2.12 4.32 5.34 4.32 1.4 0 2.51-.25 3.32-.77.81-.51 1.22-1.22 1.22-2.13 0-.3-.04-.57-.11-.8a1.61 1.61 0 0 0-.4-.62c-.19-.19-.37-.36-.54-.51-.17-.15-.43-.29-.77-.43a10.8 10.8 0 0 0-.88-.31c-.25-.08-.61-.16-1.08-.26-.47-.09-.84-.17-1.11-.23-.27-.06-.68-.13-1.25-.23-.57-.09-.98-.16-1.25-.2-1.21-.19-2.24-.39-3.07-.6-.83-.21-1.75-.54-2.76-.99-1-.45-1.82-.98-2.44-1.56-.63-.59-1.15-1.38-1.56-2.39-.42-1-.62-2.17-.62-3.49 0-2.95 1.19-5.25 3.58-6.88s5.38-2.44 8.98-2.44c4.05 0 7.2.82 9.43 2.47 2.23 1.65 3.47 3.93 3.69 6.85h-8.52c-.3-2.27-1.86-3.41-4.66-3.41-1.21 0-2.19.23-2.93.68-.74.45-1.11 1.12-1.11 1.99 0 .23.04.44.11.62.08.19.2.36.37.51.17.15.34.28.51.4.17.11.41.23.71.34.3.11.58.21.82.28.25.08.59.15 1.02.23.44.08.8.14 1.08.2s.67.13 1.16.23c.49.09.89.16 1.19.2 1.29.23 2.35.44 3.18.62.83.19 1.81.52 2.93.99s2 1.02 2.64 1.65c.64.62 1.2 1.48 1.68 2.56.47 1.08.71 2.34.71 3.78 0 3.11-1.22 5.49-3.66 7.16-2.44 1.67-5.64 2.5-9.57 2.5l.02.02ZM63.98 44.03C60.31 48.01 55.44 50 49.38 50c-6.06 0-10.92-1.99-14.57-5.97-3.66-3.98-5.48-9.05-5.48-15.23s1.83-11.25 5.48-15.23c3.65-3.98 8.51-5.97 14.57-5.97 6.06 0 10.93 1.99 14.6 5.97 3.67 3.98 5.51 9.05 5.51 15.23s-1.84 11.25-5.51 15.23Zm-14.55-2.22c3.18 0 5.61-1.2 7.3-3.61 1.69-2.41 2.53-5.54 2.53-9.4 0-3.86-.84-7.01-2.53-9.43s-4.12-3.64-7.3-3.64c-3.18 0-5.58 1.21-7.3 3.64-1.72 2.42-2.59 5.57-2.59 9.43 0 3.86.86 6.95 2.59 9.38 1.72 2.42 4.16 3.64 7.3 3.64v-.01ZM41.25 5.74V0H57.5v5.74H41.25ZM72.84 49.03V19.94h8.92v3.98h.17c2.23-3.22 5.23-4.83 8.98-4.83 3.14 0 5.61 1.01 7.41 3.04 1.8 2.03 2.7 4.69 2.7 7.98v18.92h-9.26V31.99c0-1.59-.39-2.85-1.16-3.78-.78-.93-1.9-1.39-3.38-1.39s-2.75.57-3.69 1.7c-.95 1.14-1.42 2.61-1.42 4.43v16.08h-9.27ZM119.43 49.89c-4.7 0-8.46-1.45-11.28-4.35-2.82-2.9-4.23-6.6-4.23-11.11s1.39-8.05 4.18-10.97c2.78-2.92 6.37-4.38 10.77-4.38 3.98 0 7.29 1.21 9.94 3.64 3.48 3.18 5.19 7.9 5.11 14.15h-20.91c.3 2.01 1 3.57 2.1 4.69 1.1 1.12 2.57 1.68 4.43 1.68 2.39 0 4-.97 4.83-2.9h9.03c-.68 2.8-2.31 5.09-4.89 6.88-2.54 1.78-5.57 2.67-9.09 2.67h.01Zm-6.36-18.52h11.48c-.15-1.74-.73-3.13-1.73-4.15-1-1.02-2.26-1.53-3.78-1.53-3.29 0-5.28 1.89-5.97 5.68Z"/></g><defs><clipPath id="a"><path fill={logoVariant} d="M0 0h133.92v50H0z"/></clipPath></defs></svg>
              </Link>
            </li>
          }
        </ul>

        <Menu
          slogan={slogan}
          showExcerpt={showExcerpt}
          toggleMenu={toggleMenu}
          variant={variant}
          tempHideIfSlogan={tempHideIfSlogan}
          isMenuOpen={isMenuOpen}
          setMenuOpen={setMenuOpen}
        />
      </nav>
    </header>
  );
};

export default Header;