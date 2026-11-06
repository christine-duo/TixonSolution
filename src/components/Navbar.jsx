import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_SERVICES } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const handleServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const navLinkClass =
    "nav-link text-[13px] font-bold text-gray-600 transition-colors hover:text-green-700";

  const activeDesktopLink = (hash) =>
    location.pathname === "/" && location.hash === hash;
  const servicesActive = location.pathname.startsWith("/services/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-300 sm:px-5 ${
        scrolled ? "pt-2" : "pt-3"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1320px] items-center justify-between rounded-[18px] border px-4 transition-all duration-300 sm:px-5 lg:px-6 ${
          scrolled
            ? "h-[64px] border-green-200/70 bg-white/95 shadow-[0_12px_36px_rgba(22,163,74,.12)] backdrop-blur-xl"
            : "h-[68px] border-green-100/80 bg-white/80 shadow-[0_10px_32px_rgba(31,41,55,.06)] backdrop-blur-xl"
        }`}
      >
        <Link to="/#home" className="group flex items-center gap-2" onClick={closeMenu}>
          <span className="text-lg font-black tracking-tight text-gray-900 sm:text-xl">
            Tixon<span className="text-green-600">Solution</span>
          </span>
        </Link>

        <nav className="desktop-nav hidden items-center rounded-full border border-green-100 bg-green-50/50 p-1.5 lg:flex">
          <Link
            to="/#home"
            className={`${navLinkClass} nav-item ${activeDesktopLink("#home") || (!location.hash && location.pathname === "/") ? "nav-item-active" : ""}`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button
              className={`${navLinkClass} nav-item flex items-center gap-1 ${servicesActive ? "nav-item-active" : ""}`}
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                <div className="services-menu overflow-hidden rounded-[16px] border border-green-100 bg-white/95 p-2 shadow-[0_20px_50px_rgba(22,163,74,.14)] backdrop-blur-xl">
                  {NAV_SERVICES.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-600 transition-all hover:translate-x-1 hover:bg-green-50 hover:text-green-700"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/#industries"
            className={`${navLinkClass} nav-item ${activeDesktopLink("#industries") ? "nav-item-active" : ""}`}
          >
            Industries
          </Link>
          <Link
            to="/#technologies"
            className={`${navLinkClass} nav-item ${activeDesktopLink("#technologies") ? "nav-item-active" : ""}`}
          >
            Technologies
          </Link>
          <Link
            to="/#about"
            className={`${navLinkClass} nav-item ${activeDesktopLink("#about") ? "nav-item-active" : ""}`}
          >
            About
          </Link>

          <Link
            to="/#consultation"
            className="contact-link ml-2 flex items-center justify-center rounded-full bg-[#22c55e] px-5 py-2.5 text-[13px] font-bold text-white"
          >
            <span>Contact</span>
          </Link>
        </nav>

        <button
          className="mobile-menu-button flex h-10 w-10 items-center justify-center rounded-full border border-green-100 bg-green-50/70 text-gray-700 transition hover:border-green-300 hover:text-green-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu mx-3 mt-2 rounded-[18px] border border-green-100 bg-white/95 px-3 py-3 shadow-[0_18px_50px_rgba(22,163,74,.16)] backdrop-blur-xl lg:hidden">
          <div className="space-y-1">
            <Link to="/#home" className={`${navLinkClass} mobile-link`} onClick={closeMenu}>
              Home
            </Link>
            <div>
              <button
                className={`${navLinkClass} flex w-full items-center gap-1 py-2`}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="ml-3 space-y-1 border-l-2 border-green-200 pl-3">
                  {NAV_SERVICES.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block py-1.5 text-sm text-gray-600 hover:text-green-700"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/#industries" className={`${navLinkClass} mobile-link`} onClick={closeMenu}>
              Industries
            </Link>
            <Link to="/#technologies" className={`${navLinkClass} mobile-link`} onClick={closeMenu}>
              Technologies
            </Link>
            <Link to="/#about" className={`${navLinkClass} mobile-link`} onClick={closeMenu}>
              About
            </Link>
            <Link
              to="/#consultation"
              className="glow-btn mt-2 block rounded-full px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={closeMenu}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
