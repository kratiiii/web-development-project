import React from "react";
import Navbar from "./Navbar";
import Header from "./header";
import About from "./about";
import Services from "./services";
import Products from "./products";
import Contact from "./contact";
import Footer from "./footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
