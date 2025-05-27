import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavLink from "../utilities/NavLink";
import Container from "../utilities/Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact-us", label: "Contact Us" },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        if (currentScrollY < lastScrollY) {
          // Scrolling up
          setShowHeader(true);
        } else {
          // Scrolling down
          setShowHeader(false);
        }
      } else {
        // At top, don't show fixed header
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

   useEffect(() => {
    if (isMenuOpen) {
      // Disable scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scroll
      document.body.style.overflow = '';
    }

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`
          py-[10px] xl:py-[30px]  w-full z-50  absolute  left-0
          ${
            showHeader
              ? "fixed top-[0px] left-0 bg-[#FFFBEF] shadow-lg translate-y-0 transition-transform duration-300 ease-in-out"
              : 'top-[20px]'
          }
        `}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Image
            src={
              showHeader
                ? "/assets/images/logo-black.webp"
                : "/assets/images/logo.webp"
            }
            alt="Liv Interio Logo"
            width={175}
            height={0}
            className=" h-auto object-contain"
            priority
          />
          <button
            className="block xl:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Image
              src="/assets/icons/menu.webp"
              alt="Menu Icon"
              width={35}
              height={0}
              className={`w-[25px] xl:w-[35px] h-auto object-contain ${showHeader && "invert"}`}
            />
          </button>

          <nav
            className={`
                fixed top-0 xl:top-auto w-full max-w-[500px] h-screen xl:relative xl:w-fit xl:max-w-fit xl:h-auto xl:p-0 xl:bg-transparent p-[40px] bg-[var(--background-primary)] transition-all duration-400 ease-in-out 
                ${isMenuOpen ? "right-0 z-50" : "right-[-550px] xl:right-auto"}`}
          >
            <div className="flex xl:hidden items-center justify-between w-full pb-[20px] mb-[20px] border-b border-[var(--text-primary)]">
              <Image
                src="/assets/images/logo-black.webp"
                alt="Liv Interio Logo"
                width={175}
                height={0}
                className=" h-auto object-contain"
                priority
              />
              <button
                className="block xl:hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  src="/assets/icons/close.webp"
                  alt="Menu Icon"
                  width={25}
                  height={0}
                  className="h-auto object-contain"
                />
              </button>
            </div>
            <ul
              className={`flex items-center space-x-6 ${
                isMenuOpen && "flex-col gap-[25px] mt-[35px] xl:mt-0 xl:flex-row xl:gap-0"
              }`}
            >
              {navLinks.map(({ href, label }) => (
                <li key={href} className="mr-0 xl:mr-[40px]">
                  <NavLink
                    href={href}
                    showHeader={showHeader}
                    className={isMenuOpen && "!text-[var(--text-primary)]"}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  isHoverBorder={false}
                  showHeader={showHeader}
                  href=""
                  className={`border inline-block px-[30px] py-[15px] hover:bg-white hover:text-black transition-colors
                    ${showHeader ? "border-[var(--text-primary)]" : "border-white"}
                    ${isMenuOpen && "!text-[var(--text-primary)] !border-[var(--text-primary)]"}`}
                >
                  Get a Call
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
