import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const sections = ["home", "about", "services", "partnerships", "contact"];

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setActive(id);
    setIsOpen(false); // Close mobile menu if open
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY;
      const homeSection = document.getElementById("home");

      if (scrollPosition < 100) {
        setActive("home");
        return;
      }

      const sectionPositions = sections
        .map((sectionId) => {
          const el = document.getElementById(sectionId);
          return {
            id: sectionId,
            top: el ? el.offsetTop : 0,
            bottom: el ? el.offsetTop + el.offsetHeight : 0,
          };
        })
        .filter((section) => section.id !== "home");

      const activeSection = sectionPositions.find(
        (section) =>
          scrollPosition >= section.top && scrollPosition < section.bottom
      );

      if (activeSection) {
        setActive(activeSection.id);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "home" && window.scrollY > 100) return;
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-100px 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) observer.unobserve(section);
      });
    };
  }, [sections]);

  return (
    <>
      <nav
        className={`font-text fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              setActive("home");
              setTimeout(() => {
                const homeSection = document.getElementById("home");
                if (homeSection && window.scrollY > 10) {
                  homeSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
          >
            <img
              src="/images/Logo.svg"
              alt="SDC Pokhara education consultancy logo"
              className="w-[120px] h-[50px] object-cover"
              color="black"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((link) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + sections.indexOf(link) * 0.1 }}
                onClick={() => scrollToSection(link)}
                className={`relative text-sm tracking-wider ${
                  active === link
                    ? "text-blue-600 font-medium"
                    : "text-blue-800/80 hover:text-blue-600"
                } transition-colors duration-300`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                {active === link && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500"
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="md:hidden text-blue-800 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1.5 w-6">
              <motion.span
                animate={{
                  y: isOpen ? 6 : 0,
                  rotate: isOpen ? 45 : 0,
                  width: isOpen ? "100%" : "100%",
                }}
                className="block h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="block h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={{
                  y: isOpen ? -6 : 0,
                  rotate: isOpen ? -45 : 0,
                  width: isOpen ? "100%" : "80%",
                }}
                className="block h-0.5 bg-current ml-auto rounded-full"
              />
            </div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu - Moved outside the main nav */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-blue-900/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-0 right-0 h-full w-72 bg-white border-l border-blue-100 z-50 flex flex-col p-8"
            >
              <div className="flex-1 flex flex-col justify-center gap-6">
                {sections.map((link) => (
                  <motion.button
                    key={link}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + sections.indexOf(link) * 0.05 }}
                    onClick={() => {
                      scrollToSection(link);
                      setIsOpen(false);
                    }}
                    className={`text-left text-lg py-3 px-4 rounded-lg ${
                      active === link
                        ? "bg-blue-100 text-blue-600 font-medium"
                        : "text-blue-800/80 hover:bg-blue-50"
                    }`}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
