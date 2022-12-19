import React from "react";
// import { Link } from "react-router-dom";
import Header from ".././components/Header";
import Card from ".././components/Card";
import Footer from ".././components/Footer";
const Homepage = () => {
  return (
    <>
      {/* <h1>This is Homepage</h1> */}
      <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] min-h-max">
        <Header />
        <Card />
        <Footer/>
      </div>

      {/* <Link to="/code">Move to code space</Link> */}
    </>
  );
};

export default Homepage;
