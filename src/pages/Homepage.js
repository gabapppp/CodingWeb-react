import React from "react";
import { Link } from "react-router-dom";
import Header from ".././components/Header";
import Card from ".././components/Card";
const Homepage = () => {
  return (
    <>
      {/* <h1>This is Homepage</h1> */}
      <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
        <Header />
        <div>
          <Card />
        </div>
      </div>

      {/* <Link to="/code">Move to code space</Link> */}
    </>
  );
};

export default Homepage;
