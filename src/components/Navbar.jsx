import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { p_logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLan = (idioma) => {
    i18n.changeLanguage(idioma);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={p_logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Pedro de Lucca &nbsp;
            <span className='sm:block hidden'> | {t('coder')}</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10' role="navigation" aria-label="Main navigation">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(nav.title)}
            >
              {
                nav.title === 'translate'
                ? 
                  <button
                    type="button"
                    onClick={() => {
                      i18n.language === 'en' 
                        ? changeLan('pt')
                        : changeLan('en')
                    }}
                    aria-label={`Switch to ${i18n.language === 'en' ? 'Portuguese' : 'English'}`}
                    className="bg-transparent border-none cursor-pointer text-inherit"
                  >
                    {t(nav.title)}
                  </button>
                : <a 
                    href={`#${nav.id}`}
                    aria-label={`Navigate to ${t(nav.title)} section`}
                    className="focus:outline-none focus:ring-2 focus:ring-[#915EFF] focus:ring-offset-2 focus:ring-offset-primary rounded"
                  >
                    {t(nav.title)}
                  </a>
              }
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <button
            type="button"
            aria-label={toggle ? 'Close menu' : 'Open menu'}
            aria-expanded={toggle}
            onClick={() => setToggle(!toggle)}
            className="bg-transparent border-none cursor-pointer p-2 focus:outline-none focus:ring-2 focus:ring-[#915EFF] rounded"
          >
            <img
              src={toggle ? close : menu}
              alt={toggle ? 'Close menu' : 'Open menu'}
              className='w-[28px] h-[28px] object-contain'
            />
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  role="menuitem"
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } transition-colors`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  {nav.title === 'translate' ? (
                    <button
                      type="button"
                      onClick={() => {
                        i18n.language === 'en' 
                          ? changeLan('pt')
                          : changeLan('en')
                      }}
                      className="bg-transparent border-none cursor-pointer text-inherit w-full text-left focus:outline-none focus:ring-2 focus:ring-[#915EFF] rounded px-2"
                    >
                      {t(nav.title)}
                    </button>
                  ) : (
                    <a 
                      href={`#${nav.id}`}
                      className="block focus:outline-none focus:ring-2 focus:ring-[#915EFF] rounded px-2"
                    >
                      {t(nav.title)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;