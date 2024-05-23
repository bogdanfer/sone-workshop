import Link from 'next/link';
import React, { useState } from 'react';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';

import styles from './Menu.module.css'

const Menu = ({ toggleMenu, variant }) => {
    const [ isMenuOpen, setMenuOpen ] = useState(false);
    const menuItems = [
        {
            "title": "Home",
            "link": "/"
        },
        {
            "title": "Projects",
            "link": "/projects"
        },
        {
            "title": "About",
            "link": "/about"
        },
        {
            "title": "Contact",
            "link": "/contact"
        },
        {
            "title": "Workshop",
            "link": "/workshop"
        }
    ]

    return (
        <>
            <div 
                className={styles.SoneMenuButton} 
                data-isopen={isMenuOpen} 
                onClick={() => {
                    setMenuOpen(!isMenuOpen)
                    toggleMenu(!isMenuOpen)
                }}
            >
                <span className={styles.SoneMenuButtonLine} data-variant={variant}></span>
                <span className={styles.SoneMenuButtonLine} data-variant={variant}></span>
            </div>

            {/* Menu Content */}
            <div className='sone-menu-content' data-visible={isMenuOpen} data-variant={variant}>
                {/* Menu Content - Left */}
                <div className='sone-menu-content--left'>
                    <h5>
                        <a href="mailto:contact@soneworkshop.com">contact@soneworkshop.com</a>
                    </h5>
                    <h5>
                        <a href="tel:+33157840051">+33157840051</a>
                    </h5>
                </div>

                {/* Menu Content - Right */}
                <div className='sone-menu-content--right'>
                    <ul>
                        {menuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className='sone-caps-text-large' href={item.link}>{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            {/* Locale Switcher */}
            {isMenuOpen &&
                <LocaleSwitcher variant={variant} />
            }
            
        </>
    );
};

export default Menu;
