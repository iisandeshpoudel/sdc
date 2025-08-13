import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact"
import Partnerships from "./components/Partner";
import StudentPhotosGallery from "./components/StudentPhotosGallery";
import Message from "./components/Message";

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <StudentPhotosGallery/>
      <Services />
      <Partnerships/>
      <Message/>
      <ContactForm/>
      <Footer/>

    </div>
  );
}

export default App;
