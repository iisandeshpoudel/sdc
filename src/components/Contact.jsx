import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactInfo = () => {

  return (
    <motion.section
      id="contact"
      className="relative px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-br from-blue-50 to-blue-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative elements */}
      <div className="absolute -right-20 top-1/3 w-64 h-64 rounded-full bg-blue-200/20 blur-3xl"></div>
      <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-blue-300/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-1 w-8 bg-blue-400"></div>
            <span className="font-text text-sm font-medium tracking-wider text-blue-600">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Contact Our{" "}
            <span className="text-blue-600">Study Abroad Experts</span>
          </h2>
          <p className="font-text max-w-2xl mx-auto text-lg text-blue-800">
            Reach out to our team for personalized guidance on your study abroad journey.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 justify-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="font-heading text-2xl font-bold text-blue-900 mb-8">
                Our Contact Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                      <FiMail className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">Email Us</h4>
                      <a
                        href="mailto:md.passpokhara@gmail.com"
                        className="text-blue-600 hover:underline"
                      >
                        md.passpokhara@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                      <FiPhone className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">Call Us</h4>
                      <a
                        href="tel:+9779849209558"
                        className="text-blue-600 hover:underline"
                      >
                        +977-9849209558
                      </a>
                      <br />
                      <a
                        href="tel:+97761591156"
                        className="text-blue-600 hover:underline"
                      >
                        061-591156
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                      <FiMapPin className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">Location</h4>
                      <p className="text-blue-800">
                        SDC Education Consultancy
                        <br />
                        Pokhara, Nepal
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">Office Hours</h4>
                      <p className="text-blue-800">
                        Sunday - Friday: 9AM - 5PM
                        <br />
                        Saturday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="pt-8 mt-8 border-t border-blue-100">
                <h3 className="font-heading text-xl font-bold text-blue-900 mb-4">
                  Visit Us
                </h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.532138081345!2d83.9845531209424!3d28.221523927298648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995952a61fd9c77%3A0x981708a32fbf1928!2sSDC%20Pokhara!5e0!3m2!1sen!2snp!4v1754568472277!5m2!1sen!2snp"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactInfo;