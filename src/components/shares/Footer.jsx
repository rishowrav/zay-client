import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="bg-[#212934] ">
        <footer className="footer font-light container lg:w-[1115px] mx-auto text-[#CFD6E1] px-6 md:px-0  py-10">
          <nav className="w-full">
            <h6 className="font-semibold text-3xl   text-[#59AB6E]">
              Zay Shop
            </h6>

            <hr className=" w-full border-x-0 border-b-0 my-2 border-gray-700" />

            <ul className="space-y-3">
              <li className="flex items-center gap-1">
                <FaLocationDot className="text-2xl" />

                <span className="text-[18px]">
                  123 Consectetur at ligula 10660
                </span>
              </li>
              <li className="flex items-center gap-1">
                <IoIosCall className="text-2xl" />

                <span className="text-[18px]">010-020-0340</span>
              </li>
              <li className="flex items-center  gap-1">
                <MdOutlineEmail className="text-2xl" />

                <span className="text-[18px]">zay@company.com</span>
              </li>
            </ul>
          </nav>
          <nav className="w-full">
            <h6 className="font-light text-3xl ">Products</h6>

            <hr className=" w-full border-x-0 border-b-0 my-2 border-gray-700" />

            <ul className="space-y-3">
              <li className="text-[18px]">Luxury</li>
              <li className="text-[18px]">Sport Wear</li>
              <li className="text-[18px]">Men's Shoes</li>
              <li className="text-[18px]">Women's Shoes</li>
              <li className="text-[18px]">Popular Dress</li>
              <li className="text-[18px]">Gym Accessories</li>
              <li className="text-[18px]">Sport Shoes</li>
            </ul>
          </nav>
          <nav className="w-full">
            <h6 className="font-light text-3xl ">Further Info</h6>

            <hr className=" w-full border-x-0 border-b-0 my-2 border-gray-700" />

            <ul className="space-y-3">
              <li className="text-[18px]">Home</li>
              <li className="text-[18px]">About Us</li>
              <li className="text-[18px]">Shop Locations</li>
              <li className="text-[18px]">FAQs</li>
              <li className="text-[18px]">Contact</li>
            </ul>
          </nav>
        </footer>

        <footer className="footer container lg:w-[1115px] mx-auto text-[#CFD6E1] border-gray-700  border-t px-6 md:px-0 py-10">
          <ul className="flex text-md gap-2">
            <li className="w-12 h-12 border rounded-full flex justify-center items-center border-gray-700">
              <FaFacebook className="text-2xl " />
            </li>
            <li className="w-12 h-12 border rounded-full flex justify-center items-center border-gray-700">
              <FaInstagram className="text-2xl " />
            </li>
            <li className="w-12 h-12 border rounded-full flex justify-center items-center border-gray-700">
              <FaLinkedin className="text-2xl " />
            </li>
            <li className="w-12 h-12 border rounded-full flex justify-center items-center border-gray-700">
              <FaTwitterSquare className="text-2xl " />
            </li>
          </ul>
          <nav className="md:place-self-center  md:justify-self-end">
            <div className="join rounded-md">
              <input
                className="input text-[18px] h-10 w-52 font-light input-bordered border-gray-700 border bg-[#212934] join-item"
                placeholder="Email Address"
              />
              <button className="btn btn-sm px-4 h-10 text-[#CFD6E1] join-item   text-[18px] font-light hover:bg-[#59AB6E] bg-[#59AB6E] border-gray-700 border ">
                Subscribe
              </button>
            </div>
          </nav>
        </footer>
        <div className=" bg-[#1D242D] h-20 flex justify-center items-center">
          <div className="footer   text-[18px] container lg:w-[1115px] mx-auto text-[#CFD6E1] px-6 md:px-0 py-4">
            Copyright © {new Date().getFullYear()} Company Name | Designed by
            Rishowrav
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
