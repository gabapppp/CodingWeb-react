import React from "react";
import PlanCard from "../components/PlanCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Pricing() {
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center bg-yellow-500 p-4 min-h-screen ">
      <div className="mb-2 mt-12 text-center">
        <h1 className="mb-4 text-7xl font-black text-white">Pricing</h1>
        <p className="text-lg text-white">
          Choose the right pricing for you and get started working on your
          project.
        </p>
      </div>
      <div className="flex flex-col gap-8 p-10 xl:flex-row">
        <PlanCard />
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Pricing;
