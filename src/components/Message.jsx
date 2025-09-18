import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaSignature } from "react-icons/fa";

const Message = () => {
  return (
    <section id = "message"
    className="relative px-6 sm:px-8 lg:px-16 py-20 bg-gray-50 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-blue-100/20 blur-3xl"></div>
        <div className="absolute bottom-10 -right-10 w-96 h-96 rounded-full bg-yellow-100/15 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header with modern typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Words from Our <span className="text-blue-600">Managing Director</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image section with decorative elements */}
            <div className="lg:w-2/5 relative">
              <div className="relative h-full min-h-[400px]">
                <img
                  src="/images/owner.jpeg"
                  alt="Managing Director at SDC Pokhara – student counseling in Nepal"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <FaQuoteLeft className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Madhuri Poudel</h3>
                      <p className="text-blue-200">Managing Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message content */}
            <div className="lg:w-3/5 p-8 md:p-12">
              <div className="relative">
                <FaQuoteLeft className="text-5xl text-blue-100 absolute -top-2 -left-2" />
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed pl-10 mb-8">
                  "At SDC, we believe education transcends borders. Over the past decade, we've 
                  transformed aspirations into academic achievements for thousands of students. 
                  Our commitment goes beyond placements - we nurture global citizens who thrive 
                  in international environments and redefine success."
                </blockquote>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Madhuri Poudel</h4>
                    <p className="text-blue-600">Managing Director</p>
                    <p className="text-sm text-gray-500 mt-1">SDC Education Consultancy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Message;