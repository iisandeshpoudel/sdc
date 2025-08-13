import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import ReactCountryFlag from "react-country-flag";

const Services = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const coreServices = [
    {
      title: "University Consultation",
      desc: "Personalized guidance for selecting the perfect institution and program tailored to your goals.",
    },
    {
      title: "Visa Assistance",
      desc: "Comprehensive support with documentation and visa application processes for stress-free approval.",
    },
    {
      title: "Accommodation Solutions",
      desc: "Help finding safe, affordable housing options in your destination country.",
    },
    {
      title: "Scholarship Guidance",
      desc: "Expert assistance identifying and applying for financial aid opportunities.",
    },
    {
      title: "Application Review",
      desc: "Professional editing and refinement of your applications for maximum impact.",
    },
    {
      title: "Post-Arrival Support",
      desc: "Ongoing assistance to ensure a smooth transition to your new academic life abroad.",
    },
  ];

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

  const coreServiceList = [
    "Student Counseling",
    "University & College Selection",
    "Course Guidance",
    "SOP Writing Guidelines",
    "Application Processing",
    "Visa Guidance",
    "Scholarship Guidance",
    "Pre-departure Briefing",
  ];

  const testPreparation = [
    { name: "IELTS", color: "bg-red-100 text-red-800" },
    { name: "PTE", color: "bg-purple-100 text-purple-800" },
    { name: "TOEFL", color: "bg-blue-100 text-blue-800" },
    { name: "GRE", color: "bg-green-100 text-green-800" },
  ];

  const requiredDocuments = [
    "Valid Original Passport (MRP)",
    "Academic Documents",
    "IELTS/PTE Score Sheet",
    "Income Source Verification Documents",
    "Family Relationship Certificates",
  ];

  const additionalServices = [
    "CA Report",
    "Valuation Report",
    "Mock Interviews",
    "University Application Forms",
    "Bank Loan Assistance",
    "Travel and Forex Support",
    "Airport Pickup",
    "Accommodation Arrangements",
    "Travel Planning",
    "Job Placement Support",
    "Credit Transfer Assistance",
  ];

  return (
    <motion.section
      id="services"
      className="relative px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative elements */}
      <div className="absolute -left-20 top-1/3 w-64 h-64 rounded-full bg-blue-200/20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-48 h-48 rounded-full bg-blue-300/20 blur-3xl"></div>

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
              WHAT WE OFFER
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Comprehensive Services for <br />
            <span className="text-blue-600">Your Study Abroad Journey</span>
          </h2>
          <p className="font-text max-w-2xl mx-auto text-lg text-blue-800">
            With over 5 years of dedicated service, we provide end-to-end
            solutions to make your international education dreams a reality.
          </p>
        </motion.div>

        {/* Countries Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20 bg-white p-8 rounded-2xl shadow-lg border border-blue-100"
        >
          <h3 className="font-heading text-2xl font-bold text-blue-900 mb-6 text-center">
            Countries We Specialize In
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 bg-blue-50/50 px-5 py-3 rounded-full border border-blue-200"
              >
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  style={{ width: "1.5em", height: "1.5em" }}
                  title={country.name}
                />
                <span className="font-medium text-blue-800">
                  {country.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Services Grid */}
        <div className="mb-20">
          <h3 className="font-heading text-3xl font-bold text-blue-900 mb-8 text-center">
            Our Core Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-text">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-blue-800 mb-6">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Sections in Accordion Style */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Test Preparation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100"
          >
            <button
              onClick={() => toggleSection("test")}
              className="w-full p-6 text-left"
            >
              <h3 className="font-heading text-2xl font-bold text-blue-900 mb-4 flex items-center justify-between">
                Test Preparation Courses
                {openSection === "test" ? (
                  <FiChevronUp className="text-blue-500" />
                ) : (
                  <FiChevronDown className="text-blue-500" />
                )}
              </h3>
            </button>

            {openSection === "test" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6"
              >
                <div className="flex flex-wrap gap-3">
                  {testPreparation.map((test, index) => (
                    <span
                      key={index}
                      className={`${test.color} px-4 py-2 rounded-full text-sm font-medium`}
                    >
                      {test.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Required Documents */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100"
          >
            <button
              onClick={() => toggleSection("documents")}
              className="w-full p-6 text-left"
            >
              <h3 className="font-heading text-2xl font-bold text-blue-900 mb-4 flex items-center justify-between">
                Required Documents
                {openSection === "documents" ? (
                  <FiChevronUp className="text-blue-500" />
                ) : (
                  <FiChevronDown className="text-blue-500" />
                )}
              </h3>
            </button>

            {openSection === "documents" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6"
              >
                <ul className="space-y-2 pl-5">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="text-blue-800 list-disc">
                      {doc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100"
          >
            <button
              onClick={() => toggleSection("services")}
              className="w-full p-6 text-left"
            >
              <h3 className="font-heading text-2xl font-bold text-blue-900 mb-4 flex items-center justify-between">
                Additional Services
                {openSection === "services" ? (
                  <FiChevronUp className="text-blue-500" />
                ) : (
                  <FiChevronDown className="text-blue-500" />
                )}
              </h3>
            </button>

            {openSection === "services" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {additionalServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                      <span className="text-blue-800">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="font-heading text-4xl font-bold text-blue-900 mb-6">
            Ready to start your journey?
          </h3>
          <a
            href="https://wa.me/+9779849209558?text=Hello%2C%20I%27m%20interested%20in%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="font-text group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-4 text-white text-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:gap-3 mx-auto max-w-max text-center"
          >
            <span className="text-sm">Get personalized consultation</span>
            <FiArrowRight className="transition-all duration-300 group-hover:rotate-45" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
