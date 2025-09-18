import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import ReactCountryFlag from "react-country-flag";

const Partnerships = () => {
  const countries = [
    { code: "AU", name: "Australia" },
    { code: "GB", name: "United Kingdom" },
    { code: "NZ", name: "New Zealand" },
    { code: "CA", name: "Canada" },
    { code: "US", name: "USA" },
    { code: "FR", name: "France" },
    { code: "MT", name: "Malta" },
    { code: "FI", name: "Finland" },
  ];

  const accreditations = [
    "British Council Certified",
    "QEAC Registered",
    "PIER Certified",
    "ICEF Certified Agency",
    "English Australia Member",
  ];

  const partnerships = [
    {
      category: "Educational Institutions",
      items: [
        "Direct pathway agreements with 50+ universities",
        "Preferred partner status with top-ranked institutions",
        "Dedicated admission representatives",
      ],
    },
    {
      category: "Test Preparation",
      items: [
        "Official IELTS test center partners",
        "PTE Academic test preparation centers",
        "TOEFL authorized preparation providers",
      ],
    },
    {
      category: "Financial Services",
      items: [
        "Education loan partnerships with major banks",
        "Scholarship opportunities with partner institutions",
        "Financial planning advisors",
      ],
    },
    {
      category: "Student Support",
      items: [
        "Accommodation providers in all major cities",
        "Airport pickup services",
        "Health insurance partners",
        "Career placement agencies",
      ],
    },
  ];

  return (
    <motion.section
      id="partnerships"
      className="relative px-8 md:px-12 lg:px-24 py-24 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-200/20 blur-3xl"></div>
      <div className="absolute left-1/4 bottom-0 w-48 h-48 rounded-full bg-blue-300/20 blur-3xl"></div>

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
              OUR NETWORK
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            University{" "}
            <span className="text-blue-600">Affiliations & Partnerships</span>
          </h2>
          <p className="font-text max-w-3xl mx-auto text-lg text-blue-800">
            We value strong, credible partnerships with globally recognized
            institutions to empower students in reaching their full potential.
          </p>
        </motion.div>

        {/* Accreditation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-blue-100"
        >
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h3 className="font-heading text-2xl font-bold text-blue-900 mb-4">
                Accreditation
              </h3>
              <p className="text-blue-800">
                We collaborate with accredited institutions and recognized
                education bodies to ensure high-quality education and legitimate
                qualifications.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {accreditations.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100"
                  >
                    <div className="p-1 bg-blue-100 rounded-full text-blue-600 mt-0.5">
                      <FiCheck className="text-sm" />
                    </div>
                    <span className="text-blue-800 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>


        {/* Countries Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-heading text-3xl font-bold text-blue-900 mb-8 text-center">
            Global University Affiliations
          </h3>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <p className="text-center text-blue-800 mb-8 max-w-3xl mx-auto">
              SDC is affiliated with a wide network of reputed universities and
              colleges across:
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {countries.map((country, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-3 w-24"
                >
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-100 shadow-sm flex items-center justify-center">
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      style={{ width: "2em", height: "2em" }}
                      title={country.name}
                    />
                  </div>
                  <span className="text-sm text-blue-800 text-center font-medium">
                    {country.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Strategic Partnerships */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-3xl font-bold text-blue-900 mb-8 text-center">
            Strategic Partnerships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100"
              >
                <h4 className="font-heading text-xl font-bold text-blue-900 mb-6 pb-2 border-b border-blue-100">
                  {section.category}
                </h4>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="p-1 bg-blue-100 rounded-full text-blue-600 mt-0.5 flex-shrink-0">
                        <FiCheck className="text-sm" />
                      </div>
                      <span className="text-blue-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
                            {/* Official Partners Section */}
          <div className="mt-12 pt-8 border-t border-blue-100">
            <h3 className="font-heading text-2xl font-bold text-blue-900 mb-6 text-center">
              Official Partners
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* IDP IELTS Partner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 w-40 h-24 flex items-center justify-center">
                  <img
                    src="/Partners/idp.png"
                    alt="IDP IELTS partner – test preparation in Pokhara"
                    className="h-12 object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-blue-700 font-medium">
                  IDP IELTS Official Partner
                </span>
              </motion.div>

              {/* British Council Partner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 w-40 h-24 flex items-center justify-center">
                  <img
                    src="/Partners/british.png"
                    alt="British Council partner – IELTS Pokhara"
                    className="h-12 object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-blue-700 font-medium">
                  British Council Partner
                </span>
              </motion.div>

              {/* EPCAN Member */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 w-40 h-24 flex items-center justify-center">
                  <img
                    src="/Partners/epcan.png"
                    alt="EPCAN member – Nepal education consultancy network"
                    className="h-20 w-auto object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-blue-700 font-medium">
                  Member of EPCAN
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Partnerships;
