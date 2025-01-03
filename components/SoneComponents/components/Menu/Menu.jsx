import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'
import classNames from 'classnames';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';

import styles from './Menu.module.css'

const Menu = ({ slogan, showExcerpt, toggleMenu, variant, tempHideIfSlogan=false, isMenuOpen, setMenuOpen }) => {
    let currentMenu;

    const menuItems = [
        {
            "title": "About",
            "link": "/about"
        },
        {
            "title": "Projects",
            "link": "/projects"
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

    const menuItemsFr = [
        {
            "title": "Nous",
            "link": "/about"
        },
        {
            "title": "Projets",
            "link": "/projects"
        },
        {
            "title": "Contact",
            "link": "/contact"
        },
        {
            "title": "Atelier",
            "link": "/workshop"
        }
    ]

    const currentLocale = useRouter().locale;
    if (currentLocale === 'fr') {
        currentMenu = menuItemsFr;
    } else {
        currentMenu = menuItems;
    }

    const headlineClasses = classNames("sone-menu-headline", {
        ['sone-menu-headline--fadein']: showExcerpt
    });

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
            <div className='sone-menu-content' data-visible={isMenuOpen && !tempHideIfSlogan} data-variant={variant}>
                {/* Menu Content - Left */}
                <div className='sone-menu-content--left'>
                    <h5>
                        <a className="contact-link" href="mailto:contact@soneworkshop.com">contact@soneworkshop.com</a>
                    </h5>
                    <h5>
                        <a className="contact-link" href="tel:+33157840051">+33157840051</a>
                    </h5>
                </div>

                {/* Menu Content - Right */}
                <div className='sone-menu-content--right'>
                    <ul>
                        {currentMenu.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className='sone-caps-text-large' style={{ '--animation-order': index+1 }} href={item.link}>
                                        <span className='sone-text-unmask'>
                                            {item.title}
                                        </span>
                                        <span className='sone-text-mask'>
                                            {item.title}
                                        </span>
                                    </Link>
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

            {/* slogan */}
            <h1 className={headlineClasses} data-variant={variant}>
                {slogan && slogan.map((item, index) => (
                    <span key={index} className='sone-menu-headline-mask'>
                        <span>{item}</span>
                    </span>
                ))}
            </h1>

        </>
    );
};

export default Menu;
