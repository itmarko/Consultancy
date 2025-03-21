import React from "react";
import markologo from "/images/Logo/marko-dark.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gray-900 text-gray-200">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid grid-cols-2 min-[690px]:grid-cols-4 lg:grid-cols-6 gap-4 xl:gap-8 pt-14 pb-10 max-w-xs mx-auto min-[690px]:max-w-2xl lg:max-w-full">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              {/* Logo Section */}
              <div className="mb-4 md:mb-0">
                <img src={markologo} alt="Logo" className="h-10" />
                <p className="text-base text-gray-400 mt-2">
                  Empowering your business with technology.
                </p>
              </div>
              <p className="py-8 text-gray-400 lg:max-w-xs text-center lg:text-left">
                Trusted in more than 100 countries & 5 million customers. Have
                any query ?
              </p>
              <Link
                to="javascript:;"
                className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
              >
                Contact us
              </Link>
            </div>
            {/* End Col */}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-xl  text-gray-200 font-medium mb-7">Company</h4>
              <ul className="text-base  transition-all duration-500">
                <li className="mb-6">
                  <Link
                    to="javascript:;"
                    className="text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to="javascript:;"
                    className=" text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to="javascript:;"
                    className=" text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to="javascript:;"
                    className=" text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to="/contact-us"
                    className=" text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* End Col */}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-xl text-gray-200 font-medium mb-7">
                Products
              </h4>
              <ul className="text-base  transition-all duration-500">
                <li className="mb-6">
                  <Link
                    to="javascript:;"
                    className="text-gray-400 hover:text-gray-900"
                  >
                    Figma UI System
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to="javascript:;"
                    className=" text-gray-400 hover:text-gray-900"
                  >
                    Icons Assets
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to="javascript:;"
                    className=" text-gray-400 hover:text-gray-900"
                  >
                    Responsive Blocks
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to="javascript:;"
                    className=" text-gray-400 hover:text-gray-900"
                  >
                    Components Library
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to="javascript:;"
                    className=" text-gray-400 hover:text-gray-900"
                  >
                    Plugin Guide
                  </Link>
                </li>
              </ul>
            </div>
            {/* End Col */}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-xl text-gray-200 font-medium mb-7">
                Resources
              </h4>
              <ul className="text-base  transition-all duration-500">
                <li className="mb-6">
                  <Link
                    to="javascript:;"
                    className="text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to="javascript:;"
                    className=" text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    Quick Start
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to="javascript:;"
                    className=" text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    Documentation
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to="javascript:;"
                    className=" text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    User Guide
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    to="javascript:;"
                    className=" text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    Plugin Guide
                  </Link>
                </li>
              </ul>
            </div>
            {/* End Col */}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-xl text-gray-200 font-medium mb-7">
                Support
              </h4>
              <ul className="text-base  transition-all duration-500">
                <li className="mb-6">
                  <a
                    to="javascript:;"
                    className="text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    Customer Support
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    to="javascript:;"
                    className=" text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    Cookies
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    to="javascript:;"
                    className=" text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    License
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    to="javascript:;"
                    className=" text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    to="javascript:;"
                    className=" text-gray-400 whitespace-nowrap hover:text-gray-900"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            {/* End Col */}
          </div>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
