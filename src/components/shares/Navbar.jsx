import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import {
  FaBarsStaggered,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/shop",
      name: "Shop",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  return (
    <>
      <div className="bg-[#212934] hidden md:block">
        <div className=" text-[#CFD6D6] flex justify-between items-center h-10 container lg:w-[1116px] mx-auto">
          {/* contact */}
          <ul className="flex items-center gap-3">
            <li className="flex items-center  gap-1">
              <MdOutlineEmail className="text-md" />

              <span className="text-[12px]">zay@company.com</span>
            </li>
            <li className="flex items-center gap-1">
              <IoIosCall className="text-md" />

              <span className="text-[12px]">010-020-0340</span>
            </li>
          </ul>

          {/* social */}
          <ul className="flex text-md gap-2">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-base-100 shadow-sm">
        <div className="navbar container lg:w-[1116px] mx-auto h-[92px]">
          {/* logo */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <FaBarsStaggered className="text-xl" />
              </div>
              {/* small device menu */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links.map((link) => (
                  <li key={link.path}>
                    <NavLink to={link.path}>{link.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <a className="font-semibold text-5xl text-[#59AB6E] ">Zay</a>
          </div>
          {/* menu */}
          <div className="navbar-center hidden lg:flex">
            {/* lagre device menu */}
            <ul className="menu menu-horizontal flex gap-16 text-lg font-light px-1">
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* user photo */}
          <div className="navbar-end">
            <div className="flex items-center">
              <div className="dropdown dropdown-end">
                <div className="btn btn-ghost btn-circle">
                  {" "}
                  <IoSearch className="text-2xl" />
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <HiOutlineShoppingCart className="text-2xl" />

                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
