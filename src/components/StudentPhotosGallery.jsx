import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import studentPhotos from "./data/Studentsphoto";

import "swiper/css";
import "swiper/css/navigation";

const StudentPhotosGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % studentPhotos.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? studentPhotos.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-1 w-8 bg-blue-400 rounded-full"></div>
            <span className="text-sm font-medium tracking-wider text-blue-600">
              OUR STUDENTS
            </span>
            <div className="h-1 w-8 bg-blue-400 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 animate-fadeIn">
            Our Success <span className="text-blue-600">Gallery</span>
          </h2>
        </div>

        {/* Swiper Gallery */}
        <div className="relative px-4 sm:px-12">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            speed={700}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 30 },
              768: { slidesPerView: 2.5, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            {studentPhotos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative flex items-center justify-center p-8 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="slide-card relative inline-block rounded-3xl overflow-hidden border-2 border-transparent bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-lg shadow-lg hover:shadow-3xl transition-all duration-500">
                    <img
                      src={photo}
                      alt={`Student visa success in Pokhara – SDC consultancy ${index + 1}`}
                      className="w-auto h-auto max-w-full max-h-[70vh] object-contain bg-white mx-auto transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fadeIn">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-4xl hover:text-red-400 transition"
          >
            <FiX />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-12 text-white text-5xl hover:text-blue-400 transition"
          >
            <FiChevronLeft />
          </button>
          <img
            src={studentPhotos[currentIndex]}
            alt="Student success photo – SDC Pokhara"
            className="max-w-[90%] max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-12 text-white text-5xl hover:text-blue-400 transition"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default StudentPhotosGallery;
