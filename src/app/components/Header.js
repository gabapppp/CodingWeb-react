import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../slices/auth";
function Header() {
  const { user: currentUser, username: name } = useSelector((state) => state.auth)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LogOutOnClick = (e) => {
    e.preventDefault();
    dispatch(logout());
  }
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
                <Link className="hover:text-gray-500" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" href="#">
                  Tutorial
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" to="coding">
                  Coding
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" href="#">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          {currentUser ? (<div className="flex items-center gap-6">
            <h1 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mt-2">
              {name}
            </h1>
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]" onClick={LogOutOnClick}>
              Logout
            </button>
            <ion-icon
              onclick="onToggleMenu(this)"
              name="menu"
              className="text-3xl cursor-pointer md:hidden"
            />
          </div>) : (
            <div className="flex items-center gap-6">
              <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]" onClick={() => { navigate("/login") }}>
                Sign in
              </button>
              <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]" onClick={() => { navigate("/signup") }}>
                Register
              </button>
              <ion-icon
                onclick="onToggleMenu(this)"
                name="menu"
                className="text-3xl cursor-pointer md:hidden"
              />
            </div>)}
        </nav>
      </div>
    </div>
  );
}

export default Header;
