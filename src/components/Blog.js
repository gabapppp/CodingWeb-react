import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import javascript from "../../src/images/js.jpeg";
import python from "../../src/images/python.png";
import cplusplus from "../../src/images/cplusplus.jpg";

function Blog() {
  return (
    <>
      <Header />

      <div className="w-full bg-[#f9f9f9] py-[50px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 px-4 text-black">
            <Link to="/blogdetail">
              <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                <img className="h-56 w-full object-cover" src={javascript} />
                <div className="p-8 ">
                  <h3 className="font-bold  text-2xl my-1">
                    {" "}
                    Series tự học Javascript trong 10 tiếng
                  </h3>
                  <p className="text-gray-600 text-xl">
                    {" "}
                    Javascript là gì? Javascript dùng để làm gì?
                  </p>
                </div>
              </div>
            </Link>

            <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
              <img className="h-56 w-full object-cover" src={python} />
              <div className="p-8 ">
                <h3 className="font-bold  text-2xl my-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
                <p className="text-gray-600 text-xl">
                  {" "}
                  <h3 className="font-bold  text-2xl my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
              <img className="h-56 w-full object-cover" src={cplusplus} />
              <div className="p-8 ">
                <h3 className="font-bold  text-2xl my-1">
                  {" "}
                  <h3 className="font-bold  text-2xl my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </h3>
                <p className="text-gray-600 text-xl">
                  {" "}
                  <h3 className="font-bold  text-2xl my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
              <img className="h-56 w-full object-cover" src={python} />
              <div className="p-8 ">
                <h3 className="font-bold  text-2xl my-1">
                  {" "}
                  <h3 className="font-bold  text-2xl my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </h3>
                <p className="text-gray-600 text-xl">
                  {" "}
                  <h3 className="font-bold  text-2xl my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
              <img className="h-56 w-full object-cover" src={javascript} />
              <div className="p-8 ">
                <h3 className="font-bold  text-2xl my-1">
                  {" "}
                  <h3 className="font-bold  text-2xl my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </h3>
                <p className="text-gray-600 text-xl">
                  {" "}
                  <h3 className="font-bold  text-2xl my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
              <img className="h-56 w-full object-cover" src={cplusplus} />
              <div className="p-8 ">
                <h3 className="font-bold  text-2xl my-1">
                  {" "}
                  <h3 className="font-bold  text-2xl my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </h3>
                <p className="text-gray-600 text-xl">
                  {" "}
                  <h3 className="font-bold  text-2xl my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
              <img className="h-56 w-full object-cover" src={javascript} />
              <div className="p-8 ">
                <h3 className="font-bold  text-2xl my-1">
                  {" "}
                  <h3 className="font-bold  text-2xl my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </h3>
                <p className="text-gray-600 text-xl">
                  {" "}
                  <h3 className="font-bold  text-2xl my-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
