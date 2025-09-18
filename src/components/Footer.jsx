import React from "react";
import { motion } from "framer-motion";
import {
  FiLinkedin,
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FiFacebook size={18} />,
      url: "https://www.facebook.com/sdcpokhara",
    },
    {
      icon: <AiFillTikTok size={18} />,
      url: "https://www.tiktok.com/@sdc.pokhara",
    },
    {
      icon: <FiLinkedin size={18} />,
      url: " https://www.linkedin.com/company/study-destination-centre",
    },
    {
      icon: <FiInstagram size={18} />,
      url: "https://www.instagram.com/sdc_pokhara/",
    },
  ];

  const quickLinks = [
    { name: "About Us", url: "#about" },
    { name: "Services", url: "#services" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <footer className="font-text bg-blue-900/5 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
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
                  alt="SDC Pokhara logo – study abroad consultancy"
                  className="w-50 h-15 object-cover"
                  color="black"
                />
              </motion.div>
            </div>
            <p className="text-blue-800/80 text-sm">
              Premier consulting for international students seeking admission to
              top-tier universities worldwide.
            </p>
            <div className="flex gap-4 mt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-500 transition-colors p-2"
                >
                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                    {link.icon}
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-medium text-blue-900">Quick Links</h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-blue-800/80 hover:text-blue-600 transition-colors text-sm flex items-center gap-1.5"
                >
                  <FiArrowUpRight size={14} />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-medium text-blue-900">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm text-blue-800/80">
              <p>Pokhara Street</p>
              <p>Pokhara, 33700</p>
              <p>md.passpokhara@gmail.com </p>
              <p>+977-9849209558, 061-591156 </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full h-px bg-blue-200 my-12"
        />

        {/* Copyright and Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          <p className="text-blue-800/60">
            © {new Date().getFullYear()} Study Destination Center. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-blue-800/60 hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-blue-800/60 hover:text-blue-600 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>

        {/* Developed By Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-x text-blue-700/80"
        >
          Developed by{" "}
          <a
            href="https://bichitras.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-500"
          >
            Bichitras Group Pvt. Ltd.
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
