//

// App.js
import React, { useRef } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import MyWorks from "./components/MyWorks";
import MyClients from "./components/MyClients";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const worksRef = useRef(null);
  const clientsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle navigation
  const handleNavClick = (section) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      skill: skillsRef,
      work: worksRef,
      client: clientsRef,
      contact: contactRef,
    };

    const ref = refs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-purple-900 min-h-screen">
      <div className="lg:max-w-[90%] mx-auto">
        <Header onNavClick={handleNavClick} />
        <div ref={homeRef}>
          <HeroSection />
        </div>
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div ref={skillsRef}>
          <MySkills />
        </div>
        <div ref={worksRef}>
          <MyWorks />
        </div>
        <div ref={clientsRef}>
          <MyClients />
        </div>
        <div ref={contactRef}>
          <ContactUs />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
