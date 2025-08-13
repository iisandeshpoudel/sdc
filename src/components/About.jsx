import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import ReactCountryFlag from "react-country-flag";

const About = () => {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "1K+", label: "Students Helped" },
    { value: "50+", label: "Partner Universities" },
    { value: "10+", label: "Countries" },
  ];

  const countries = [
    { code: "US", name: "USA" },
    { code: "GB", name: "UK" },
    { code: "CA", name: "Canada" },
    { code: "AU", name: "Australia" },
    { code: "MT", name: "Malta" },
    { code: "DK", name: "Denmark" },
    {code: "NZ", name: "New Zeland"},
    { code: "FI", name: "Finland" },

  ];

  const services = [
    "Test Preparation",
    "Admission Guidance",
    "Financial Advice",
    "Visa Assistance",
    "Scholarship Support",
    "Pre-Departure Orientation"
  ];

  return (
    <motion.section
      id="about"
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
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-1 w-8 bg-blue-400"></div>
            <span className="font-text text-sm font-medium tracking-wider text-blue-600">
              OUR STORY
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Guiding Students to Global <br />
            <span className="text-blue-600">Education Excellence</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="font-text lg:w-1/2 space-y-6 text-blue-800"
          >
            <p className="text-lg leading-relaxed">
              Study Destination Center (SDC) is a premier education consultancy dedicated to transforming students' aspirations of studying abroad into reality. With a decade of experience, we've successfully guided thousands of students to top universities worldwide.
            </p>
            
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-blue-800">
                To simplify the complex university application process by providing innovative, accurate, and time-saving admission information while bridging the gap between educational institutions and aspiring students.
              </p>
            </div>

            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
              <h3 className="font-heading text-xl font-bold text-blue-900 mb-4">Our Services</h3>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-blue-800">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Countries we specialize in */}
            <div className="mt-6">
              <h3 className="font-text font-medium text-blue-900 mb-4">Countries We Specialize In:</h3>
              <div className="flex flex-wrap gap-3">
                {countries.map((country, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100"
                  >
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      style={{ width: "1.2em", height: "1.2em" }}
                      title={country.name}
                    />
                    <span className="text-sm text-blue-800">{country.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg border border-blue-100"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="font-text bg-blue-50/50 p-6 rounded-xl border border-blue-100"
                >
                  <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                  <p className="text-blue-800">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Reputation Section */}
            <div className="font-text mt-8 p-6 bg-blue-500/5 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Our Reputation</h3>
              <p className="text-blue-800 mb-4">
                Recognized as one of Nepal's top international student recruitment firms, SDC has built a foundation for academic and professional success through quality service and reliability.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-1 h-8 bg-blue-400 rounded-full"></div>
                <p className="text-blue-700 font-medium italic">
                  "Client satisfaction is the cornerstone of our growth"
                </p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="font-text mt-6 p-6 bg-white rounded-xl border border-blue-200 shadow-sm">
              <p className="text-blue-900 italic mb-4">
                "SDC transformed my study abroad journey with their expert guidance and personalized approach."
              </p>
              <p className="text-blue-700 font-medium">- Sarah Johnson, Stanford University</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;