import React from "react";
import Header from "./Compontents/header/Header";
import Nav from "./Compontents/nav/Nav";
import About from "./Compontents/about/About";
import Services from "./Compontents/services/Services";
import Experience from "./Compontents/experience/Experience";
import Portfolio from "./Compontents/portfolio/Portfolio";
import Testimonials from "./Compontents/testimonials/Testimonials";
import Contact from "./Compontents/contact/Contact";
import Footer from "./Compontents/footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
