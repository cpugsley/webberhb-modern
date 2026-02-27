import { useState } from "react";
import { Phone, Menu, X, Instagram, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 24/7 Top Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 py-1.5 text-xs sm:text-sm font-display tracking-widest uppercase">
          <Clock className="w-3.5 h-3.5 text-secondary" />
          <span>24/7 Emergency Response</span>
          <span className="text-secondary font-bold mx-1">•</span>
          <a href="tel:5515021052" className="text-secondary hover:brightness-110 transition-all font-bold">
            Call 551-502-1052
          </a>
        </div>
      </div>
      <nav className="fixed top-[34px] sm:top-[36px] left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-3">
            <img src={logo} alt="WEBBER Home and Business" className="h-14 md:h-16 w-auto" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-display text-sm tracking-widest uppercase text-foreground/70 hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/webberhb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-secondary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="tel:5515021052"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded font-display text-sm tracking-wider uppercase hover:brightness-110 transition-all"
            >
              <Phone className="w-4 h-4" />
              551-502-1052
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block font-display text-sm tracking-widest uppercase text-foreground/70 hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:5515021052"
                className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded font-display text-sm tracking-wider uppercase w-fit"
              >
                <Phone className="w-4 h-4" />
                551-502-1052
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
};

export default Navbar;
