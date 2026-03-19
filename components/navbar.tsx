"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollRotation, setScrollRotation] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
      setScrollRotation(scrollY % 360);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = 120;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Tools", href: "/tools" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[9999] hidden w-full flex-row items-center justify-between rounded-full bg-ad-navbar/80 md:flex backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 ${
          isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
        } py-2`}
      >
        {/* Logo */}
        <Link
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${
            isScrolled ? "ml-4" : ""
          }`}
          href="/"
        >
          <img
            src="/addstrategic-logo-blanco.png"
            alt="ADDSTRATEGIC Logo"
            className="h-8 w-auto md:h-10"
            draggable={false}
            style={{
              transform: `rotate(${scrollRotation}deg)`,
              transition: "transform 0.1s linear",
            }}
          />
        </Link>
        <div className="text-white font-bold text-lg tracking-wide absolute left-18">
          ADDINV.
        </div>

        {/* Desktop Navigation Links */}
        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-ad-secondary md:flex md:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative px-4 py-2 transition-colors cursor-pointer ${
                pathname === link.href || (link.href === "/tools" && pathname.startsWith("/tools"))
                  ? "text-ad-primary font-bold"
                  : "text-ad-secondary hover:text-ad-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Login / Sign Up */}
        <div className="flex items-center gap-4">
          <a
            href="https://app.addinvoicesai.com/"
            rel="noopener noreferrer"
            className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center btn-ad-primary shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-2 text-sm"
          >
            Join
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-4 left-4 right-4 z-[9999] flex flex-row items-center justify-between rounded-full bg-ad-navbar/80 md:hidden px-4 py-3 border border-border/50 backdrop-blur-sm shadow-lg">
        <Link className="flex items-center justify-center gap-2" href="/">
          <img
            src="/addstrategic-logo-blanco.png"
            alt="ADDSTRATEGIC Logo"
            className="h-7 w-auto md:h-8"
            draggable={false}
            style={{
              transform: `rotate(${scrollRotation}deg)`,
              transition: "transform 0.1s linear",
            }}
          />
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-ad-navbar border-l border-border/50 shadow-2xl p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-6 mt-16">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-left px-4 py-3 text-xl font-medium transition-colors rounded-lg hover:bg-white/5 ${
                      pathname === link.href || (link.href === "/tools" && pathname.startsWith("/tools"))
                        ? "text-ad-primary font-bold bg-white/5"
                        : "text-ad-secondary hover:text-ad-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="border-t border-border/50 pt-6 flex flex-col space-y-4">
                  <a
                    href="https://app.addinvoicesai.com/"
                    rel="noopener noreferrer"
                    className="px-4 py-4 text-xl font-bold text-center btn-ad-primary rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Join
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
