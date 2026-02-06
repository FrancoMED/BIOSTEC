import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import LogoHeader from "../../assets/Images/logoBiostec.png";

// const NavBar = () => {
// 	const location = useLocation();

// 	useEffect(() => {
// 		if (location.hash) {
// 			// Si hay un hash en la URL (ej: #inicio)
// 			const element = document.getElementById(location.hash.substring(1)); // Busca el elemento por ID
// 			if (element) {
// 				element.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente
// 			}
// 		}
// 	}, [location]);

// 	return (
// 		<nav
// 			class={`navbar navbar-expand-lg sticky-top ${styles.bg_body_tertiary} ${styles.nav}`}
// 		>
// 			<div class="container-fluid">
// 				<hr />
// 				<button
// 					class={`navbar-toggler ${styles.navbar_toggler}`}
// 					type="button"
// 					data-bs-toggle="collapse"
// 					data-bs-target="#navbarSupportedContent"
// 				>
// 					<span
// 						class={`navbar-toggler-icon ${styles.navbar_toggler_icon}`}
// 					></span>
// 				</button>
// 				<div
// 					class="collapse navbar-collapse justify-content-end"
// 					id="navbarSupportedContent"
// 				>
// 					<ul class="navbar-nav mb-2 mb-lg-0">
// 						<li>
// 							<Link class={`nav-link ${styles.nav_link}`} to="/#inicio">
// 								Inicio
// 							</Link>
// 						</li>
// 						<li>
// 							<Link class={`nav-link ${styles.nav_link}`} to="/#servicios">
// 								Servicios
// 							</Link>
// 						</li>
// 						<li>
// 							<Link class={`nav-link ${styles.nav_link}`} to="/#sobreNosotros">
// 								Sobre Nosotros
// 							</Link>
// 						</li>
// 						<li>
// 							<Link class={`nav-link ${styles.nav_link}`} to="/#contacto">
// 								Contacto
// 							</Link>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

// export default NavBar;

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
      className={`
    transition-all duration-300
    sticky top-0 backdrop-saturate-100 ${scrolled ? "bg-gray-950/70 backdrop-blur-md shadow-lg" : "bg-black"}
  `}
    >
      <div className="max-w-full mx-auto px-6">
        <div className="flex items-center justify-between h-20 ">
          {/* Logo + links desktop */}
          <div className="flex items-center">
            <a href="#" className="block">
              <img
                src={LogoHeader}
                alt="Logo"
                className={`h-15 relative left-2 ${styles.img_nav_link}`}
              />
            </a>
          </div>

          {/* LINKS DESKTOP */}
          <div className="hidden md:flex items-center gap-10">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-white hover:text-gray-200 text-1xl font-semibold relative right-8 ${styles.nav_link}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Botón mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              style={{ WebkitTapHighlightColor: "transparent" }}
              className="
    fixed top-4 right-4 z-70
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
                className={`
      absolute h-0.5 w-5 bg-white transition-all duration-300
      ${isOpen ? "rotate-45" : "-translate-y-1.5"}
    `}
              />
              <span
                className={`
      absolute h-0.5 w-5 bg-white transition-all duration-300
      ${isOpen ? "opacity-0" : "opacity-100"}
    `}
              />
              <span
                className={`
      absolute h-0.5 w-5 bg-white transition-all duration-300
      ${isOpen ? "-rotate-45" : "translate-y-1.5"}
    `}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Menú mobile */}
      <div
        className={`
            fixed top-0 left-0 right-0 z-60
            h-65
            md:hidden
            bg-gray-900/95 backdrop-blur-md
            shadow-xl
            transition-all duration-200 origin-top
            ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
          `}
      >
        {/* 
    pt-20 → empuja los links debajo del botón
    pb-4  → 1rem debajo del último link
  */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-end">
            <div
              className="
        fixed
        top-18  /* 👈 abajo del botón */
        right-4
        z-65
        flex flex-col gap-3
        w-26
      "
            >
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={` ${styles.mobile_nav_item}
              block
              text-lg font-semibold text-white
              rounded-lg
              hover:bg-gray-800
              active:bg-gray-900
              transition
            `}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
