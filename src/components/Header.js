import React from "react";

function Header() {
  return (
    <div>
      <div className="bg-white">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
          <div>
            <img
              className="w-16 cursor-pointer"
              src="https://static.vecteezy.com/system/resources/thumbnails/004/909/777/small/coding-logo-design-template-vector.jpg"
              alt="..."
            />
          </div>
          <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Tutorial
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Coding
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Sign in
            </button>
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Register
            </button>
            <ion-icon
              onclick="onToggleMenu(this)"
              name="menu"
              className="text-3xl cursor-pointer md:hidden"
            />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
