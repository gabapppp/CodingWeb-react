import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
    return (
        <>
            <h1>This is Homepage</h1>
            <Link to="/code" >Move to code space</Link>
        </>
    )
};

export default Homepage;