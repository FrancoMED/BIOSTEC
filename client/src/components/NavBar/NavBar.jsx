import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import LogoHeader from "../../assets/Images/logoBiostec.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);
      setVisible(currentScrollY < lastScrollY || currentScrollY < 50);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`z-100 transition-all duration-300 sticky top-0 backdrop-saturate-100 
                  ${scrolled ? "bg-gray-950/70 backdrop-blur-md shadow-lg" : "bg-black"}`}
    >
      <div className="max-w-full mx-auto px-6">
        <div className="flex items-center justify-between h-20 ">
          {/* Logo + links desktop */}
          <div className="flex items-center">
            <Link to="/" className="block">
              <img
                src={LogoHeader}
                alt="Logo biostec"
                className={`h-15 relative left-2 ${styles.img_nav_link}`}
              />
            </Link>
          </div>

          {/* LINKS DESKTOP */}
          <div className="hidden md:flex items-center gap-10">
            {["Inicio", "Servicios", "Sobre Nosotros", "Contacto"].map(
              (item) => (
                <Link
                  key={item}
                  to={`/#${item}`}
                  className={`text-white hover:text-gray-200 text-1xl font-semibold relative right-8 ${styles.nav_link}`}
                >
                  {item}
                </Link>
              ),
            )}
          </div>

          {/* Botón mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              style={{ WebkitTapHighlightColor: "transparent" }}
              className=" z-70 fixed top-4 right-4 
                          md:hidden
                          w-11 h-11
                          flex items-center justify-center
                          rounded-full
                          bg-gray-900/80 backdrop-blur-md
                          text-white shadow-lg
                          hover:bg-gray-800
                          active:scale-95 active:opacity-80
                          transition-all duration-200
                          touch-manipulation
                          focus:outline-none focus:ring-2 focus:ring-white
                          "
            >
              <span className="sr-only">Toggle menu</span>

              <span
                className={`absolute h-0.5 w-5 bg-white transition-all duration-300
                ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-white transition-all duration-300
                ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-white transition-all duration-300
                ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Menú mobile */}
      <div
        className={`z-60 fixed top-0 left-0 right-0 h-72md:hiddenbg-gray-900/95 backdrop-blur-mdshadow-xltransition-all duration-200 origin-top
                    ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-end">
            <div className="fixed top-18 right-4z-65flex flex-col gap-3w-26">
              {["Inicio", "Servicios", "Sobre Nosotros", "Contacto"].map(
                (item) => (
                  <Link
                    // key={item}
                    to={`/#${item}`}
                    className={`block text-lg font-semibold text-white rounded-lg hover:bg-gray-800 active:bg-gray-900 transition  ${styles.mobile_nav_item}`}
                  >
                    {item}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
