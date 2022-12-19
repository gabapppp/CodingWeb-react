import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
const Homepage = () => {
    return (
        <>
            <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
                <Header />
                <div>
                    <Card />
                </div>
            </div>
        </>
    )
};

export default Homepage;